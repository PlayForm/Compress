/**
 * Convert bytes to human readable format.
 * @param {number} bytes - The number of bytes to format.
 * @param {number} [decimals=2.0] - The number of decimal places to show.
 * @returns A function that takes two parameters, bytes and decimals.
 */
const formatBytes = async (bytes: number, decimals: number = 2.0) => {
	if (bytes === 0) {
		return "0 Bytes";
	}

	const k = 1024;
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat(
		(bytes / k ** i).toFixed(decimals < 0 ? 0 : decimals)
	)} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]}`;
};

export default formatBytes;
