import type On from "../Interface/Image/On.js";
import type Option from "../Interface/Image/Option.js";

import _Map from "../Object/Sharp/Map.js";

export default async (Option: Option, On: On) => {
	const File = On.Input.split(".").pop();

	if (!File) {
		return;
	}

	const Type =
		typeof _Map[File] !== "undefined"
			? _Map[File]
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
