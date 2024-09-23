#!/usr/bin/env node

/**
 * @module Compress
 *
 */
export default new (await import("commander")).Command()
	.name("Compress")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("🗜️ Compress —")
	.argument("<File...>", "📝 File —")
	.option("-C, --Compress <File>", "📜 Compress —")
	.action((await import("../Function/CLI.js")).default)
	.parse();
