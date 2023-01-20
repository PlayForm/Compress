import type { AvifOptions, GifOptions, HeifOptions, JpegOptions, PngOptions, TiffOptions, WebpOptions } from "sharp";
export interface IMG {
    [key: string]: boolean | AvifOptions | GifOptions | HeifOptions | JpegOptions | PngOptions | TiffOptions | WebpOptions;
    avif?: boolean | AvifOptions;
    gif?: boolean | GifOptions;
    heif?: boolean | HeifOptions;
    jpeg?: boolean | JpegOptions;
    png?: boolean | PngOptions;
    tiff?: boolean | TiffOptions;
    webp?: boolean | WebpOptions;
}
declare const _default: {
    avif: {
        chromaSubsampling: string;
        effort: number;
    };
    gif: {
        effort: number;
    };
    jpeg: {
        chromaSubsampling: string;
        mozjpeg: true;
        trellisQuantisation: true;
        overshootDeringing: true;
        optimiseScans: true;
    };
    png: {
        compressionLevel: number;
        palette: true;
    };
    raw: {};
    tiff: {
        compression: string;
    };
    webp: {
        effort: number;
    };
};
export default _default;
