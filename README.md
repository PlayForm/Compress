# astro-compress 🗜️

This **[Astro integration][astro-integration]** brings compression utilities to
your Astro project.

[csso](https://npmjs.org/csso)
[html-minifier-terser](https://npmjs.org/html-minifier-terser)

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
import compress from "astro-compress";

export default {
	// ...
	integrations: [compress()],
};
```

## Getting started

The utility should now automatically compress all your css and html files in the
dist folder.

[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
