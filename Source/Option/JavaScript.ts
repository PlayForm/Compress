import type { MinifyOptions } from "terser";

export interface JavaScript extends MinifyOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	ecma: 5,
	enclose: false,
	keep_classnames: false,
	keep_fnames: false,
	ie8: false,
	module: false,
	safari10: false,
	toplevel: false,
	format: {
		comments: false,
	},
} satisfies JavaScript;
