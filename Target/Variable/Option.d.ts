/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    CSS: {
        csso: Interface;
        lightningcss: Interface;
    };
    HTML: {
        "html-minifier-terser": Type;
    };
    Image: {
        sharp: Interface;
    };
    JavaScript: {
        terser: Type;
    };
    SVG: {
        svgo: Type;
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
    Path: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Logger: 2;
    Action: Omit<{} & {
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    File: string;
    Exclude: false;
}, "__proto__">;
export default _default;
