/**
 * @module Parser
 *
 */
export default {
	CSS: ["csso", "lightningcss"],
	HTML: "html-minifier-terser",
	Image: "sharp",
	JavaScript: "terser",
	SVG: "svgo",
} satisfies Type;

import type Type from "../Interface/Parser.js";
