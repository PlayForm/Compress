import type { AstroIntegration } from "astro";
import FastGlob from "fast-glob";
import fs from "fs";
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

/**
 * It takes a number of bytes and returns a string with the number of bytes formatted in a human
 * readable way
 * @param {number} bytes - The number of bytes to format.
 * @param [decimals=2] - The number of decimals to show.
 * @returns A function that takes two parameters, bytes and decimals.
 */
const formatBytes = async (bytes: number, decimals = 2) => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

/**
 * It takes a sharp file and an options object, and returns a buffer of the file if the file type is
 * valid and the options object has a valid option for that file type
 * @param {any} sharpFile - The sharp file object
 * @param {IMG} options - IMG = {}
 * @returns A function that takes two arguments, sharpFile and options.
 */
const sharp = async (sharpFile: any, options: IMG = {}) => {
	const fileType = sharpFile.options.input.file.split(".").pop();

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
		return await sharpFile[optionType](options[optionType]).toBuffer();
	}
};

/**
 * It takes a settings object, loops through each key, and calls the appropriate function to minify the
 * files
 * @param {Options} settings - Options - The settings object.
 * @param {number} [debug=2] - 0 = no output, 1 = output file names, 2 = output file names and sizes
 */
const pipeAll = async (settings: Options, debug: number = 2) => {
	for (const files in settings) {
		if (Object.prototype.hasOwnProperty.call(settings, files)) {
			const setting = settings[files];

			if (!setting) {
				continue;
			}

			switch (files) {
				case "css":
					await parse(
						`${settings.path}**/*.css`,
						debug,
						files,
						(data) => cssoMinify.minify(data, setting).css
					);
					break;

				case "html":
					await parse(
						`${settings.path}**/*.html`,
						debug,
						files,
						async (data) =>
							await htmlMinifierTerserMinify.minify(data, setting)
					);
					break;

				case "js":
					await parse(
						`${settings.path}**/*.{js,mjs,cjs}`,
						debug,
						files,
						async (data) => (await terserMinify(data, setting)).code
					);
					break;

				case "img":
					await parse(
						`${settings.path}**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,png,raw,tiff,webp}`,
						debug,
						files,
						async (sharpFile) => await sharp(sharpFile, setting),
						async (file) => await sharpMinify(file)
					);
					break;

				case "svg":
					await parse(
						`${settings.path}**/*.svg`,
						debug,
						files,
						async (data) => svgoMinify.optimize(data, setting).data
					);
					break;

				default:
					break;
			}
		}
	}
};

/**
 * It takes a glob, a debug level, a type, a write function, and a read function, and then it
 * compresses all the files that match the glob using the write function, and then it logs the results
 * to the console using the debug level, type, and read function
 * @param {string} glob - The glob pattern to search for files.
 * @param {number} [debug=2] - The level of debug output. 0 = none, 1 = summary, 2 = detailed.
 * @param {string} [type] - The type of file you're compressing. This is used for the console output.
 * @param write - (data: string) => Promise<string | undefined> = async (data) => data,
 * @param read - (file: string) => Promise<string> = async (file) =>
 */
const parse = async (
	glob: string,
	debug: number = 2,
	type: string = "",
	write: (data: string) => Promise<string | undefined> = async (data) => data,
	read: (file: string) => Promise<string> = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	const savings = {
		initial: 0,
		files: 0,
		total: 0,
	};

	for (const file of files) {
		try {
			const fileSizeBefore = (await fs.promises.stat(file)).size;
			savings.initial += fileSizeBefore;

			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			if (fileSizeBefore > Buffer.byteLength(writeBuffer)) {
				await fs.promises.writeFile(file, writeBuffer, "utf-8");

				const fileSizeAfter = (await fs.promises.stat(file)).size;

				savings.files++;
				savings.total += fileSizeBefore - fileSizeAfter;

				if (debug > 1) {
					console.info(
						"\u001b[32mCompressed " +
							file.replace(/^.*[\\\/]/, "") +
							" for " +
							(await formatBytes(
								fileSizeBefore - fileSizeAfter
							)) +
							" (" +
							(
								((fileSizeBefore - fileSizeAfter) /
									fileSizeBefore) *
								100
							).toFixed(2) +
							"% reduction)" +
							".\u001b[39m"
					);
				}
			}
		} catch (error) {
			console.log("Error: Cannot compress file " + file + "!");
		}
	}

	if (debug > 0) {
		console.info(
			"\u001b[32mSuccessfully compressed a total of " +
				savings.files +
				" " +
				type.toUpperCase() +
				" " +
				(savings.files === 1 ? "file" : "files") +
				" for " +
				(await formatBytes(savings.total)) +
				".\u001b[39m"
		);
	}
};

/**
 * It takes in an object of options, and returns an object that Astro can use to create a plugin
 * @param {Options} integrationOptions - Options = {}
 * @returns A function that returns an object.
 */
export default function createPlugin(
	integrationOptions: Options = {}
): AstroIntegration {
	const defaultOptions: Options = {
		path: "./dist/",
		css: {
			clone: false,
			comments: false,
			forceMediaMerge: true,
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
				await pipeAll(_options, _options.logger);
			},
		},
	};
}
