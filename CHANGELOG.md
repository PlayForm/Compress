## 2.4.3

### Fix

- Disabled `csso` by default, making `lightningcss` the only CSS compressor
  enabled out of the box. `csso` silently deletes modern CSS it cannot parse
  instead of leaving it untouched:
    - Media Queries Level 4 range syntax — `@media (width>=40rem)` — is removed
      entirely, which broke every responsive breakpoint on Tailwind CSS v4 sites
      because `@tailwindcss/vite` emits `sm:`, `md:`, `lg:`, `xl:` and `2xl:`
      using that syntax.
      ([#640](HTTPS://GitHub.Com/PlayForm/Compress/issues/640))
    - CSS nesting blocks are dropped from the output.
      ([#400](HTTPS://GitHub.Com/PlayForm/Compress/issues/400))
- Because `csso` ran after `lightningcss` in the compression chain, enabling
  `lightningcss` was not enough to avoid the problem — `csso` discarded the
  correct output it produced.

### Change

- `Source/Variable/Option.ts` now defaults `CSS` to
  `{ csso: false, lightningcss: {…} }`.
- `Source/Variable/Parser.ts` now lists `lightningcss` as the sole default CSS
  parser instead of `["csso", "lightningcss"]`.
- Documented the modern-CSS limitation and the opt-in procedure for `csso` in
  `README.md` and in the `Source/Interface/CSS/csso.ts` type documentation.

`csso` remains fully supported for anyone who wants it and can be re-enabled
explicitly with `CSS: { csso: true }`.

## 2.4.2

### Add

- Added TypeScript path aliases (`@Function/*`, `@Interface/*`, `@Type/*`,
  `@Variable/*`) in `tsconfig.json` to support the `@Function`/`@Interface`/
  `@Type`/`@Variable` import style (the `baseUrl` setting was removed as part of
  this change)

### Change

- Updated dependencies:
    - `@playform/pipe` (0.1.5 → 0.1.6)
    - `@types/csso` (5.0.4 → 5.0.5)
    - `commander` (14.0.3 → 15.0.0)
    - `lightningcss` (1.32.0 → 1.33.0)
    - `sharp` (0.34.5 → 0.35.3)
    - `svgo` (4.0.1 → 4.0.2)
    - `terser` (5.46.1 → 5.49.2)
    - `@playform/build` (0.3.1 → 0.3.4)
    - `browserslist` (4.28.2 → 4.28.7)

## 2.4.1

### Add

- Added `Configuration/ESBuild.d.ts` type declaration for the ESBuild build
  configuration

### Change

- Updated dependencies:
    - `@playform/pipe` (0.1.4 → 0.1.5)
    - `terser` (5.46.0 → 5.46.1)
    - `@playform/build` (0.3.0 → 0.3.1)
    - `browserslist` (4.28.1 → 4.28.2)

## 2.4.0

### Add

- Added `context7.json` for Context7 integration with the documentation

### Change

- Added `Documentation/` back to `.npmignore`
- Updated dependencies:
    - `astro` (5.16.8 → *)
    - `commander` (14.0.2 → 14.0.3)
    - `lightningcss` (1.30.2 → 1.32.0)
    - `svgo` (4.0.0 → 4.0.1)
    - `terser` (5.44.1 → 5.46.0)
    - `@playform/build` (0.2.6 → 0.3.0)

## 2.3.9

### Change

- Updated homepage URL to point at the README overview tab
  (`?tab=readme-ov-file`)
- Reverted author contact information back to the `PlayForm.Cloud` domain
- Updated dependencies:
    - `@playform/pipe` (0.1.3 → 0.1.4)
    - `astro` (* → 5.16.8)
    - `commander` (13.1.0 → 14.0.2)
    - `lightningcss` (1.29.3 → 1.30.2)
    - `sharp` (0.33.5 → 0.34.5)
    - `svgo` (3.3.2 → 4.0.0)
    - `terser` (5.39.0 → 5.44.1)
    - `@playform/build` (0.2.1 → 0.2.6)
    - `browserslist` (4.24.4 → 4.28.1)
- Enhanced the `JSON` compression option to accept a
  `Partial<{ replacer, space }>` object in addition to a boolean
- Cleaned up the ESBuild configuration by removing a redundant
  `@ts-expect-error` comment

## 2.3.8

### Add

- Added JSON file compression — the integration now parses and re-stringifies
  `.json` files
- Added `JSON` option to enable/disable JSON compression (enabled by default)
- Registered the `JSON` glob pattern (`**/*.json`) in the compression map

### Change

- Removed the unused `Source/Variable/Middleware.ts` stub (middleware TODO)
- Removed the `// TODO: Test this for security` marker from the integration

## 2.3.7

### Change

- Updated the package description to `Compress 🗜️`
- Updated author name to `Source ✍🏻 Open 👐🏻`
- Switched all Node.js core module imports to the `node:` protocol (`path`,
  `buffer`, `fs/promises`) across `Directory.ts`, `Integration.ts`, `Option.ts`,
  and the ESBuild configuration
- Updated dependencies:
    - `@playform/pipe` (0.1.2 → 0.1.3)
    - `commander` (13.0.0 → 13.1.0)
    - `deepmerge-ts` (7.1.3 → 7.1.5)
    - `lightningcss` (1.28.2 → 1.29.3)
    - `terser` (5.37.0 → 5.39.0)
    - `@playform/build` (0.2.1 → 0.2.4)
    - `browserslist` (4.24.2 → 4.24.4)
- Allowed compression options (`csso`, `lightningcss`, `html-minifier-terser`,
  `sharp`, `terser`, `svgo`) to accept a boolean in addition to their option
  object
- Changed the default `lightningcss` compressor configuration to `false`

## 2.3.6

### Change

- Updated author contact information to use the `PlayForm.LTD` domain
- Fixed `Cache.Search` being set correctly to the output directory string in
  `Integration.ts`
- Updated dependencies:
    - `@playform/pipe` (0.1.1 → 0.1.2)
    - `commander` (12.1.0 → 13.0.0)
    - `fast-glob` (3.3.2 → 3.3.3)
    - `lightningcss` (1.27.0 → 1.28.2)
    - `terser` (5.36.0 → 5.37.0)
    - `@playform/build` (0.1.8 → 0.2.1)
    - `browserslist` (4.24.2 → 4.24.4)
    - Added `lightningcss` (1.28.2) as a new devDependency
- Added `DEPENDENTS.md` to `.npmignore`

## 2.3.5

### Add

- Added `Configuration/ESBuild.js` and `Configuration/ESBuild.ts` to build with
  ESBuild instead of the default `@playform/build` pipeline
- Added `browserslist` as a development dependency and wired
  `process.env.TARGETS` (via `lightningcss.browserslistToTargets`) into the
  ESBuild define

### Change

- Updated the `Run` and `prepublishOnly` scripts to use the new ESBuild
  configuration
- Updated dependencies:
    - Added `browserslist` (4.24.2)
- Changed the success message to use correct singular/plural (`file` vs `files`)
- Changed `lightningcss` `unusedSymbols` default from `false` to `[]` and
  narrowed its type to `string[]`
- Added `targets` (from `process.env.TARGETS`) to the `lightningcss` variable
  configuration
- Wrapped the CSS compression step in a `try/catch` for safer error handling

## 2.3.4

### Change

- Updated dependencies:
    - `terser` (5.34.1 → 5.36.0)
    - `@playform/build` (0.1.7 → 0.1.8)
- Changed the `lightningcss` `unusedSymbols` default from `false` to `[]`
- Simplified function signatures in `Directory.ts`, `Writesharp.ts`, and
  `Integration.ts` by dropping the explicit `Parameters<Interface>` casts
- Added support for accepting a `Path` instance (when a `Map`) directly into the
  set of paths to compress

## 2.3.3

### Removed

- Removed the `Source/Class/Compress.ts` CLI entry point
- Removed `Source/Function/CLI.ts` and `Source/Function/Pipe.ts`, reverting to
  the inline `@playform/pipe` integration in `Integration.ts`
- Removed `Source/Interface/Pipe.ts`

### Change

- Updated dependencies:
    - `deepmerge-ts` (7.1.1 → 7.1.3)

## 2.3.2

### Add

- Added a `Compress` CLI command (new `Source/Class/Compress.ts`,
  `Source/Function/CLI.ts`, `Source/Function/Pipe.ts`,
  `Source/Interface/CLI.ts`, `Source/Interface/Pipe.ts`)
- Added a `bin` entry (`Compress` → `Target/Class/Compress.js`)
- Added `commander` (12.1.0) and `fast-glob` (3.3.2) for CLI support

### Change

- Updated dependencies:
    - `@playform/pipe` (0.1.0 → 0.1.1)
    - `deepmerge-ts` (7.1.0 → 7.1.1)
    - `lightningcss` (1.25.1 → 1.27.0)
    - `sharp` (0.33.4 → 0.33.5)
    - `svgo` (4.0.0-rc.0 → 3.3.2)
    - `terser` (5.31.3 → 5.34.1)
    - `@playform/build` (0.1.3 → 0.1.7)
- Swapped `.npmignore` from excluding `Source/` to excluding `docs/` and
  `Summary.md`

## 2.3.1

### Change

- Reordered the `.npmignore` entries
- Added `deepmerge-ts` (7.1.0) as a new dependency
- Updated dependencies:
    - `deepmerge-ts` (7.1.0 → 7.1.1)
    - `@playform/build` (0.1.2 → 0.1.3)
- Set `provenance: true` after the `access: public` field in `package.json`
  publish config
- Simplified an import statement in `Source/Function/Image/Writesharp.ts`

## 2.3.0

### Add

- Added a `Run` script (`Build 'Source/**/*.ts' --Watch`)

### Change

- Updated dependencies:
    - `@playform/pipe` (0.0.6 → 0.1.0)
    - `svgo` (3.3.2 → 4.0.0-rc.0)
    - `terser` (5.31.1 → 5.31.3)
    - `@playform/build` (0.0.11 → 0.1.2)
- Enabled `provenance: true` in the publish config
- Changed a `// @TODO: Finish this` comment to `// TODO: Finish this` in
  `Integration.ts` and `Middleware.ts`
- Inlined the `Bytes` import and the reduction-message string concatenation in
  `Option.ts`

## 2.2.28

### Add

- Added an `unusedSymbols` option to the `lightningcss` configuration (string[]
  | boolean) to control removal of unused selectors/keywords

### Change

- Updated dependencies:
    - `@playform/pipe` (0.0.5 → 0.0.6)
    - `@playform/build` (0.0.10 → 0.0.11)
- Set `unusedSymbols: false` as the default in the `lightningcss` variable
  configuration

## 2.2.27

### Change

- Updated dependencies:
    - `astro` (4.9.2 → *)
    - `terser` (5.31.0 → 5.31.1)
- Fixed CSS compression so the result correctly extracts `.css` from the
  `csso.minify()` return in `Integration.ts`

## 2.2.26

### Change

- Updated dependencies:
    - `astro` (4.9.1 → 4.9.2)
    - `lightningcss` (1.25.0 → 1.25.1)
    - `@playform/build` (0.0.9 → 0.0.10)
- Moved `@playform/build` from `peerDependencies` back to `devDependencies` and
  removed the `peerDependenciesMeta` optional blocks
- Various import-statement and trailing-comma cleanups in `Writesharp.ts`,
  `Integration.ts`, `csso.ts`, and `Option.ts`

## 2.2.25

### Removed

- Removed `@playform/document` from `peerDependencies` and
  `peerDependenciesMeta`

## 2.2.24

### Add

- Implemented `lightningcss` compression in the CSS pipeline (was previously a
  TODO/console.log stub) — it now runs `csso` and/or `lightningcss` based on the
  per-type `Setting`

### Change

- Simplified `Merge.ts` to call `deepmergeCustom({...})` directly (dropped the
  generic `Interface<Generic>` wrapper and removed `Source/Interface/Merge.ts`)
- Changed all `satisfies Interface` declarations to
  `satisfies Interface as Interface` across the `Variable/*` modules
- Updated dependencies:
    - `@playform/pipe` (0.0.3 → 0.0.5)
    - `lightningcss` (1.24.1 → 1.25.0)
    - `sharp` (0.33.3 → 0.33.4)
    - `astro` (4.8.1 → 4.9.1 in peerDependencies)
- Moved `@playform/build`/`@playform/document`/`astro` into `peerDependencies`
  (optional) and removed `@playform/build` from `devDependencies`
- Fixed the HTML `ignoreCustomComments` regex (`/.*$.*/` → `/.*\$.*/`) in
  `html-minifier-terser.ts`

## 2.2.23

### Add

- Added `astro-compress` to keywords, and `playform` alongside `withastro`
- Added a `devDependencies` block with `@playform/build` (0.0.8)

### Change

- Reverted most `@Function`/`@Interface`/`@Type`/`@Variable` path-alias imports
  back to relative imports across `Directory.ts`, `Writesharp.ts`,
  `Integration.ts`, `Merge.ts`, `Option.ts`, and the `Interface`/`Variable`
  modules
- Rewrote the image (`sharp`) handling in `Integration.ts`:
    - Detect sharp buffers via
      `Buffer instanceof (await import("sharp")).default` instead of the cached
      `Defaultsharp`
    - Disabled sharp's libvips cache per run and compute `animated` from the
      input metadata (`webp`/`gif`)
    - Merge user `Image.sharp?.sharp` options into the default sharp options
    - Changed the success banner from `✓` to `✅`
- Changed the console banner from `black(" Compress ")` to `black("Compress:")`
  and switched `if (!Paths.size)` to `if (Paths.size === 0)`
- Updated package metadata:
    - Description → `🗜️ Compress —`
    - Homepage/bugs/repository URLs updated to HTTPS and the `PlayForm` casing
    - Author renamed to `🖋️ Source — 👐🏻 Open —` with
      `Source/Open@PlayForm.Cloud`
- Updated dependencies:
    - `@playform/pipe` (0.0.2 → 0.0.3)
    - `astro` (4.5.16 → 4.8.1)
    - `svgo` (3.2.0 → 3.3.2)
    - `terser` (5.30.3 → 5.31.0)
- Removed the `Document` script and moved `@playform/build`/`@playform/document`
  out of dependencies
- Expanded the `sharp` option interface to support `sharp?` and `SharpOptions`

## 2.2.22

### Add

- Migrated all internal imports to `@Function`/`@Interface`/`@Type`/`@Variable`
  path aliases (via `tsconfig` paths) across `Directory.ts`, `Writesharp.ts`,
  `Integration.ts`, `Merge.ts`, and the `Interface`/`Variable` modules
- Added `astro-component` and `astro-integration` keywords; replaced the `img`
  keyword with `svg` and `withastro`

### Change

- Renamed every `export default interface Type` to
  `export default interface Interface` across all interface modules
- Switched `Document`/`prepublishOnly` scripts from
  `TypeScriptDocument`/`TypeScriptESBuild` to `Document`/`Build`
- Updated package metadata:
    - Homepage, bugs, and repository URLs changed from `CompressAstro` to
      `Compress`
- Renamed the integration banner from `CompressAstro` to `Compress` in
  `Integration.ts`
- Updated the JSDoc default references from `CompressAstro` to `Compress` in the
  `csso` and `lightningcss` interfaces
- Updated dependencies:
    - Replaced `@playform/file-pipe` (0.0.2) with `@playform/pipe` (0.0.2),
      `@playform/build` (0.0.5), and `@playform/document` (0.0.6)
    - `astro` (4.5.12 → 4.5.16)
    - `terser` (5.30.0 → 5.30.3)
- Removed `devDependencies` and `optionalDependencies` blocks

## 2.2.21

### Add

- Initial entry in this changelog for the `astro-compress` package (formerly
  `CompressAstro`), version `2.2.21`
