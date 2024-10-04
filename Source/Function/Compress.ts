/**
 * @module Compress
 *
 */

export default async (...[Cache]: Parameters<Interface>) => {
	await (
		await (
			await (
				await new (await import("@playform/pipe")).default(
					Cache,
					Logger,
				).In(Path)
			).By(_Map[Type] ?? "**/*")
		).Not(Exclude)
	).Pipe(Action);
};
