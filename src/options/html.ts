import type { Options } from "html-minifier-terser";

export default interface HTML extends Options {
	// rome-ignore lint:
	[key: string]: any;
}
