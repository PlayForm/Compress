/**
 * @module Directory
 *
 */
export default (async (...[Path]: Parameters<Interface>) => {
	let Directory = (await import("node:path"))
		.normalize((await import("node:path")).parse(Path).dir)
		.replace(/\\/g, "/")
		.replace((await import("@Function/Integration.js")).System, "");

	if (!Directory.endsWith("/")) {
		Directory += "/";
	}

	return Directory;
}) satisfies Interface as Interface;

import type Interface from "../Interface/Directory.js";
