/**
 * @module Option
 *
 */
export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Object/Option.js")).default, {
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
				await import("files-pipe/Target/Function/Bytes.js")
			).default(On.Before - On.After)} (${(
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
} satisfies Type);

import type Type from "../Interface/Option.js";
