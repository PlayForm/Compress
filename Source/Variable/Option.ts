/**
 * @module Option
 *
 */
export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	CSS: (await import("./CSS.js")).default,
	HTML: (await import("./HTML.js")).default,
	JavaScript: (await import("./JavaScript.js")).default,
	Image: (await import("./Image.js")).default,
	SVG: (await import("./SVG.js")).default,
	Map: (await import("./Map.js")).default,
	Action: {
		Failed: async ({ Input }) => `Error: Cannot compress file ${Input}!`,
		Passed: async ({ Before, Buffer: _Buffer }) =>
			Before > Buffer.byteLength(_Buffer.toString()),
		Accomplished: async ({ Input, Before, After, Output }) =>
			`Compressed ${Input} for ${await (
				await import("files-pipe/Target/Function/Bytes.js")
			).default(Before - After)} (${(
				((Before - After) / Before) *
				100
			).toFixed(2)}% reduction) in ${Output}.`,
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
