import type { Config } from "svgo";

export interface Type extends Config {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export type { Type as default };
