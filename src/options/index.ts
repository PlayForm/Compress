import type CSS from "./css";
import type HTML from "./html";
import type JS from "./js";
import type SHARP from "./sharp";
import type SVG from "./svg";

export interface Options {
	[key: string]: any;

	path?: string;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	sharp?: boolean | SHARP;

	svg?: boolean | SVG;

	logger?: number;
}

export default {
	path: "./dist/",
	css: {
		clone: false,
		comments: false,
		forceMediaMerge: true,
	},
	html: {
		caseSensitive: true,
		keepClosingSlash: true,
		minifyCSS: true,
		minifyJS: true,
		minifyURLs: false,
		removeAttributeQuotes: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		sortAttributes: true,
		sortClassName: true,
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
	sharp: {
		avif: {
			chromaSubsampling: "4:4:4",
			effort: 9,
		},
		gif: {
			effort: 10,
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
} satisfies Options;
