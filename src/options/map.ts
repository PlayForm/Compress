export interface MAP {
	[key: string]: string;
}

export default {
	"css": "**/*.css",
	"html": "**/*.html",
	"js": "**/*.{js,mjs,cjs}",
	"img": "**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,apng,png,raw,tiff,webp}",
	"svg": "**/*.svg",
} satisfies MAP;
