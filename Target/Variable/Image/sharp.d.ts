/**
 * @module Image
 *
 */
declare const _default: {
    avif: {
        chromaSubsampling: string;
        effort: number;
        lossless: true;
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
    tiff: {
        compression: string;
    };
    webp: {
        effort: number;
        lossless: true;
    };
    heif: {
        effort: number;
        lossless: true;
    };
    sharp: {
        failOn: "error";
        sequentialRead: true;
        unlimited: true;
    };
};
export default _default;
