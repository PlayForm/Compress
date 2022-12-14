import type { AstroIntegration } from "astro";

import { pipeline } from "@nikolarhristov/pipeline";
import type { Options } from "@nikolarhristov/pipeline/dist/options/lib/compress/index.js";

export default (options: Options = {}): AstroIntegration => ({
	name: "astro-compress",
	hooks: {
		"astro:build:done": async () => {
			await new pipeline(options).compress();
		},
	},
});
