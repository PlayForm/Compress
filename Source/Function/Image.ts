import type File from "../Interface/File.js";
import type On from "../Interface/Image/On.js";
import type Option from "../Interface/Image/Option.js";

export const { default: _Map } = await import("../Object/Image/Map.js");

export default async (Option: Option, { Buffer, Input }: On) => {
	const File = Input.split(".").pop();

	if (!File) {
		return;
	}

	const Type =
		typeof _Map[File as File] !== "undefined"
			? _Map[File as File]
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
			Type in Buffer &&
			(await Buffer[Type](
				Option[Type] !== true
					? Option[Type]
					: (await import("../Object/Image.js")).default
			).toBuffer())
		);
	}
};
