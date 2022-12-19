import type { CompressOptions, MinifyOptions } from "csso";

export default interface CSS extends MinifyOptions, CompressOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
