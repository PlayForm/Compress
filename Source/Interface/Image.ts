/**
 * @module Image
 *
 */
export default interface Type {
	// biome-ignore lint/suspicious/noExplicitAny:
	(Option: Option, On: On): Promise<any>;
}

import type On from "../Interface/Image/On.js";
import type Option from "../Interface/Image/Option.js";
