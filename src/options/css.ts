import type { CompressOptions, MinifyOptions } from "csso";

export interface CSS extends MinifyOptions, CompressOptions {
	[key: string]: any;
}

export default {
	clone: false,
	comments: false,
	forceMediaMerge: true,
} satisfies CSS;
