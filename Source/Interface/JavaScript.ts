/**
 * @module JavaScript
 *
 */
export default interface Type extends MinifyOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

import type { MinifyOptions } from "terser";
