/**
 * @module Image
 *
 */
export default interface Type extends Omit<File, "Buffer"> {
	Buffer: {
		// biome-ignore lint/suspicious/noExplicitAny:
		[key: string]: any;
	} & Sharp;
}

import type File from "@playform/pipe/Target/Interface/File.js";

import type { Sharp } from "sharp";
