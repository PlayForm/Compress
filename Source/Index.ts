import type { AstroIntegration } from "astro";

import { Files } from "files-pipe";
import Bytes from "files-pipe/Target/Library/Bytes.js";
import Merge from "files-pipe/Target/Library/Merge.js";
import type { Execution, Path } from "files-pipe/Target/Option/Index.js";
import Default from "files-pipe/Target/Option/Index.js";

import { minify as CSSO } from "csso";
import { minify as HTMLMinifierTerser } from "html-minifier-terser";
import Sharp from "sharp";
import type { Output } from "svgo";
import { optimize as SVG } from "svgo";
import { minify as Terser } from "terser";

import type { OnSharp } from "./Library/SharpRead.js";
import SharpRead from "./Library/SharpRead.js";

import type { Options } from "./Option/Index.js";
import _Default from "./Option/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = _Default[Option];
		}
	}

	const _Options = Merge(_Default, Options);

	const Paths = new Set<Path>();

	if (typeof _Options["Path"] !== "undefined") {
		if (
			_Options["Path"] instanceof Array ||
			_Options["Path"] instanceof Set
		) {
			for (const Path of _Options["Path"]) {
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

				for (const [File, Setting] of Object.entries(_Options)) {
					if (!Setting) {
						continue;
					}

					for (const Path of Paths) {
						await (
							await (
								await (
									await new Files(_Options["Logger"]).In(Path)
								).By(
									typeof _Options["Map"] === "object"
										? _Options["Map"][File]
										: ""
								)
							).Not(_Options["Exclude"])
						).Pipe(
							Merge(
								_Options["Pipe"],
								Merge(_Options["Pipe"], {
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

											case "Image": {
												return SharpRead(
													Setting,
													On as OnSharp
												);
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
									Read: async (On) => {
										switch (File) {
											case "Image": {
												const { format } = await Sharp(
													On.Input
												).metadata();

												return Sharp(On.Input, {
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
												return await Default[
													"Pipe"
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
											  } for ${await Bytes(
													Plan.Info.Total
											  )}.`
											: false,
								} satisfies Execution)
							)
						);
					}
				}
			},
		},
	};
};
