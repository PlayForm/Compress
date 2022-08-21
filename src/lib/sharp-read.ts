import type IMG from "../options/img";

/**
 * It takes a sharp file and an options object, and returns a buffer of the file in the format
 * specified in the options object
 * @param {any} sharpFile - The sharp file object
 * @param {IMG} options - IMG = {}
 * @returns A function that returns a promise that resolves to a buffer.
 */
export default async (sharpFile: any, options: IMG = {}) => {
	const fileType = sharpFile.options.input.file.split(".").pop();

	if (!fileType) {
		return;
	}

	const typeToOption: {
		[key: string]: any;
	} = {
		"avci": "avif",
		"avcs": "avif",
		"avifs": "avif",
		"heic": "heif",
		"heics": "heif",
		"heifs": "heif",
		"jfif": "jpeg",
		"jif": "jpeg",
		"jpe": "jpeg",
		"jpg": "jpeg",
	};

	const optionType =
		typeof typeToOption[fileType] !== "undefined"
			? typeToOption[fileType]
			: typeof options[fileType] !== "undefined"
			? fileType
			: false;

	const validOptionCalls = [
		"avif",
		"gif",
		"heif",
		"jpeg",
		"png",
		"raw",
		"tiff",
		"webp",
	];

	if (
		validOptionCalls.includes(optionType) &&
		options[optionType] !== false
	) {
		return await sharpFile[optionType](options[optionType]).toBuffer();
	}
};
