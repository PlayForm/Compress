import type Option from "./Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: Option;
export declare const _Default: Option;
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
