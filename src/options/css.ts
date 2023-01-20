import type { CompressOptions, MinifyOptions } from "csso";

export interface CSS extends MinifyOptions, CompressOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	clone: false,
	comments: false,
	forceMediaMerge: true,
} satisfies CSS;
