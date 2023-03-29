/**
 * Convert bytes to human readable format.
 * @param {number} bytes - The number of bytes to format.
 * @param {number} [decimals=2.0] - The number of decimal places to show.
 * @returns A function that takes two parameters, bytes and decimals.
 */
declare const formatBytes: (bytes: number, decimals?: number) => Promise<string>;
export default formatBytes;
