import type Option from "./Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: Option;
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
};
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeLeafURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
}>, Readonly<{
    key: PropertyKey;
    parents: readonly Readonly<Record<PropertyKey, unknown>>[];
}>>;
export declare const sharp: typeof import("sharp");
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;
