/**
 * @module SVG
 *
 */
export default interface Type extends Config {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

import type { Config } from "svgo";
