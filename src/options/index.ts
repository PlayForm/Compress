import CSS from "./css";
import HTML from "./html";
import IMG from "./img";
import JS from "./js";
import SVG from "./svg";

export default interface Options {
	[key: string]: any;

	/**
	 * Astro build path.
	 * @default "./dist/"
	 */
	path?: string;

	/**
	 * [csso] options.
	 */
	css?: boolean | CSS;

	/**
	 * [html-minifier-terser] options.
	 */
	html?: boolean | HTML;

	/**
	 * [terser] options.
	 */
	js?: boolean | JS;

	/**
	 * [sharp] options.
	 */
	img?: boolean | IMG;

	/**
	 * [svgo] options.
	 */
	svg?: boolean | SVG;

	/**
	 * Logger level.
	 * Default: 2
	 */
	logger?: number;
}
