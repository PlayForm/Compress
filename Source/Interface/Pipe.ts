import type Pipe from "@playform/pipe/Target/Interface/Class.js";

import type Option from "./Option.js";

/**
 * @module Pipe
 *
 */
export default interface Interface {
	(
		Cache: Option["Cache"],

		Logger: Option["Logger"],

		Path: Parameters<Pipe["In"]>[0],

		FileBy: Parameters<Pipe["By"]>[0],

		FileNot: Parameters<Pipe["Not"]>[0],

		Action: Exclude<Option["Action"], boolean>,
	): Promise<Pipe>;
}
