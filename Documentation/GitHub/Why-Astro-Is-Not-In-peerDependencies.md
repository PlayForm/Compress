# Why `astro` Is Not Listed in `peerDependencies`

## Overview

Both `@playform/compress` and `@playform/pipe` intentionally keep `astro` in
`dependencies` with a wildcard version (`"*"`) rather than in
`peerDependencies`. This decision was reached after real-world breakage
demonstrated that `peerDependencies` creates more problems than it solves for
Astro integrations. The relevant discussions are tracked in
[PlayForm/Pipe#231](https://github.com/PlayForm/Pipe/pull/231) and
[PlayForm/Compress#612](https://github.com/PlayForm/Compress/pull/612).

---

## Background: How `peerDependencies` Works

When a package lists another package in `peerDependencies`, it signals to the
package manager: "this dependency must already exist in the host project, and it
must satisfy the declared version range." The package manager does not install
peer dependencies automatically. Instead, it validates the version the host
project already has against the declared range and raises a warning or error if
there is a mismatch.

This pattern makes sense for packages like React component libraries, where
having two separate copies of React in `node_modules` would break hooks and
internal state. The library and the application must share exactly one copy, so
`peerDependencies` enforces that contract.

For Astro integrations, the situation is different. An integration is always
used inside an Astro project, meaning `astro` is already present in the host.
The integration should defer to whichever version of Astro the host project has
chosen, not impose its own version requirements on the user.

---

## The Breakage That Motivated the Change

[PlayForm/Compress#583](https://github.com/PlayForm/Compress/issues/583)
documents the concrete failure mode. `astro-compress@2.3.9` had `astro@5.16.8`
pinned as a direct `dependency`. This caused npm to hoist
`@astrojs/internal-helpers@0.7.5` to the top level of `node_modules`. When the
integration was used alongside `astro@6.x`, the build failed because Astro v6
requires `@astrojs/internal-helpers@0.8.0`, which introduced the
`collapseDuplicateLeadingSlashes` export that was absent in `0.7.5`.

The build error was:

```
The requested module '@astrojs/internal-helpers/path' does not provide
an export named 'collapseDuplicateLeadingSlashes'
```

The only workaround was to add a manual `overrides` block to `package.json`:

```json
{
	"overrides": {
		"@astrojs/internal-helpers": "0.8.0"
	}
}
```

This is a significant burden. The error message does not point to the
integration as the cause, and most users are not familiar with `overrides`. The
root cause was a pinned version in `dependencies` that pulled in a mismatched
transitive dependency. The fix was to stop pinning a specific version of `astro`
entirely.

---

## Why `peerDependencies` Does Not Solve the Problem

### Version validation triggers installation friction

Even with a wildcard range like `"astro": "*"` in `peerDependencies`, the
package manager still runs its peer dependency resolution logic. Depending on
the package manager and its version, this can produce warnings or hard errors if
the installed version of `astro` does not satisfy what the peer declaration
expects. The wildcard mitigates this in most cases, but moves `astro` back into
`peerDependencies` re-introduces machinery that was a known source of user
friction.

### The `legacy-peer-deps` trap

When peer dependency version conflicts occur, the common npm workaround is to
set `legacy-peer-deps=true` in `.npmrc`. This reverts npm to its v6 behavior and
suppresses peer dependency errors. However, this flag applies globally to the
entire project, silencing legitimate peer dependency warnings from other
packages too. It is a hidden configuration that new Astro users are unlikely to
know about, and the installation error message does not tell them to use it.
Requiring users to configure `legacy-peer-deps=true` in order to install an
integration is a poor developer experience.

### Duplicate packages in pnpm

The PR author of
[PlayForm/Compress#612](https://github.com/PlayForm/Compress/pull/612) observed
that with `astro` in `dependencies: "*"`, pnpm was creating two separate hoisted
copies of both `astro` and `vite` in the project. This is a real and valid
concern. pnpm's stricter isolation means it may not automatically deduplicate a
`dependencies: "*"` entry against the host project's already-installed `astro`.
Moving `astro` to `peerDependencies` was proposed as a way to tell pnpm to reuse
the host's copy.

However, this is the wrong fix at the wrong level. The correct resolution is the
`"*"` wildcard in `dependencies`, which instructs the package manager to accept
any already-installed version as satisfying the dependency. npm and yarn both
deduplicate against existing installations when the wildcard is used. For pnpm
specifically, resolution behavior can be controlled at the project level without
requiring the integration to change its `peerDependencies` contract and expose
all users to version validation errors.

---

## Why `"astro": "*"` in `dependencies` Is the Correct Approach

Keeping `astro` in `dependencies` with `"*"` achieves the following:

- **Type availability.** The `astro` package is present in the resolution graph,
  so TypeScript can find its type definitions when the integration imports from
  `astro`. This is necessary for the integration's own build and for consumers
  who rely on the exported types.
- **No version pinning.** A wildcard never pins a specific Astro version, which
  means the integration cannot be the cause of a version conflict between its
  bundled `astro` and the host project's `astro`. The regression in issue #583
  cannot occur again.
- **No peer validation overhead.** By staying in `dependencies`, the package
  avoids triggering peer dependency resolution checks, which eliminates the
  `legacy-peer-deps` workaround requirement and installation friction across
  npm, pnpm, and yarn.
- **Deduplication in practice.** When npm or yarn resolves `"astro": "*"`, they
  will reuse the version already installed in the host project rather than
  fetching a separate copy, because any version satisfies `*`. The integration
  defers to the host's chosen Astro version.

---

## Decision Record

| Approach                               | Behavior                                                 | Problem                                                                                                               |
| -------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `dependencies: "astro@5.x.x"` (pinned) | Installs a specific version                              | Pulls mismatched transitive deps; breaks on Astro major version upgrades (see issue #583)                             |
| `peerDependencies: "astro@*"`          | Validates host version at install time                   | Re-introduces peer resolution machinery; may require `legacy-peer-deps`; pnpm deduplication depends on project config |
| `dependencies: "astro@*"` (chosen)     | Accepts any installed version; deduplicates against host | No version validation errors; no pinned transitive deps; types remain available                                       |

---

## References

- [PlayForm/Pipe#231](https://github.com/PlayForm/Pipe/pull/231): Move
  `@types/node` to `peerDependencies` (contains maintainer rationale for
  `astro: "*"` in `dependencies`)
- [PlayForm/Compress#612](https://github.com/PlayForm/Compress/pull/612):
  Proposal to move `astro` back to `peerDependencies` (closed without merge)
- [PlayForm/Compress#583](https://github.com/PlayForm/Compress/issues/583):
  Regression report showing Astro v6 breakage caused by pinned `astro@5.x` in
  `dependencies`
