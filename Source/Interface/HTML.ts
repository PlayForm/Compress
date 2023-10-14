/**
 * @module HTML
 *
 */
export default interface Type extends Options {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

import type { Options } from "html-minifier-terser";
