# [files-pipe] 🧪

## Installation

First, install the `files-pipe` component like so:

```
npm install -D -E files-pipe
```

Then, create a new pipe from this component:

**`Index.ts`**

```ts
import { Files } from "files-pipe";

await new Files().In("./Input");
```

## Getting started

The `files-pipe` will now provide you with a `pipe` method which you can use to
execute the callback on each file from the pipe.

**`Index.ts`**

```ts
import { Files } from "files-pipe";

await (
	await (await new Files().In("./Input")).By("**/*.md")
).Pipe({
	// Append some content to all of the text files
	Wrote: (On) => (On.Buffer += "LICENSE [MIT]"),
});
```

#### These are the defaults for each callback.

```ts
import { Files } from "files-pipe";

await new Files().Pipe({
	// Writes the buffer into a file
	Wrote: async (On) => On.Buffer,
	// Reads the file into a buffer
	Read: async (On) => await fs.promises.readFile(On.Input, "utf-8"),
	// Checks if the file has passed any checks
	Passed: async (On) => On && true,
	// When the file cannot be processed
	Failed: async (Input) => `Error: Cannot process file ${Input}!`,
	// When the file is processed
	Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,
	// When the whole plan is fulfilled
	Fulfilled: async (Plan) =>
		`Successfully processed a total of ${Plan.Files} ${
			Plan.Files === 1 ? "file" : "files"
		}.`,
	// When the plan has changed
	Changed: async (Plan) => Plan,
});
```

#### You can add multiple paths to your pipe by specifying an array as the `path` variable.

**`Index.ts`**

```ts
import { Files } from "files-pipe";

await new Files().In(["./Input", "./Input2"]);
```

#### You can also provide a map of paths for different input output directories.

**`Index.ts`**

```ts
import { Files } from "files-pipe";

await new Files().In(new Map([["./Input", "./Output"]]));
```

#### You can provide a filter to exclude files from your pipe. A filter can be an array of regexes or a single match. You can use functions, as well to match on file names.

**`Index.ts`**

```ts
import { Files } from "files-pipe";

await new Files().Not([
	"File.txt",
	(File: string) => File === "./Input/File.txt",
]);
```

#### Set `Logger` to `0` if you do not want to see debug messages. Default is `2`.

**`Index.ts`**

```ts
import { Files } from "files-pipe";

new Files(0);
```

[files-pipe]: https://npmjs.org/files-pipe

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this component.
