# [TypeScriptESBuild] 🌀

Builds all your TypeScript files into JavaScript.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E typescript-esbuild
```

## Usage

`package.json`

```json
{
	"name": "package",
	"scripts": {
		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts'"
	},
	"dependencies": {
		"typescript-esbuild": "latest"
	}
}
```

#### or with a custom esbuild config file:

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptESBuild 'Source/**/*.ts' -es ESBuild.ts"
	}
}
```

#### See an example of a config file in [ESBuild.ts](Source/Configuration/ESBuild.ts)

`tsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "Target"
	},
	"extends": "typescript-esbuild/Target/Configuration/TypeScript",
	"include": ["Source"]
}
```

[TypeScriptESBuild]: https://npmjs.org/typescript-esbuild
[esbuild]: https://npmjs.org/esbuild
