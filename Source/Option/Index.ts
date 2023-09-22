import { Bytes, Default, Merge } from "files-pipe";

import type { Option as _Option } from "files-pipe";
import type { Type } from "./CSS.js";
import type { Type } from "./HTML.js";
import type { Type } from "./Image.js";
import type { Type } from "./JavaScript.js";
import type { Type as _Map } from "./Map.js";
import type { Type } from "./SVG.js";

export interface Type extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * csso option properties
	 */
	CSS?: boolean | Type;

	/**
	 * html-minifier-terser option properties
	 */
	HTML?: boolean | Type;

	/**
	 * terser option properties
	 */
	JavaScript?: boolean | Type;

	/**
	 * sharp option properties
	 */
	Image?: boolean | Type;

	/**
	 * svgo option properties
	 */
	SVG?: boolean | Type;

	Map?: boolean | _Map;
}

export default Merge(Default, {
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
			`Compressed ${On.Input} for ${await Bytes(
				On.Before - On.After
			)} (${(((On.Before - On.After) / On.Before) * 100).toFixed(
				2
			)}% reduction) in ${On.Output}.`,
		Changed: async (Plan) =>
			Object.defineProperty(Plan.Info, "Total", {
				value:
					(Plan.Info.Total ? Plan.Info.Total : 0) +
					(Plan.On.Before - Plan.On.After),
				configurable: true,
			}) && Plan,
	},
} satisfies Type) as Type;
