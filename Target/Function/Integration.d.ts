import type Action from "@playform/pipe/Target/Interface/Action.js";
import type Interface from "../Interface/Integration.js";
/**
 * @module Integration
 *
 */
export declare let System: string;
export declare const Default: any;
export declare const Search: string;
export declare const Merge: <Target extends object, Ts extends ReadonlyArray<unknown>>(target: Target, ...objects: Ts) => void;
export declare let _Action: Action;
declare const _default: Interface;
export default _default;
