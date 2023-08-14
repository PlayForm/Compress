export declare const typeHandlers: {
    bmp: import("./types/interface.js").IImage;
    cur: import("./types/interface.js").IImage;
    dds: import("./types/interface.js").IImage;
    gif: import("./types/interface.js").IImage;
    icns: import("./types/interface.js").IImage;
    ico: import("./types/interface.js").IImage;
    j2c: import("./types/interface.js").IImage;
    jp2: import("./types/interface.js").IImage;
    jpg: import("./types/interface.js").IImage;
    ktx: import("./types/interface.js").IImage;
    png: import("./types/interface.js").IImage;
    pnm: import("./types/interface.js").IImage;
    psd: import("./types/interface.js").IImage;
    svg: import("./types/interface.js").IImage;
    tiff: import("./types/interface.js").IImage;
    webp: import("./types/interface.js").IImage;
};
export type imageType = keyof typeof typeHandlers;
