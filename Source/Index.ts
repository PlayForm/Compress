import type { AstroIntegration } from "astro";
import { minify as csso } from "csso";
import { Files } from "files-pipe";
import Merge from "files-pipe/dist/Lib/Merge.js";
import type { Executions, Path } from "files-pipe/dist/options/Index.js";
import defaults from "files-pipe/dist/options/Index.js";
import { minify as htmlMinifierTerser } from "html-minifier-terser";
import sharp from "sharp";
import type { Output } from "svgo";
import { optimize as SVG } from "svgo";
import { minify as TERSER } from "terser";
import Bytes from "files-pipe/dist/Lib/Bytes.js";
import type { OnSharp } from "./Lib/SharpRead.js";
import SharpRead from "./Lib/SharpRead.js";
import type { Options } from "./options/Index.js";
import Defaults from "./options/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = Defaults[Option];
		}
	}

	const _options = Merge(Defaults, Options);

	const paths = new Set<Path>();

	if (typeof _options["path"] !== "undefined") {
		if (
			_options["path"] instanceof Array ||
			_options["path"] instanceof Set
		) {
			for (const path of _options["path"]) {
				paths.add(path);
			}
		}
	}

	return {
		name: "astro-compress",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!paths.size) {
					paths.add(dir);
				}

				for (const [fileType, setting] of Object.entries(_options)) {
					if (!setting) {
						continue;
					}

					for (const path of paths) {
						await (
							await (
								await (
									await new Files(_options["logger"]).in(path)
								).By(
									typeof _options["map"] === "object"
										? _options["map"][fileType]
										: ""
								)
							).not(_options["Exclude"])
						).Pipe(
							Merge(_options["Pipe"], {
								Wrote: async (ongoing) => {
									switch (fileType) {
										case "css": {
											return csso(
												ongoing.buffer.toString(),
												setting
											).css;
										}

										case "html": {
											return await htmlMinifierTerser(
												ongoing.buffer.toString(),
												setting
											);
										}

										case "js": {
											const { code } = await TERSER(
												ongoing.buffer.toString(),
												setting
											);

											return code ? code : ongoing.buffer;
										}

										case "img": {
											return SharpRead(
												setting,
												ongoing as OnSharp
											);
										}

										case "svg": {
											const { data } = SVG(
												ongoing.buffer.toString(),
												setting
											) as Output;

											if (typeof data !== "undefined") {
												return data;
											}

											return ongoing.buffer;
										}

										default: {
											return ongoing.buffer;
										}
									}
								},
								read: async (ongoing) => {
									switch (fileType) {
										case "img": {
											const { format } = await sharp(
												ongoing.Input
											).metadata();

											return sharp(ongoing.Input, {
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
											return await defaults["pipe"].read(
												ongoing
											);
										}
									}
								},
								Fulfilled: async (plan) =>
									plan.Files > 0
										? `Successfully compressed a total of ${
												plan.Files
										  } ${fileType.toUpperCase()} ${
												plan.Files === 1
													? "file"
													: "files"
										  } for ${await Bytes(
												plan.info.total
										  )}.`
										: false,
							} satisfies Executions)
						);
					}
				}
			},
		},
	};
};
