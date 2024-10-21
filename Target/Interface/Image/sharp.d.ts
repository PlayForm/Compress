import type { AvifOptions, GifOptions, HeifOptions, JpegOptions, PngOptions, SharpOptions, TiffOptions, WebpOptions } from "sharp";
/**
 * @module Image
 *
 */
export default interface Interface {
    [key: string]: AvifOptions | GifOptions | HeifOptions | JpegOptions | PngOptions | SharpOptions | TiffOptions | WebpOptions | boolean | undefined;
    avif?: boolean | AvifOptions;
    gif?: boolean | GifOptions;
    heif?: boolean | HeifOptions;
    jpeg?: boolean | JpegOptions;
    png?: boolean | PngOptions;
    tiff?: boolean | TiffOptions;
    webp?: boolean | WebpOptions;
    sharp?: boolean | SharpOptions;
}
