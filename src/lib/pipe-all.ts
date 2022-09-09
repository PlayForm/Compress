import { minify as csso } from "csso";
import { minify as htmlMinifierTerser } from "html-minifier-terser";
import sharp from "sharp";
import { optimize as svgo } from "svgo";
import { minify as terser } from "terser";

import type { Options } from "../options/index";
import parse from "./parse.js";
import sharpRead from "./sharp-read.js";

export default async (settings: Options, debug: number = 2) => {
	for (const files in settings) {
		if (Object.prototype.hasOwnProperty.call(settings, files)) {
			const setting = settings[files];

			if (!setting) {
				continue;
			}

			switch (files) {
				case "css":
					await parse(
						`${settings.path}**/*.css`,
						debug,
						files,
						(data) => csso(data, setting).css
					);
					break;

				case "html":
					await parse(
						`${settings.path}**/*.html`,
						debug,
						files,
						async (data) => await htmlMinifierTerser(data, setting)
					);
					break;

				case "js":
					await parse(
						`${settings.path}**/*.{js,mjs,cjs}`,
						debug,
						files,
						async (data) => (await terser(data, setting)).code
					);
					break;

				case "img":
					await parse(
						`${settings.path}**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,png,raw,tiff,webp}`,
						debug,
						files,
						async (sharpFile) =>
							await sharpRead(sharpFile, setting),
						async (file) => sharp(file)
					);
					break;

				case "svg":
					await parse(
						`${settings.path}**/*.svg`,
						debug,
						files,
						async (data) => {
							const result = svgo(data, setting) as {
								[key: string]: any;
							};

							if (typeof result["error"] !== "undefined") {
								console.log(result["error"]);
							}

							if (typeof result["data"] !== "undefined") {
								return result["data"];
							}
						}
					);
					break;

				default:
					break;
			}
		}
	}
};
