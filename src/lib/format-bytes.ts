/**
 * It takes a number of bytes and returns a string with the number of bytes formatted in a human
 * readable way
 * @param {number} bytes - The number of bytes to format.
 * @param [decimals=2] - The number of decimals to show.
 * @returns A function that takes two parameters, bytes and decimals.
 */

export const formatBytes = async (bytes: number, decimals = 2) => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};
