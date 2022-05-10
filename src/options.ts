import CSS from "./options/csso";
import HTML from "./options/html-minifier-terser";
import JS from "./options/terser";

export default interface Options {
	/**
	 * Astro build path.
	 * Default: "./dist/"
	 */
	path?: string;

	/**
	 * [csso] options.
	 */
	css?: CSS | false;

	/**
	 * [html-minifier-terser] options.
	 */
	html?: HTML | false;

	/**
	 * [terser] options.
	 */
	js?: JS | false;
}
