import type { File } from "files-pipe";
import type { Sharp } from "sharp";
import type { Image } from "../Option/Image.js";

import Default from "../Option/Index.js";

export interface BufferSharp extends Sharp {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export interface OnSharp extends Omit<File, "Buffer"> {
	Buffer: BufferSharp;
}

export default async (_Option: Image, On: OnSharp) => {
	const File = On.Input.split(".").pop();

	if (!File) {
		return;
	}

	const Option: {
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

	const Type =
		typeof Option[File] !== "undefined"
			? Option[File]
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
