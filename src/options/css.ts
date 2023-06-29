import type { CompressOptions, MinifyOptions } from "csso";

export default {
	clone: false,
	comments: false,
	forceMediaMerge: true,
	restructure: false,
} satisfies (MinifyOptions | CompressOptions) & {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
};
