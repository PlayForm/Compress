import type { AstroIntegration } from "astro";

import { pipeline } from "files-pipeline";
import type { Options } from "files-pipeline/dist/options/lib/compress/index.js";

export default (options: Options = {}): AstroIntegration => ({
	name: "astro-compress",
	hooks: {
		"astro:build:done": async () => {
			await new pipeline(options).compress();
		},
	},
});
