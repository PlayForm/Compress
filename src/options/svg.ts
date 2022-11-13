import type { Config } from "svgo";

export default interface SVG extends Config {
	// rome-ignore lint:
	[key: string]: any;
}
