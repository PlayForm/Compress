import type {
	AvifOptions,
	GifOptions,
	HeifOptions,
	JpegOptions,
	PngOptions,
	TiffOptions,
	WebpOptions,
} from "sharp";

export default {
	avif: {
		chromaSubsampling: "4:4:4",
		effort: 9.0,
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
	raw: {},
	tiff: {
		compression: "lzw",
	},
	webp: {
		effort: 6.0,
	},
} satisfies {
	[key: string]:
		| undefined
		| boolean
		| AvifOptions
		| GifOptions
		| HeifOptions
		| JpegOptions
		| PngOptions
		| TiffOptions
		| WebpOptions;

	avif?: boolean | AvifOptions;

	gif?: boolean | GifOptions;

	heif?: boolean | HeifOptions;

	jpeg?: boolean | JpegOptions;

	png?: boolean | PngOptions;

	tiff?: boolean | TiffOptions;

	webp?: boolean | WebpOptions;
};
