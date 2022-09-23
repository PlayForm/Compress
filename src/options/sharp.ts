import type sharp from "sharp";

export default interface SHARP {
	[key: string]: any;

	avif?: sharp.AvifOptions;

	gif?: sharp.GifOptions;

	heif?: sharp.HeifOptions;

	jpeg?: sharp.JpegOptions;

	png?: sharp.PngOptions;

	tiff?: sharp.TiffOptions;

	webp?: sharp.WebpOptions;
}
