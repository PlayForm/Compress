/**
 * @module Image
 *
 */
export default (async (
	...[Option, { Buffer, Input }]: Parameters<Interface>
) => {
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
					: (await import("@Variable/Image/sharp.js")).default
			).toBuffer())
		);
	}
}) satisfies Interface as Interface;

import type Interface from "../../Interface/Image/Writesharp.js";
import type File from "../../Type/Image/Filesharp.js";

export const { default: _Map } = await import("@Variable/Image/Mapsharp.js");
