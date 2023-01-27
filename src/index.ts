import type {
	executions,
	optionPath,
} from "files-pipeline/dist/options/index.js";

import formatBytes from "./lib/format-bytes.js";

import deepmerge from "files-pipeline/dist/lib/deepmerge.js";
import { optimize as svgo } from "svgo";

import type { AstroIntegration } from "astro";

import type { Options } from "./options/index.js";

import defaults from "files-pipeline/dist/options/index.js";
import defaultsCompress from "./options/index.js";

import { files } from "files-pipeline";

import { minify as csso } from "csso";
import { minify as htmlMinifierTerser } from "html-minifier-terser";
import type { Output } from "svgo";
import { minify as terser } from "terser";


export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaultsCompress[option];
		}
	}

	options = deepmerge(defaultsCompress, options);

	const paths = new Set<optionPath>();

	if (typeof options["path"] !== "undefined") {
		if (
			options["path"] instanceof Array ||
			options["path"] instanceof Set
		) {
			for (const path of options["path"]) {
				paths.add(path);
			}
		} else {
			paths.add(options["path"]);
		}
	}

	return {
		name: "astro-compress",
		hooks: {
			"astro:build:done": async () => {
				for (const [fileType, setting] of Object.entries(options)) {
					if (!setting) {
						continue;
					}

					for (const path of paths) {
						await (
							await (
								await (
									await new files(options["logger"]).in(path)
								).by(
									(() => {
										switch (fileType) {
											case "css":
												return "**/*.css";

											case "html":
												return "**/*.html";

											case "js":
												return "**/*.{js,mjs,cjs}";

											case "svg":
												return "**/*.svg";

											default:
												return "";
										}
									})()
								)
							).not(options["exclude"])
						).pipeline(
							deepmerge(defaultsCompress["pipeline"], {
								wrote: async (current) => {
									switch (fileType) {
										case "css": {
											return csso(
												current.buffer.toString(),
												setting
											).css;
										}

										case "html": {
											return await htmlMinifierTerser(
												current.buffer.toString(),
												setting
											);
										}

										case "js": {
											const { code } = await terser(
												current.buffer.toString(),
												setting
											);

											return code ? code : current.buffer;
										}

										case "svg": {
											const { data } = svgo(
												current.buffer.toString(),
												setting
											) as Output;

											if (typeof data !== "undefined") {
												return data;
											}

											return current.buffer;
										}

										default: {
											return current.buffer;
										}
									}
								},
								fulfilled: async (pipe) =>
									pipe.files > 0
										? `Successfully compressed a total of ${
												pipe.files
										  } ${fileType.toUpperCase()} ${
												// rome-ignore lint/nursery/noPrecisionLoss:
												pipe.files === 1
													? "file"
													: "files"
										  } for ${await formatBytes(
												pipe.info.total
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
