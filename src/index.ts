import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";

import defaultOptions, { Options } from "./options";
import pipeAll from "./lib/pipe-all";

/**
 * It takes in an object of options, and returns an object that Astro can use to create a plugin
 * @param {Options} integrationOptions - Options = {}
 * @returns A function that returns an object.
 */
export default function createPlugin(
	integrationOptions: Options = {}
): AstroIntegration {
	const _options = deepmerge(defaultOptions, integrationOptions);

	_options.path = _options.path?.endsWith("/")
		? _options.path
		: `${_options.path}/`;

	return {
		name: "astro-compress",
		hooks: {
			"astro:config:done": async (options) => {
				_options.path = !_options.path
					? options.config.outDir.toString()
					: _options.path;
			},
			"astro:build:done": async () => {
				await pipeAll(_options, _options.logger);
			},
		},
	};
}
