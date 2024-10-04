import type Type from "../../Type/SVG/svgo.js";

/**
 * @module SVG
 *
 */
export default {
	multipass: true,
	js2svg: {
		indent: 0,
		pretty: false,
	},
	plugins: ["preset-default"],
} satisfies Type;
