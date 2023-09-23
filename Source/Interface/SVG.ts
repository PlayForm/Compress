import type { Config } from "svgo";

export default interface Type extends Config {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
