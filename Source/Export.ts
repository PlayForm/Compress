import type On from "./Interface/Image/On.js";
import type Option from "./Interface/Option.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Interface/Path.js";

import type { AstroIntegration } from "astro";

export const { default: Default } = await import("./Object/Option.js");

export const { default: _Default } = await import(
	"files-pipe/Target/Object/Option.js"
);
export const { default: Merge } = await import("files-pipe/Target/Fn/Merge.js");

export const { default: sharp } = await import("sharp");

export default (_Option: Option = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option];
		}
	}

	const __Option = Merge(Default, _Option);

	const Paths = new Set<Path>();

	if (typeof __Option["Path"] !== "undefined") {
		if (
			__Option["Path"] instanceof Array ||
			__Option["Path"] instanceof Set
		) {
			for (const Path of __Option["Path"]) {
				Paths.add(Path);
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
					__Option["Cache"] &&
					__Option["Cache"]["Search"] === _Default["Cache"]["Search"]
				) {
					__Option["Cache"]["Search"] = Dir;
				}

				for (const [File, Setting] of Object.entries(__Option)) {
					if (!Setting) {
						continue;
					}

					for (const Path of Paths) {
						await (
							await (
								await (
									await new (
										await import("files-pipe")
									).default(
										__Option["Cache"],
										__Option["Logger"]
									).In(Path)
								).By(
									typeof __Option["Map"] === "object"
										? __Option["Map"][File]
										: ""
								)
							).Not(__Option["Exclude"])
						).Pipe(
							Merge(
								__Option["Action"],
								Merge(__Option["Action"], {
									Wrote: async (On) => {
										switch (File) {
											case "CSS": {
												return (
													await import("csso")
												).minify(
													On.Buffer.toString(),
													Setting
												).css;
											}

											case "HTML": {
												return await (
													await import(
														"html-minifier-terser"
													)
												).minify(
													On.Buffer.toString(),
													Setting
												);
											}

											case "JavaScript": {
												const { code } = await (
													await import("terser")
												).minify(
													On.Buffer.toString(),
													Setting
												);

												return code ? code : On.Buffer;
											}

											case "Image": {
												return (
													await import(
														"./Fn/Image.js"
													)
												).default(Setting, On as On);
											}

											case "SVG": {
												const { data: Data } = (
													await import("svgo")
												).optimize(
													On.Buffer.toString(),
													Setting
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
														"files-pipe/Target/Fn/Bytes.js"
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
