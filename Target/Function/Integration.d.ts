/**
 * @module Integration
 *
 */
export declare let System: string;
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
import type Action from "@playform/pipe/Target/Interface/Action.js";
export declare const Default: Omit<{} & {
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
export declare const Search: string;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
export declare let _Action: Action;
