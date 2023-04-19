import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/index.js";
import defaults from "files-pipe/dist/options/index.js";
import formatBytes from "../lib/format-bytes.js";
import type { CSS } from "./css.js";
import defaultsCSS from "./css.js";
import type { HTML } from "./html.js";
import defaultsHTML from "./html.js";
import type { IMG } from "./img.js";
import defaultsIMG from "./img.js";
import type { JS } from "./js.js";
import defaultsJS from "./js.js";
import type { MAP } from "./map.js";
import defaultsMAP from "./map.js";
import type { SVG } from "./svg.js";
import defaultsSVG from "./svg.js";

export interface Options extends OptionsBase {
	[key: string]: any;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	img?: boolean | IMG;

	svg?: boolean | SVG;

	map?: boolean | MAP;
}

export default deepmerge(defaults, {
	css: defaultsCSS,
	html: defaultsHTML,
	js: defaultsJS,
	img: defaultsIMG,
	svg: defaultsSVG,
	map: defaultsMAP,
	pipe: {
		failed: async (ongoing) =>
			`Error: Cannot compress file ${ongoing.inputPath}!`,
		passed: async (ongoing) =>
			ongoing.fileSizeBefore >
			Buffer.byteLength(ongoing.buffer.toString()),
		accomplished: async (ongoing) =>
			`Compressed ${ongoing.inputPath} for ${await formatBytes(
				ongoing.fileSizeBefore - ongoing.fileSizeAfter
			)} (${(
				((ongoing.fileSizeBefore - ongoing.fileSizeAfter) /
					ongoing.fileSizeBefore) *
				100
			)

				.toFixed(2)}% reduction) in ${ongoing.outputPath}.`,
		changed: async (plan) => {
			plan.info.total =
				(plan.info.total ? plan.info.total : 0) +
				(plan.ongoing.fileSizeBefore - plan.ongoing.fileSizeAfter);
			return plan;
		},
	},
} satisfies Options) as Options;
