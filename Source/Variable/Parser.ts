/**
 * @module Parser
 *
 */
export default {
	CSS: ["csso", "lightningcss"],
	HTML: "html-minifier-terser",
	JavaScript: "terser",
	SVG: "svgo",
} satisfies Type;

import type Type from "../Interface/Parser.js";
