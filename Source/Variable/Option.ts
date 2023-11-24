/**
 * @module Option
 *
 */
import { gray, blue, green, cyan, red } from 'kleur/colors'

export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	CSS: {
		csso: (await import("./CSS/csso.js")).default,
		lightningcss: (await import("./CSS/lightningcss.js")).default,
	},
	HTML: {
		"html-minifier-terser": (await import("./HTML/html-minifier-terser.js"))
			.default,
	},
	JavaScript: {
		terser: (await import("./JavaScript/terser.js")).default,
	},
	Image: {
		sharp: (await import("./Image/sharp.js")).default,
	},
	SVG: {
		svgo: (await import("./SVG/svgo.js")).default,
	},
	Map: (await import("./Map.js")).default,
	Parser: (await import("./Parser.js")).default,
	Action: {
		Failed: async ({ Input }) => {
			const idx = Input.lastIndexOf('/');
			const file = Input.slice(idx + 1);
			const dir = Input.slice(0, idx + 1);
			return `${red("Error:")} Cannot compress file ${gray(dir)}${red(file)}`
		},
		Passed: async ({ Before, Buffer: _Buffer }) =>
			Before > Buffer.byteLength(_Buffer.toString()),
		Accomplished: async ({ Input, Before, After }) => {
			const compressed = Before - After;
			const percent = `${(((compressed) / Before) * 100).toFixed(2)}%`;
			const size = `(-${await (await import("files-pipe/Target/Function/Bytes.js")).default(compressed)})`;
			const idx = Input.lastIndexOf('/');
			const file = Input.slice(idx + 1);
			const dir = Input.slice(0, idx + 1);
			process.stderr.write("├─ ");
			const msg = `${gray(size)}	${green(percent)} reduction in ${gray(dir)}${blue(file)}`;
			return msg;
		},
		Changed: async (Plan) => {
			return Object.defineProperty(Plan.Info, "Total", {
				value:
					(Plan.Info.Total ? Plan.Info.Total : 0) +
					(Plan.On.Before - Plan.On.After),
				configurable: true,
			}) && Plan
		},
	},
} satisfies Type);

import type Type from "../Interface/Option.js";
