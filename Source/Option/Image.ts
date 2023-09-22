import type {
	AvifOptions as AVIF,
	GifOptions as GIF,
	HeifOptions as HEIF,
	JpegOptions as JPEG,
	PngOptions as PNG,
	TiffOptions as TIFF,
	WebpOptions as WEBP,
} from "sharp";

export interface Type {
	[key: string]:
		| undefined
		| boolean
		| AVIF
		| GIF
		| HEIF
		| JPEG
		| PNG
		| TIFF
		| WEBP;

	avif?: boolean | AVIF;

	gif?: boolean | GIF;

	heif?: boolean | HEIF;

	jpeg?: boolean | JPEG;

	png?: boolean | PNG;

	tiff?: boolean | TIFF;

	webp?: boolean | WEBP;
}

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
} satisfies Type as Type;
