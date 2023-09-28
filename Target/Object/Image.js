"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
