/**
 * @module JavaScript
 *
 */
export default interface Type extends MinifyOptions {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

import type { MinifyOptions } from "terser";
