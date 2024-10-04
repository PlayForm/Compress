import type Interface from "../Interface/Compress.js";

/**
 * @module Compress
 *
 */
export default (async (
	...[Cache, Logger, Path, _Map, Type, Exclude, Action]: Parameters<Interface>
) =>
	await (
		await (
			await (
				await new (await import("@playform/pipe")).default(
					Cache,
					Logger,
				).In(Path)
			).By(_Map[Type] ?? "**/*")
		).Not(Exclude)
	).Pipe(Action)) satisfies Interface as Interface;
