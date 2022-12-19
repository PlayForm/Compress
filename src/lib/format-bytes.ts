// rome-ignore lint/nursery/noPrecisionLoss:
export default async (bytes: number, decimals = 2) => {
	if (bytes === 0) {
		return "0 Bytes";
	}

	const k = 1024;
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat(
		(bytes / k ** i).toFixed(decimals < 0 ? 0 : decimals)
	)} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]}`;
};
