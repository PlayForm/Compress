/// <reference types="node" />
import { type imageType } from "./types.js";
import type { ISizeCalculationResult } from "./types/interface.js";
type CallbackFn = (e: Error | null, r?: ISizeCalculationResult) => void;
export default imageSize;
export declare function imageSize(input: Buffer | string): ISizeCalculationResult;
export declare function imageSize(input: string, callback: CallbackFn): void;
export declare const disableFS: (v: boolean) => void;
export declare const disableTypes: (types: imageType[]) => void;
export declare const setConcurrency: (c: number) => void;
export declare const types: string[];
