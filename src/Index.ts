import type { AstroIntegration } from "astro";
import { minify as csso } from "csso";
import { files } from "files-pipe";
import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import type { executions, optionPath } from "files-pipe/dist/options/Index.js";
import defaults from "files-pipe/dist/options/Index.js";
import { minify as htmlMinifierTerser } from "html-minifier-terser";
import sharp from "sharp";
import type { Output } from "svgo";
import { optimize as svgo } from "svgo";
import { minify as terser } from "terser";
import formatBytes from "./lib/FormatBytes.js";
import type { ongoingSharp } from "./lib/SharpRead.js";
import sharpRead from "./lib/SharpRead.js";
import type { Options } from "./options/Index.js";
import defaultsCompress from "./options/Index.js";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaultsCompress[option];
		}
	}

	const _options = deepmerge(defaultsCompress, options);

	const paths = new Set<optionPath>();

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
									await new files(_options["logger"]).in(path)
								).by(
									typeof _options["map"] === "object"
										? _options["map"][fileType]
										: ""
								)
							).not(_options["exclude"])
						).pipe(
							deepmerge(_options["pipe"], {
								wrote: async (ongoing) => {
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
											const { code } = await terser(
												ongoing.buffer.toString(),
												setting
											);

											return code ? code : ongoing.buffer;
										}

										case "img": {
											return sharpRead(
												setting,
												ongoing as ongoingSharp
											);
										}

										case "svg": {
											const { data } = svgo(
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
												ongoing.inputPath
											).metadata();

											return sharp(ongoing.inputPath, {
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
								fulfilled: async (plan) =>
									plan.files > 0
										? `Successfully compressed a total of ${
												plan.files
										  } ${fileType.toUpperCase()} ${
												plan.files === 1
													? "file"
													: "files"
										  } for ${await formatBytes(
												plan.info.total
										  )}.`
										: false,
							} satisfies executions)
						);
					}
				}
			},
		},
	};
};
