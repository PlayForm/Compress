/**
 * @module Image
 *
 */
export default (async (...[Option, { Buffer, Input }]: Parameters<Type>) => {
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
					: (await import("../../Variable/Image/sharp.js")).default
			).toBuffer())
		);
	}
}) satisfies Type as Type;

import type Type from "../../Interface/Image/Writesharp.js";
import type File from "../../Type/Image/Filesharp.js";

export const { default: _Map } = await import(
	"../../Variable/Image/Mapsharp.js"
);
