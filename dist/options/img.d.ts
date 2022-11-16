import type { AvifOptions, GifOptions, HeifOptions, JpegOptions, PngOptions, TiffOptions, WebpOptions } from "sharp";
export default interface IMG {
    [key: string]: AvifOptions | GifOptions | HeifOptions | JpegOptions | PngOptions | TiffOptions | WebpOptions;
    avif?: AvifOptions;
    gif?: GifOptions;
    heif?: HeifOptions;
    jpeg?: JpegOptions;
    png?: PngOptions;
    tiff?: TiffOptions;
    webp?: WebpOptions;
}
