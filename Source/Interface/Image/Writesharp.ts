/**
 * @module Image
 *
 */
export default interface Interface {
	// biome-ignore lint/suspicious/noExplicitAny:
	(Option: Option, On: On): Promise<any>;
}

import type On from "../Interface/Image/Onsharp.js";
import type Option from "../Interface/Image/sharp.js";
