export interface Map {
	[key: string]: string;
}

export default {
	CSS: "**/*.css",
	HTML: "**/*.html",
	Image: "**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,apng,png,raw,tiff,webp}",
	JavaScript: "**/*.{js,mjs,cjs,jsm}",
	SVG: "**/*.svg",
} satisfies Map;
