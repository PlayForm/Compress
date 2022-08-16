import { Js2SvgOptions, OptimizeOptions } from "svgo";

export default interface SVG extends OptimizeOptions {
	[key: string]: any;

	/**
	 * @default false
	 * @default astro-compress: true
	 */
	multipass?: boolean;

	/**
	 * 'enc' or 'unenc'
	 * @default "base64"
	 */
	datauri?: "enc" | "unenc" | "base64" | undefined;

	/**
	 * @default { indent: 4, pretty: false }
	 * @default astro-compress: { indent: 0, pretty: false }
	 */
	js2svg?: Js2SvgOptions;

	/**
	 * @default ["preset-default"]
	 */
	plugins?: any;
}
