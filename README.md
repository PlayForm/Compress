# [astro-compress] 🗜️

This **[Astro integration][astro-integration]** brings compression utilities to
your Astro project.

[CSS][csso] [HTML][html-minifier-terser] [JavaScript][terser] [Images][sharp]
[SVG][svgo]

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

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
npm install -D -E astro-compress
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**astro.config.ts**

```ts
import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({ integrations: [compress()] });
```

## Getting started

The utility should now automatically compress all your CSS, HTML and JavaScript
files in the dist folder.

The following image file types will also be compressed.

-   avci
-   avcs
-   avif
-   avifs
-   gif
-   heic
-   heics
-   heif
-   heifs
-   jfif
-   jif
-   jpe
-   jpeg
-   jpg
-   png
-   raw
-   tiff
-   webp

SVG compression is supported, as well via [svgo].

You can override any of the default options from the configurations of:

-   [csso](src/options/css.ts)
-   [html-minifier-terser](src/options/html.ts)
-   [terser](src/options/js.ts)
-   [sharp](src/options/img.ts)
-   [svgo](src/options/svg.ts)

or disable them entirely:

```ts
import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({
	integrations: [
		compress({
			css: false,
			html: false,
			js: false,
			img: false,
			svg: false,
		}),
	],
});
```

If your path is different than `dist` be sure to update it accordingly:

```ts
import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({
	outDir: "./build",
	integrations: [
		compress({
			path: "./build",
		}),
	],
});
```

Set logger to 0 if you do not want to see debug messages. Default is 2.

```ts
import type { AstroUserConfig } from "astro";
import compress from "astro-compress";

export default (): AstroUserConfig => ({
	integrations: [
		compress({
			logger: 0,
		}),
	],
});
```

[astro-compress]: https://npmjs.org/astro-compress
[csso]: https://npmjs.org/csso
[html-minifier-terser]: https://npmjs.org/html-minifier-terser
[terser]: https://npmjs.org/terser
[sharp]: https://npmjs.org/sharp
[svgo]: https://npmjs.org/svgo
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

[![Built with nikolarhristov/npm](https://raw.githubusercontent.com/nikolarhristov/npm/main/.github/img/favicon-16x16.png)](https://github.com/NikolaRHristov/npm)
