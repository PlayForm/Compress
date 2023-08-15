export interface MAP {
	[key: string]: string;
}

export default {
	CSS: "**/*.css",
	HTML: "**/*.html",
	JavaScript: "**/*.{js,mjs,cjs,jsm}",
	SVG: "**/*.svg",
} satisfies MAP;
