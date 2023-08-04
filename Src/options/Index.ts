import Merge from "files-pipe/dist/Lib/Merge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import defaults from "files-pipe/dist/options/Index.js";
import Bytes from "files-pipe/dist/Lib/Bytes.js";
import type { CSS } from "./CSS.js";
import defaultsCSS from "./CSS.js";
import type { HTML } from "./HTML.js";
import defaultsHTML from "./HTML.js";
import type { IMG } from "./IMG.js";
import defaultsIMG from "./IMG.js";
import type { JS } from "./JS.js";
import defaultsJS from "./JS.js";
import type { MAP } from "./Map.js";
import defaultsMAP from "./Map.js";
import type { SVG } from "./SVG.js";
import defaultsSVG from "./SVG.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	img?: boolean | IMG;

	svg?: boolean | SVG;

	map?: boolean | MAP;
}

export default Merge(defaults, {
	css: defaultsCSS,
	html: defaultsHTML,
	js: defaultsJS,
	img: defaultsIMG,
	svg: defaultsSVG,
	map: defaultsMAP,
	Pipe: {
		Failed: async (ongoing) =>
			`Error: Cannot compress file ${ongoing.Input}!`,
		passed: async (ongoing) =>
			ongoing.fileSizeBefore >
			Buffer.byteLength(ongoing.buffer.toString()),
		accomplished: async (ongoing) =>
			`Compressed ${ongoing.Input} for ${await Bytes(
				ongoing.fileSizeBefore - ongoing.fileSizeAfter
			)} (${(
				((ongoing.fileSizeBefore - ongoing.fileSizeAfter) /
					ongoing.fileSizeBefore) *
				100
			).toFixed(2)}% reduction) in ${ongoing.outputPath}.`,
		changed: async (plan) => {
			plan.info.total =
				(plan.info.total ? plan.info.total : 0) +
				(plan.ongoing.fileSizeBefore - plan.ongoing.fileSizeAfter);
			return plan;
		},
	},
} satisfies Options) as Options;
