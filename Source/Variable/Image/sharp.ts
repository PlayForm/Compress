/**
 * @module Image
 *
 */
export default {
	avif: {
		chromaSubsampling: "4:4:4",
		effort: 9.0,
		lossless: true,
	},
	gif: {
		effort: 10.0,
	},
	jpeg: {
		chromaSubsampling: "4:4:4",
		mozjpeg: true,
		trellisQuantisation: true,
		overshootDeringing: true,
		optimiseScans: true,
	},
	png: {
		compressionLevel: 9.0,
		palette: true,
	},
	tiff: {
		compression: "lzw",
	},
	webp: {
		effort: 6.0,
		lossless: true,
	},
	heif: {
		effort: 9.0,
		lossless: true,
	},
	sharp: {
		failOn: "error",
		sequentialRead: true,
		unlimited: true,
	},
} satisfies Interface as Interface;

import type Interface from "../../Interface/Image/sharp.js";
