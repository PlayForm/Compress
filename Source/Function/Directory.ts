/**
 * @module Directory
 * TODO: Test this for performance, mainly importing the Integration.js System variable
 *
 */
export default (async (...[Path]: Parameters<Type>) => {
	let { dir } = (await import("path")).parse(Path);

	dir = (await import("path")).normalize(dir);
	dir = dir.replace(/\\/g, "/");
	dir = dir.replace(
		(await import("../Function/Integration.js")).System,
		"",
	);

	if (!dir.endsWith("/")) {
		dir += "/";
	}

	return dir;
}) satisfies Type as Type;

import type Type from "../Interface/Directory.js";
