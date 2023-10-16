/**
 * @module Integration
 *
 */
export default (_Option: Option = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option as keyof typeof Default];
		}
	}

	const {
		Path,
		Cache,
		Logger,
		Map: _Map,
		Exclude,
		Action,
		CSS,
		HTML,
		Image,
		JavaScript,
		SVG,
	} = Merge(Default, _Option);

	const Paths = new Set<Path>();

	if (typeof Path !== "undefined") {
		if (Array.isArray(Path) || Path instanceof Set) {
			for (const _Path of Path) {
				Paths.add(_Path);
			}
		}
	}

	return {
		name: "astro-compress",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (typeof _Map !== "object") {
					return;
				}

				if (!Paths.size) {
					Paths.add(dir);
				}

				if (typeof Cache === "object" && Cache.Search === Search) {
					Cache.Search = dir;
				}

				for (const [File, Setting] of Object.entries({
					CSS,
					HTML,
					Image,
					JavaScript,
					SVG,
				})) {
					if (!(Setting && _Map[File])) {
						return;
					}

					_Action = Merge(
						Action,
						Merge(Action, {
							Wrote: async ({ Buffer, Input }) => {
								switch (File) {
									case "CSS": {
										return (await import("csso")).minify(
											Buffer.toString(),
											Setting as CSS
										).css;
									}

									case "HTML": {
										return await (
											await import("html-minifier-terser")
										).minify(
											Buffer.toString(),
											Setting as HTML
										);
									}

									case "JavaScript": {
										return (
											(
												await (
													await import("terser")
												).minify(
													Buffer.toString(),
													Setting as JavaScript
												)
											).code ?? Buffer
										);
									}

									case "Image": {
										return (
											await import("../Function/Image.js")
										).default(
											Setting as Option,
											{ Buffer, Input } as On
										);
									}

									case "SVG": {
										const { data: Data } = (
											await import("svgo")
										).optimize(
											Buffer.toString(),
											Setting as SVG
										);

										return Data ?? Buffer;
									}

									default: {
										return Buffer;
									}
								}
							},
							Fulfilled: async (Plan) =>
								Plan.Files > 0
									? `Successfully compressed a total of ${
											Plan.Files
									  } ${File} ${
											Plan.Files === 1 ? "file" : "files"
									  } for ${await (
											await import(
												"files-pipe/Target/Function/Bytes.js"
											)
									  ).default(Plan.Info.Total)}.`
									: false,
						} satisfies Action)
					);

					if (File === "Image") {
						_Action = Merge(_Action, {
							Read: async ({ Input }) => {
								const { format } =
									await sharp(Input).metadata();
								return sharp(Input, {
									failOn: "none",
									sequentialRead: true,
									unlimited: true,
									animated:
										format === "webp" || format === "gif"
											? true
											: false,
								});
							},
						} satisfies Action);
					}

					for (const Path of Paths) {
						await (
							await (
								await (
									await new Files(Cache, Logger).In(Path)
								).By(_Map[File] ?? "**/*")
							).Not(Exclude)
						).Pipe(_Action);
					}
				}
			},
		},
	};
};

import type CSS from "../Interface/CSS.js";
import type HTML from "../Interface/HTML.js";
import type On from "../Interface/Image/On.js";
import type JavaScript from "../Interface/JavaScript.js";
import type Option from "../Interface/Option.js";
import type SVG from "../Interface/SVG.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Interface/Path.js";

import type { AstroIntegration } from "astro";

export const { default: Default } = await import("../Variable/Option.js");

export const {
	default: {
		Cache: { Search },
	},
} = await import("files-pipe/Target/Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);

export const { default: sharp } = await import("sharp");

export let _Action: Action;

export const { default: Files } = await import("files-pipe");
