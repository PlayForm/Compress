import type { CompressOptions as Compress, MinifyOptions as Minify } from "csso";

export interface CSS extends Minify, Compress {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	clone: false,
	comments: false,
	forceMediaMerge: true,
	restructure: false,
} satisfies CSS;
