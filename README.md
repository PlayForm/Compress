# [astro-compress] 🗜️
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnhristov%2Fastro-compress.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fnhristov%2Fastro-compress?ref=badge_shield)


This **[Astro integration][astro-integration]** brings compression utilities to
your Astro project.

[csso] [html-minifier-terser] [terser]

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### (experimental) `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-compress`, run the following from your project directory and
follow the prompts:

```sh
# Using NPM
npx astro add astro-compress
# Using Yarn
yarn astro add astro-compress
# Using PNPM
pnpx astro add astro-compress
```

### Install dependencies manually

First, install the `astro-compress` integration like so:

```
npm install astro-compress
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**astro.config.mjs**

```js
import { defineConfig } from "astro/config";
import compress from "astro-compress";

export default defineConfig({
	// ...
	integrations: [compress()],
});
```

## Getting started

The utility should now automatically compress all your CSS, HTML and JavaScript
files in the dist folder.

You can override any of the default options from the configurations of:

-   [csso](src/options/csso.ts)
-   [html-minifier-terser](src/options/html-minifier-terser.ts)
-   [terser](src/options/terser.ts)

or disable them entirely:

```js
import { defineConfig } from "astro/config";
import compress from "astro-compress";

export default defineConfig({
	integrations: [
		compress({
			css: false,
			html: false,
			js: false,
		}),
	],
});
```

[astro-compress]: https://npmjs.org/astro-compress
[csso]: https://npmjs.org/csso
[html-minifier-terser]: https://npmjs.org/html-minifier-terser
[terser]: https://npmjs.org/terser
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnhristov%2Fastro-compress.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fnhristov%2Fastro-compress?ref=badge_large)