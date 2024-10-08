import type Interface from "../Interface/Pipe.js";

/**
 * @module Pipe
 *
 */
export default (async (
	...[Cache, Logger, Path, FileBy, FileNot, Action]: Parameters<Interface>
) =>
	await (
		await (
			await (
				await new (await import("@playform/pipe")).default(
					Cache,
					Logger,
				).In(Path)
			).By(FileBy)
		).Not(FileNot)
	).Pipe(Action)) satisfies Interface as Interface;
