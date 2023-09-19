import type { Option } from "./Option/Index.js";

import type { AstroIntegration } from "astro";
import type { Action, Path } from "files-pipe";

import { minify as CSSO } from "csso";
import { Bytes, Files, Merge, Default as _Default } from "files-pipe";
import { minify as HTMLMinifierTerser } from "html-minifier-terser";
import type { Output } from "svgo";
import { optimize as SVG } from "svgo";
import { minify as Terser } from "terser";

import Default from "./Option/Index.js";

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

				for (const [File, Setting] of Object.entries(__Option)) {
					if (!Setting) {
						continue;
					}

					for (const Path of Paths) {
						await (
							await (
								await (
									await new Files(
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
												return CSSO(
													On.Buffer.toString(),
													Setting
												).css;
											}

											case "HTML": {
												return await HTMLMinifierTerser(
													On.Buffer.toString(),
													Setting
												);
											}

											case "JavaScript": {
												const { code } = await Terser(
													On.Buffer.toString(),
													Setting
												);

												return code ? code : On.Buffer;
											}

											case "SVG": {
												const { data: Data } = SVG(
													On.Buffer.toString(),
													Setting
												) as Output;

												if (
													typeof Data !== "undefined"
												) {
													return Data;
												}

												return On.Buffer;
											}

											default: {
												return On.Buffer;
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
											  } for ${await Bytes(
													Plan.Info.Total
											  )}.`
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
