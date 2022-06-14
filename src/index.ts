import fs from "fs";
import FastGlob from "fast-glob";
import type { AstroIntegration } from "astro";
import Options from "./options";
import IMG from "./options/img";

// @ts-ignore
import * as cssoMinify from "csso";
// @ts-ignore
import * as htmlMinifierTerserMinify from "html-minifier-terser";
import { minify as terserMinify } from "terser";
// @ts-ignore
import sharpMinify from "sharp";
// @ts-ignore
import svgoMinify from "svgo";

function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const sharp = async (pipe: any, options: IMG = {}) => {
	const fileType = pipe.options.input.file.split(".").pop();

	if (!fileType) {
		return;
	}

	const typeToOption: {
		[key: string]: any;
	} = {
		"avci": "avif",
		"avcs": "avif",
		"avifs": "avif",
		"heic": "heif",
		"heics": "heif",
		"heifs": "heif",
		"jfif": "jpeg",
		"jif": "jpeg",
		"jpe": "jpeg",
		"jpg": "jpeg",
	};

	const optionType =
		typeof typeToOption[fileType] !== "undefined"
			? typeToOption[fileType]
			: typeof options[fileType] !== "undefined"
			? fileType
			: false;

	const validOptionCalls = [
		"avif",
		"gif",
		"heif",
		"jpeg",
		"png",
		"raw",
		"tiff",
		"webp",
	];

	if (
		validOptionCalls.includes(optionType) &&
		options[optionType] !== false
	) {
		return await pipe[optionType](options[optionType]).toBuffer();
	}
};

const pipeAll = async (settings: Options) => {
	for (const fileType in settings) {
		if (Object.prototype.hasOwnProperty.call(settings, fileType)) {
			const setting = settings[fileType];

			if (!setting) {
				continue;
			}

			switch (fileType) {
				case "css":
					await parse(
						`${settings.path}**/*.css`,
						settings.logger,
						(data) => cssoMinify.minify(data, setting).css
					);
					break;

				case "html":
					await parse(
						`${settings.path}**/*.html`,
						settings.logger,
						async (data) =>
							await htmlMinifierTerserMinify.minify(data, setting)
					);
					break;

				case "js":
					await parse(
						`${settings.path}**/*.{js,mjs,cjs}`,
						settings.logger,
						async (data) => {
							const result = await terserMinify(data, setting);
							return result.code ? result.code : data;
						}
					);
					break;

				case "img":
					await parse(
						`${settings.path}**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,png,raw,tiff,webp}`,
						settings.logger,
						async (sharpFile) => await sharp(sharpFile, setting),
						async (file) => await sharpMinify(file)
					);
					break;

				case "svg":
					await parse(
						`${settings.path}**/*.svg`,
						settings.logger,
						async (data) => svgoMinify.optimize(data, setting).data
					);
					break;

				default:
					break;
			}
		}
	}
};

const parse = async (
	glob: string,
	debug = 2,
	write: (data: string) => Promise<string> = async (data) => data,
	read: (file: string) => Promise<string> = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);
	let totalDifference = {
		files: 0,
		size: 0,
	};

	for (const file of files) {
		try {
			const fileSizeBefore = (await fs.promises.stat(file)).size;
			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			if (fileSizeBefore > Buffer.byteLength(writeBuffer)) {
				await fs.promises.writeFile(file, writeBuffer, "utf-8");

				const fileSizeAfter = (await fs.promises.stat(file)).size;

				totalDifference.files++;
				totalDifference.size += fileSizeBefore - fileSizeAfter;

				if (debug > 1) {
					console.info(
						"\u001b[32mCompressed " +
							file.replace(/^.*[\\\/]/, "") +
							" for " +
							formatBytes(fileSizeBefore - fileSizeAfter) +
							" (" +
							((fileSizeAfter / fileSizeBefore) * 100).toFixed(
								2
							) +
							"% compression rate)" +
							".\u001b[39m"
					);
				}
			}
		} catch (error) {
			console.log("Error: Cannot compress file " + file + "!");
		}
	}

	if (debug > 0 && totalDifference.files > 0) {
		console.info(
			"\u001b[32mSuccessfully compressed a total of " +
				totalDifference.files +
				" files for " +
				formatBytes(totalDifference.size) +
				".\u001b[39m"
		);
	}
};

export default function createPlugin(
	integrationOptions: Options = {}
): AstroIntegration {
	const defaultOptions: Options = {
		path: "./dist/",
		css: {
			clone: false,
			comments: false,
			debug: false,
			forceMediaMerge: true,
			restructure: true,
			sourceMap: false,
		},
		html: {
			caseSensitive: true,
			collapseBooleanAttributes: true,
			collapseInlineTagWhitespace: false,
			collapseWhitespace: true,
			conservativeCollapse: false,
			continueOnParseError: false,
			customAttrAssign: [],
			customAttrCollapse: "",
			customAttrSurround: [],
			customEventAttributes: [/^on[a-z]{3,}$/],
			decodeEntities: false,
			html5: true,
			ignoreCustomComments: [],
			ignoreCustomFragments: [],
			includeAutoGeneratedTags: true,
			keepClosingSlash: true,
			maxLineLength: null,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: false,
			preserveLineBreaks: false,
			preventAttributesEscaping: false,
			processConditionalComments: true,
			processScripts: ["module"],
			quoteCharacter: "",
			removeAttributeQuotes: true,
			removeComments: true,
			removeEmptyAttributes: true,
			removeEmptyElements: false,
			removeOptionalTags: false,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeTagWhitespace: true,
			sortAttributes: true,
			sortClassName: true,
			trimCustomFragments: false,
			useShortDoctype: false,
		},
		js: {
			ecma: 5,
			enclose: false,
			keep_classnames: false,
			keep_fnames: false,
			ie8: false,
			module: false,
			safari10: false,
			toplevel: false,
		},
		img: {
			avif: {
				chromaSubsampling: "4:4:4",
				effort: 9,
			},
			gif: {
				effort: 10,
			},
			heif: {
				chromaSubsampling: "4:4:4",
			},
			jpeg: {
				chromaSubsampling: "4:4:4",
				mozjpeg: true,
				trellisQuantisation: true,
				overshootDeringing: true,
				optimiseScans: true,
			},
			png: {
				compressionLevel: 9,
				palette: true,
			},
			raw: {},
			tiff: {
				compression: "lzw",
			},
			webp: {
				effort: 6,
			},
		},
		svg: {
			multipass: true,
			js2svg: {
				indent: 0,
				pretty: false,
			},
			plugins: ["preset-default"],
		},
		logger: 2,
	};

	const _options = Object.assign(defaultOptions, integrationOptions);

	_options.path = _options.path?.endsWith("/")
		? _options.path
		: `${_options.path}/`;

	return {
		name: "astro-compress",
		hooks: {
			"astro:config:done": async (options) => {
				_options.path = !_options.path
					? options.config.outDir.toString()
					: _options.path;
			},
			"astro:build:done": async () => {
				await pipeAll(_options);
			},
		},
	};
}
