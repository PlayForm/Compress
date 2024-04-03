/**
 * @module Directory
 *
 */
export default (async (...[Path]: Parameters<Type>) => {
	let Directory = (await import("path"))
		.normalize((await import("path")).parse(Path).dir)
		.replace(/\\/g, "/")
		.replace((await import("@Function/Integration.js")).System, "");

	if (!Directory.endsWith("/")) {
		Directory += "/";
	}

	return Directory;
}) satisfies Type as Type;

import type Type from "@Interface/Directory.js";
