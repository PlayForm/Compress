import type { AvifOptions as AVIF, GifOptions as GIF, HeifOptions as HEIF, JpegOptions as JPEG, PngOptions as PNG, TiffOptions as TIFF, WebpOptions as WEBP } from "sharp";
export interface Image {
    [key: string]: undefined | boolean | AVIF | GIF | HEIF | JPEG | PNG | TIFF | WEBP;
    avif?: boolean | AVIF;
    gif?: boolean | GIF;
    heif?: boolean | HEIF;
    jpeg?: boolean | JPEG;
    png?: boolean | PNG;
    tiff?: boolean | TIFF;
    webp?: boolean | WEBP;
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
