import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";

import pipeAll from "./lib/pipe-all.js";
import defaultOptions, { Options } from "./options/index.js";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaultOptions()[option];
		}
	}

	const _options = deepmerge(defaultOptions(), options);

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
};
