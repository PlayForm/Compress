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
