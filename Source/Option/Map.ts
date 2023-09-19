export interface Map {
	[key: string]: string;
}

export default {
	CSS: "**/*.css",
	HTML: "**/*.html",
	JavaScript: "**/*.{js,mjs,cjs,jsm}",
	SVG: "**/*.svg",
} satisfies Map;
