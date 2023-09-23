import type { Type as On } from "../Interface/Image/On.js";
import type { Type as Option } from "../Interface/Image/Option.js";

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

export default async (Option: Option, On: On) => {
	const File = On.Input.split(".").pop();

	if (!File) {
		return;
	}

	const Type =
		typeof Show[File] !== "undefined"
			? Show[File]
			: typeof Option[File] !== "undefined"
			? File
			: false;

	if (
		Type &&
		["avif", "gif", "heif", "jpeg", "png", "raw", "tiff", "webp"].includes(
			Type
		) &&
		typeof Option[Type] !== "undefined" &&
		Option[Type] !== false
	) {
		return (
			Type in On.Buffer &&
			(await On.Buffer[Type](
				Option[Type] !== true
					? Option[Type]
					: (await import("../Object/Option.js")).default.Image
			).toBuffer())
		);
	}
};
