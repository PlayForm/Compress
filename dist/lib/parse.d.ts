/**
 * It takes a glob, a debug level, a type, a write function, and a read function, and then it
 * compresses all the files that match the glob using the write function, and then it logs the results
 * to the console using the debug level
 * @param {string} glob - The glob pattern to search for files.
 * @param {number} [debug=2] - The level of debug output. 0 = none, 1 = summary, 2 = detailed.
 * @param {string} [type] - The type of file you're compressing. This is used for the console output.
 * @param write - (data: string) => any = async (data) => data,
 * @param read - (file: string) => any = async (file) =>
 */
declare const _default: (glob: string, debug?: number, type?: string, write?: (data: string) => any, read?: (file: string) => any) => Promise<void>;
export default _default;
