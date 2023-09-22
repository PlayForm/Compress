import type { Type as CSS } from "./CSS.js";
import type { Type as HTML } from "./HTML.js";
import type { Type as Image } from "./Image.js";
import type { Type as JavaScript } from "./JavaScript.js";
import type { Type as _Map } from "./Map.js";
import type { Type as SVG } from "./SVG.js";

import type { Option as _Option } from "files-pipe";

export interface Type extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * csso option properties
	 */
	CSS?: boolean | CSS;

	/**
	 * html-minifier-terser option properties
	 */
	HTML?: boolean | HTML;

	/**
	 * sharp option properties
	 */
	Image?: boolean | Image;

	/**
	 * terser option properties
	 */
	JavaScript?: boolean | JavaScript;

	/**
	 * svgo option properties
	 */
	SVG?: boolean | SVG;

	/**
	 * Map to different file paths
	 */
	Map?: boolean | _Map;
}

export default (await import("files-pipe")).Merge(
	(await import("files-pipe")).Default,
	{
		CSS: (await import("./CSS.js")).default,

		HTML: (await import("./HTML.js")).default,

		JavaScript: (await import("./JavaScript.js")).default,

		Image: (await import("./Image.js")).default,

		SVG: (await import("./SVG.js")).default,

		Map: (await import("./Map.js")).default,

		Action: {
			Failed: async (On) => `Error: Cannot compress file ${On.Input}!`,
			Passed: async (On) =>
				On.Before > Buffer.byteLength(On.Buffer.toString()),
			Accomplished: async (On) =>
				`Compressed ${On.Input} for ${await (
					await import("files-pipe")
				).Bytes(On.Before - On.After)} (${(
					((On.Before - On.After) / On.Before) *
					100
				).toFixed(2)}% reduction) in ${On.Output}.`,
			Changed: async (Plan) =>
				Object.defineProperty(Plan.Info, "Total", {
					value:
						(Plan.Info.Total ? Plan.Info.Total : 0) +
						(Plan.On.Before - Plan.On.After),
					configurable: true,
				}) && Plan,
		},
	} satisfies Type
) as Type;
