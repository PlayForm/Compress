export interface MAP {
	[key: string]: string;
}

export default {
	css: "**/*.css",
	html: "**/*.html",
	img: "**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,apng,png,raw,tiff,webp}",
	js: "**/*.{js,mjs,cjs,jsm}",
	svg: "**/*.svg",
} satisfies MAP;
