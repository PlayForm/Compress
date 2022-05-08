import { CSS } from "./options/csso";
import { HTML } from "./options/html-minifier";

export default interface Options {
	/**
	 * Astro build path.
	 * Default: "./dist/"
	 */
	path?: string;

	/**
	 * csso options.
	 */
	css?: CSS;

	/**
	 * html-minifier options.
	 */
	html?: HTML;
}
