/**
 * @module Option
 *
 */
import { blue, green } from "kleur/colors";

import { systemDir } from "../Function/Integration";
import path from "node:path";
function sanitizePath(inputPath: string): { base: string, dir: string } {
	let { base, dir } = path.parse(inputPath);
	dir = path.normalize(dir)
	dir = dir.replace(/\\/g, '/');
	dir = dir.replace(systemDir, '');
	if (!dir.endsWith("/")) {
		dir = dir + '/'
	}
	return { base, dir };
}

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
			const { base, dir } = sanitizePath(Input);
			return `${red("Error:")} Cannot compress file ${gray(
				dir
			)}${red(base)}`;
		},
		Passed: async ({ Before, Buffer: _Buffer }) =>
			Before > Buffer.byteLength(_Buffer.toString()),
		Accomplished: async ({ Input, Before, After }) => {
			const { base, dir } = sanitizePath(Input);

			const compressed = Before - After;

			console.log("├─ ");

			const msg = `${gray(
				`(-${await (
					await import("files-pipe/Target/Function/Bytes.js")
				).default(compressed)})`
			)}	${green(
				`${((compressed / Before) * 100).toFixed(2)}%`
			)} reduction in ${gray(dir)}${blue(
				base
			)}`;

			return msg;
		},
		Changed: async (Plan) =>
			Object.defineProperty(Plan.Info, "Total", {
				value:
					(Plan.Info.Total ? Plan.Info.Total : 0) +
					(Plan.On.Before - Plan.On.After),
				configurable: true,
				writable: true,
			}) && Plan,
	},
} satisfies Type);

import type Type from "../Interface/Option.js";

const { gray, red } = await import("kleur");
