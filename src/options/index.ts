import formatBytes from "../lib/format-bytes.js";

import deepmerge from "files-pipeline/dist/lib/deepmerge.js";
import defaults from "files-pipeline/dist/options/index.js";

import defaultsCSS from "./css.js";
import defaultsHTML from "./html.js";
import defaultsJS from "./js.js";
import defaultsSVG from "./svg.js";

import type { CSS } from "./css.js";
import type { HTML } from "./html.js";
import type { JS } from "./js.js";
import type { SVG } from "./svg.js";

import type { Options as OptionsBase } from "files-pipeline/dist/options/index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	svg?: boolean | SVG;
}

export default deepmerge(defaults, {
	css: defaultsCSS,
	html: defaultsHTML,
	js: defaultsJS,
	svg: defaultsSVG,
	pipeline: {
		failed: async (current) =>
			`Error: Cannot compress file ${current.inputPath}!`,
		passed: async (current) =>
			current.fileSizeBefore >
			Buffer.byteLength(current.buffer.toString()),
		accomplished: async (current) =>
			`Compressed ${current.inputPath} for ${await formatBytes(
				current.fileSizeBefore - current.fileSizeAfter
			)} (${(
				((current.fileSizeBefore - current.fileSizeAfter) /
					current.fileSizeBefore) *
				100
			)
				// rome-ignore lint/nursery/noPrecisionLoss:
				.toFixed(2)}% reduction) in ${current.outputPath}.`,
		changed: async (pipe) => {
			pipe.info.total =
				(pipe.info.total ? pipe.info.total : 0) +
				(pipe.current.fileSizeBefore - pipe.current.fileSizeAfter);
			return pipe;
		},
	},
} satisfies Options) as Options;
