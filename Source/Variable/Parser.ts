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
} satisfies Interface as Interface;

import type Interface from "../Interface/Parser.js";
