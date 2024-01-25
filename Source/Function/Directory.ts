/**
 * @module Directory
 * TODO: Test this for performance, mainly importing the Integration.js System variable
 *
 */
export default (async (...[Path]: Parameters<Type>) => {
	let Clean = (await import("path")).parse(Path).dir;

	Clean = (await import("path")).normalize(Clean);
	Clean = Clean.replace(/\\/g, "/");
	Clean = Clean.replace(
		(await import("../Function/Integration.js")).System,
		"",
	);

	if (!Clean.endsWith("/")) {
		Clean += "/";
	}

	return Clean;
}) satisfies Type as Type;

import type Type from "../Interface/Directory.js";
