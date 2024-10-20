import type Interface from "../Interface/Directory.js";

/**
 * @module Directory
 *
 */
export default (async (...[Path]) => {
	let Directory = (await import("path"))
		.normalize((await import("path")).parse(Path).dir)
		.replace(/\\/g, "/")
		.replace((await import("@Function/Integration.js")).System, "");

	if (!Directory.endsWith("/")) {
		Directory += "/";
	}

	return Directory;
}) satisfies Interface as Interface;
