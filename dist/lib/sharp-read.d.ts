import type IMG from "../options/img";
/**
 * It takes a sharp file and an options object, and returns a buffer of the file in the format
 * specified in the options object
 * @param {any} sharpFile - The sharp file object
 * @param {IMG} options - IMG = {}
 * @returns A function that returns a promise that resolves to a buffer.
 */
declare const _default: (sharpFile: any, options?: IMG) => Promise<any>;
export default _default;
