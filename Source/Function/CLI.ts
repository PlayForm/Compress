import type Action from "@playform/pipe/Target/Interface/Action.js";
import type Path from "@playform/pipe/Target/Type/Path.js";

import type Interface from "../Interface/CLI.js";
import type Onsharp from "../Interface/Image/Onsharp.js";

/**
 * @module CLI
 *
 */
// TODO: Test this for security
export let System: string;

export default (async (...[File, Compress]: Parameters<Interface>) => {
	// Object.entries(_Option).forEach(([Key, Value]) =>
	// 	Object.defineProperty(_Option, Key, {
	// 		value:
	// 			Value === true
	// 				? Default[Key as keyof typeof Default]
	// 				: _Option[Key as keyof typeof _Option],
	// 	}),
	// );
	// const {
	// 	Path,
	// 	Cache,
	// 	Logger,
	// 	Map: _Map,
	// 	Exclude,
	// 	Action,
	// 	CSS,
	// 	HTML,
	// 	Image,
	// 	JavaScript,
	// 	SVG,
	// 	Parser,
	// } = Merge(Default, _Option);
	// const Paths = new Set<Path>();
	// if (typeof Path !== "undefined") {
	// 	if (Array.isArray(Path) || Path instanceof Set) {
	// 		Path.forEach((Path) => Paths.add(Path));
	// 	}
	// }
	// if (typeof Parser === "object") {
	// 	Object.entries(Parser).forEach(([Key, Value]) =>
	// 		Object.defineProperty(Parser, Key, {
	// 			value: Array.isArray(Value) ? Value : [Value],
	// 		}),
	// 	);
	// }
	// System = (await import("path"))
	// 	.parse((await import("process")).cwd())
	// 	.dir.replace(/\\/g, "/");
	// if (System.startsWith("/")) {
	// 	System = System.substring(1);
	// }
	// if (typeof _Map !== "object") {
	// 	return;
	// }
	// // TODO: CHANGE THIS TO BE DYNAMIC
	// const Directory = "OutputCompress";
	// if (Paths.size === 0) {
	// 	Paths.add(Directory);
	// }
	// if (typeof Cache === "object" && Cache.Search === Search) {
	// 	Cache.Search = Directory;
	// }
	// for (const [Type, Setting] of Object.entries({
	// 	CSS,
	// 	HTML,
	// 	Image,
	// 	JavaScript,
	// 	SVG,
	// })) {
	// 	if (!(Setting && _Map[Type]) || typeof Setting !== "object") {
	// 		continue;
	// 	}
	// 	_Action = Merge(
	// 		Action,
	// 		Merge(Action, {
	// 			Wrote: async ({ Buffer, Input }) => {
	// 				switch (Type) {
	// 					case "CSS": {
	// 						let CSS = Buffer.toString();
	// 						// @ts-expect-error
	// 						if (Setting["lightningcss"]) {
	// 							CSS = (await import("lightningcss"))
	// 								.transform(
	// 									Merge(
	// 										{
	// 											code: (
	// 												await import("buffer")
	// 											).Buffer.from(CSS),
	// 											filename: Input,
	// 										},
	// 										// @ts-expect-error
	// 										Setting["lightningcss"],
	// 									),
	// 								)
	// 								.code.toString();
	// 						}
	// 						// @ts-expect-error
	// 						if (Setting["csso"]) {
	// 							CSS = (await import("csso")).minify(
	// 								CSS,
	// 								// @ts-expect-error
	// 								Setting["csso"],
	// 							).css;
	// 						}
	// 						return CSS;
	// 					}
	// 					case "HTML": {
	// 						return await (
	// 							await import("html-minifier-terser")
	// 						).minify(
	// 							Buffer.toString(),
	// 							// @ts-expect-error
	// 							Setting["html-minifier-terser"],
	// 						);
	// 					}
	// 					case "JavaScript": {
	// 						return (
	// 							(
	// 								await (
	// 									await import("terser")
	// 								).minify(
	// 									Buffer.toString(),
	// 									// @ts-expect-error
	// 									Setting["terser"],
	// 								)
	// 							).code ?? Buffer
	// 						);
	// 					}
	// 					case "Image": {
	// 						try {
	// 							if (
	// 								Buffer instanceof
	// 								(await import("sharp")).default
	// 							) {
	// 								return await (
	// 									await import(
	// 										"@Function/Image/Writesharp.js"
	// 									)
	// 								)
	// 									// @ts-expect-error
	// 									.default(Setting["sharp"], {
	// 										Buffer,
	// 										Input,
	// 									} as Onsharp);
	// 							} else {
	// 								return Buffer;
	// 							}
	// 						} catch (_Error) {
	// 							console.log(_Error);
	// 							return Buffer;
	// 						}
	// 					}
	// 					case "SVG": {
	// 						return (
	// 							(await import("svgo")).optimize(
	// 								Buffer.toString(),
	// 								// @ts-expect-error
	// 								Setting["svgo"],
	// 							).data ?? Buffer
	// 						);
	// 					}
	// 					default: {
	// 						return Buffer;
	// 					}
	// 				}
	// 			},
	// 			Fulfilled: async ({ File, Info: { Total } }) =>
	// 				File > 0
	// 					? `${(await import("kleur/colors")).green(
	// 							`✅ Successfully compressed a total of ${File} ${Type} ${
	// 								File === 1 ? "file" : "files"
	// 							} for ${(
	// 								await import(
	// 									"@playform/pipe/Target/Function/Bytes.js"
	// 								)
	// 							).default(Total)}.`,
	// 						)}`
	// 					: false,
	// 		} satisfies Action),
	// 	);
	// 	if (Type === "Image") {
	// 		_Action = Merge(_Action, {
	// 			Read: async ({ Input, Buffer }) => {
	// 				try {
	// 					(await import("sharp")).default.cache(false);
	// 					const { format } = await (await import("sharp"))
	// 						.default(Input)
	// 						.metadata();
	// 					const Default = {
	// 						animated: !!(format === "webp" || format === "gif"),
	// 					};
	// 					return (await import("sharp")).default(
	// 						Input,
	// 						typeof Image === "object" &&
	// 							typeof Image.sharp === "object" &&
	// 							typeof Image.sharp.sharp === "object"
	// 							? Merge(Default, Image.sharp?.sharp)
	// 							: Default,
	// 					);
	// 				} catch (_Error) {
	// 					console.log(_Error);
	// 					return Buffer;
	// 				}
	// 			},
	// 		} satisfies Action);
	// 	}
	// 	for (const Path of Paths) {
	// 		await (
	// 			await (
	// 				await (
	// 					await new (await import("@playform/pipe")).default(
	// 						Cache,
	// 						Logger,
	// 					).In(Path)
	// 				).By(_Map[Type] ?? "**/*")
	// 			).Not(Exclude)
	// 		).Pipe(_Action);
	// 	}
	// }
}) satisfies Interface as Interface;

export const { default: Default } = await import("@Variable/Option.js");

export const {
	default: {
		Cache: { Search },
	},
} = await import("@playform/pipe/Target/Variable/Option.js");

export const { default: Merge } = await import("@Function/Merge.js");

export let _Action: Action;
