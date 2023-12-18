/**
 * @module Image
 *
 */
export default interface Type {
	// biome-ignore lint/suspicious/noExplicitAny:
	(Option: Option, On: On): Promise<any>;
}

import type On from "./Onsharp.js";
import type Option from "./sharp.js";
