import type { Type as Image } from "../Interface/Image.js";

import Default from "../Option/Index.js";

export const Show: {
	[key: string]: string;
} = {
	avci: "avif",
	avcs: "avif",
	avifs: "avif",
	heic: "heif",
	heics: "heif",
	heifs: "heif",
	jfif: "jpeg",
	jif: "jpeg",
	jpe: "jpeg",
	apng: "png",
	jpg: "jpeg",
};

export default async (_Option: Type, On: Image) => {
	const File = On.Input.split(".").pop();

	if (!File) {
		return;
	}

	const Type =
		typeof Show[File] !== "undefined"
			? Show[File]
			: typeof _Option[File] !== "undefined"
			? File
			: false;

	if (
		Type &&
		["avif", "gif", "heif", "jpeg", "png", "raw", "tiff", "webp"].includes(
			Type
		) &&
		typeof _Option[Type] !== "undefined" &&
		_Option[Type] !== false
	) {
		return (
			Type in On.Buffer &&
			(await On.Buffer[Type](
				_Option[Type] !== true ? _Option[Type] : Default.Image
			).toBuffer())
		);
	}
};
