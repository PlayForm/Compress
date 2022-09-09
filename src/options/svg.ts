import type { Js2SvgOptions, OptimizeOptions } from "svgo";

export default interface SVG extends OptimizeOptions {
	[key: string]: any;

	multipass?: boolean;

	datauri?: "enc" | "unenc" | "base64" | undefined;

	js2svg?: Js2SvgOptions;

	plugins?: any;
}
