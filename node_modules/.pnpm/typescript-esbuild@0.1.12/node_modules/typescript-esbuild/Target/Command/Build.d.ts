import type { Pattern } from "fast-glob";
export type Pipe = string[];
/**
 * The `Build` function compiles and builds TypeScript files using esbuild and TypeScript compiler.
 * @param {Pattern[]} Files - An array of file patterns to be processed. Each pattern can include
 * wildcards (*) to match multiple files.
 * @param [Option] - The `Option` parameter is an optional object that can contain two properties:
 */
declare const _default: (Files: Pattern[], Option?: {
    ESBuild?: string;
    TypeScript?: string;
}) => Promise<void>;
export default _default;
