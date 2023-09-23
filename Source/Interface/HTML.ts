import type { Options } from "html-minifier-terser";

export default interface Type extends Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
