import type { MinifyOptions } from "terser";

export default interface Type extends MinifyOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
