/**
 * @module Integration
 *
 */
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;
import type Option from "../Interface/Option.js";
import type Action from "files-pipe/Target/Interface/Action.js";
import type { AstroIntegration } from "astro";
export declare const Default: any;
export declare const Search: string;
export declare const Merge: any;
export declare const sharp: typeof import("sharp");
export declare let _Action: Action;
export declare const Files: typeof import("files-pipe").default;
