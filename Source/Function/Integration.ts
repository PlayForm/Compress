import type CSS from "../Interface/CSS.js";
import type HTML from "../Interface/HTML.js";
import type On from "../Interface/Image/On.js";
import type JavaScript from "../Interface/JavaScript.js";
import type Option from "../Interface/Option.js";
import type SVG from "../Interface/SVG.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Interface/Path.js";

import type { AstroIntegration } from "astro";

export const { default: Default } = await import("../Object/Option.js");

export const { default: _Default } = await import(
	"files-pipe/Target/Object/Option.js"
);

export const { default: Merge } = await import(
	"files-pipe/Target/Function/Merge.js"
);

export const { default: sharp } = await import("sharp");

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
		if (Path instanceof Array || Path instanceof Set) {
			for (const _Path of Path) {
				Paths.add(_Path);
			}
		}
	}

	return {
		name: "astro-compress",
		hooks: {
			"astro:build:done": async ({ dir: Dir }) => {
				if (!Paths.size) {
					Paths.add(Dir);
				}

				if (
					_Default["Cache"] &&
					Cache &&
					Cache["Search"] === _Default["Cache"]["Search"]
				) {
					Cache["Search"] = Dir;
				}

				for (const [File, Setting] of Object.entries({
					CSS,
					HTML,
					Image,
					JavaScript,
					SVG,
				})) {
					if (typeof Setting === "undefined" || !Setting) {
						continue;
					}

					for (const Path of Paths) {
						await (
							await (
								await (
									await new (
										await import("files-pipe")
									).default(Cache, Logger).In(Path)
								).By(typeof _Map === "object" ? _Map[File] : "")
							).Not(Exclude)
						).Pipe(
							Merge(
								Action,
								Merge(Action, {
									Wrote: async (On) => {
										switch (File) {
											case "CSS": {
												return (
													await import("csso")
												).minify(
													On.Buffer.toString(),
													Setting as CSS
												).css;
											}

											case "HTML": {
												return await (
													await import(
														"html-minifier-terser"
													)
												).minify(
													On.Buffer.toString(),
													Setting as HTML
												);
											}

											case "JavaScript": {
												return (
													(
														await (
															await import(
																"terser"
															)
														).minify(
															On.Buffer.toString(),
															Setting as JavaScript
														)
													).code ?? On.Buffer
												);
											}

											case "Image": {
												return (
													await import(
														"../Function/Image.js"
													)
												).default(
													Setting as Option,
													On as On
												);
											}

											case "SVG": {
												const { data: Data } = (
													await import("svgo")
												).optimize(
													On.Buffer.toString(),
													Setting as SVG
												);

												return Data ? Data : On.Buffer;
											}

											default: {
												return On.Buffer;
											}
										}
									},
									Read: async (On) => {
										switch (File) {
											case "Image": {
												const { format } = await sharp(
													On.Input
												).metadata();

												return sharp(On.Input, {
													failOn: "none",
													sequentialRead: true,
													unlimited: true,
													animated:
														format === "webp" ||
														format === "gif"
															? true
															: false,
												});
											}

											default: {
												return await _Default[
													"Action"
												].Read(On);
											}
										}
									},
									Fulfilled: async (Plan) =>
										Plan.Files > 0
											? `Successfully compressed a total of ${
													Plan.Files
											  } ${File} ${
													Plan.Files === 1
														? "file"
														: "files"
											  } for ${await (
													await import(
														"files-pipe/Target/Function/Bytes.js"
													)
											  ).default(Plan.Info.Total)}.`
											: false,
								} satisfies Action)
							)
						);
					}
				}
			},
		},
	};
};
