/**
 * @module Integration
 *
 */
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;
import type Option from "../Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: any;
export declare const _Default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<import("files-pipe/Target/Interface/Plan.js").default>;
    };
    Files: string;
    Exclude: false;
};
export declare const Merge: any;
export declare const sharp: typeof import("sharp");
