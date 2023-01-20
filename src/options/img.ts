import type {
	AvifOptions,
	GifOptions,
	HeifOptions,
	JpegOptions,
	PngOptions,
	TiffOptions,
	WebpOptions,
} from "sharp";

export interface IMG {
	[key: string]:
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
}

export default {
	avif: {
		chromaSubsampling: "4:4:4",
		// rome-ignore lint/nursery/noPrecisionLoss:
		effort: 9,
	},
	gif: {
		// rome-ignore lint/nursery/noPrecisionLoss:
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
		// rome-ignore lint/nursery/noPrecisionLoss:
		compressionLevel: 9,
		palette: true,
	},
	raw: {},
	tiff: {
		compression: "lzw",
	},
	webp: {
		// rome-ignore lint/nursery/noPrecisionLoss:
		effort: 6,
	},
} satisfies IMG;
