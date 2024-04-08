/**
 * @module Directory
 *
 */
export default (async (...[Path]: Parameters<Interface>) => {
	let Directory = (await import("path"))
		.normalize((await import("path")).parse(Path).dir)
		.replace(/\\/g, "/")
		.replace((await import("@Function/Integration.js")).System, "");

	if (!Directory.endsWith("/")) {
		Directory += "/";
	}

	return Directory;
}) satisfies Interface as Interface;

import type Interface from "@Interface/Directory.js";
