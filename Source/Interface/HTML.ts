import type { Options as Option } from "html-minifier-terser";

export default interface Type extends Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
