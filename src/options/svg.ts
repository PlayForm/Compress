import type { OptimizeOptions } from "svgo";

export default interface SVG extends OptimizeOptions {
	[key: string]: any;
}
