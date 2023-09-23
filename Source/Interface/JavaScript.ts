import type { MinifyOptions as Minify } from "terser";

export default interface Type extends Minify {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
