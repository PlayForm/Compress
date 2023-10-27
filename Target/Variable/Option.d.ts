/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
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
    HTML: any;
    Image: any;
    JavaScript: any;
    SVG: any;
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
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: Omit<{} & {
        Failed: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer: _Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After, Output }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    Files: string;
    Exclude: false;
}, "__proto__">;
export default _default;
