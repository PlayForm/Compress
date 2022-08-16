import { Options } from "src/options";
/**
 * It takes a settings object, loops through each key, and calls the appropriate function for each key
 * @param {Options} settings - Options - The settings object that you pass to the pipeAll function.
 * @param {number} [debug=2] - 0 = no output, 1 = output file names, 2 = output file names and sizes
 */
declare const _default: (settings: Options, debug?: number) => Promise<void>;
export default _default;
