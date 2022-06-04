# [astro-compress] 🗜️

This **[Astro integration][astro-integration]** brings compression utilities to
your Astro project.

[csso] [html-minifier-terser] [terser] [sharp]

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
-   [sharp](src/options/sharp.ts)

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
			img: false,
		}),
	],
});
```

If your path is different than dist be sure to update it accordingly:

```js
import { defineConfig } from "astro/config";
import compress from "astro-compress";

export default defineConfig({
	outDir: "./build",
	integrations: [
		compress({
			path: "./build",
		}),
	],
});
```

[astro-compress]: https://npmjs.org/astro-compress
[csso]: https://npmjs.org/csso
[html-minifier-terser]: https://npmjs.org/html-minifier-terser
[terser]: https://npmjs.org/terser
[sharp]: https://npmjs.org/sharp
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
