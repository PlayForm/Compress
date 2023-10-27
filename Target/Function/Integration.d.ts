/**
 * @module Integration
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Integration.js";
import type Action from "files-pipe/Target/Interface/Action.js";
export declare const Default: Omit<{} & {
    CSS: {
        csso: {
            comments: false;
            forceMediaMerge: true;
            restructure: false;
        };
        lightningcss: {
            minify: true;
        };
    };
    HTML: Type;
    Image: {
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
    JavaScript: Type;
    SVG: {
        multipass: true;
        js2svg: {
            indent: number;
            pretty: false;
        };
        plugins: "preset-default"[];
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Parser: {
        CSS: ("csso" | "lightningcss")[];
        HTML: "html-minifier-terser";
        Image: "sharp";
        JavaScript: "terser";
        SVG: "svgo";
    };
    Action: Omit<{} & {
        Failed: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer: _Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After, Output }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Files: string;
    Exclude: false;
}, "__proto__">;
export declare const Search: string;
export declare const Merge: import("typescript-esbuild/Target/Interface/Merge.js").default<import("typescript-esbuild/Target/Interface/Merge.js").Generic>;
export declare const sharp: typeof import("sharp");
export declare let _Action: Action;
