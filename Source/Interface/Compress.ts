import type Pipe from "@playform/pipe/Target/Class/Pipe.js";
import type Path from "@playform/pipe/Target/Type/Path.js";

import type Option from "../Interface/Option.js";

/**
 * @module Compress
 *
 */
export default interface Interface {
	(
		Cache: Option["Cache"],
		Logger: Option["Logger"],
		Path: Path,
		_Map: Exclude<Option["Map"], undefined>,
		Type: keyof Option["Map"],
		Exclude: Option["Exclude"],
		Action: Option["Action"],
	): Promise<Pipe>;
}
