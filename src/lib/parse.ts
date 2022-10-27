import FastGlob from "fast-glob";
import fs from "fs";

import formatBytes from "./format-bytes.js";
import type { Options } from "../options/index.js";

export default async (
	glob: string,
	debug: number = 2,
	type: string = "",
	filter: Options["filter"],
	write: (data: string) => any = async (data) => data,
	read: (file: string) => any = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	const savings = {
		files: 0,
		total: 0,
	};

	let excludes = new Set();

	if (typeof filter !== "undefined") {
		if (filter instanceof Array) {
			for (const filters of filter) {
				excludes.add(filters);
			}
		} else {
			excludes.add(filter);
		}
	}

	for (const exclude of excludes) {
		if (typeof exclude === "string") {
			for (const file of files) {
				if (file.match(exclude)) {
					files.splice(files.indexOf(file), 1);
				}
			}
		}

		if (typeof exclude === "function") {
			for (const file of files) {
				if (exclude(file)) {
					files.splice(files.indexOf(file), 1);
				}
			}
		}
	}

	for (const file of files) {
		try {
			const fileSizeBefore = (await fs.promises.stat(file)).size;
			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			if (fileSizeBefore > Buffer.byteLength(writeBuffer)) {
				await fs.promises.writeFile(file, writeBuffer, "utf-8");

				const fileSizeAfter = (await fs.promises.stat(file)).size;

				savings.files++;
				savings.total += fileSizeBefore - fileSizeAfter;

				if (debug > 1) {
					console.info(
						`\u001b[32mCompressed ${file.replace(
							/^.*[\\\/]/,
							""
						)} for ${await formatBytes(
							fileSizeBefore - fileSizeAfter
						)} (${(
							((fileSizeBefore - fileSizeAfter) /
								fileSizeBefore) *
							100
						).toFixed(2)}% reduction).\u001b[39m`
					);
				}
			}
		} catch (error) {
			console.log(`Error: Cannot compress file ${file}!`);
		}
	}

	if (debug > 0 && savings.files > 0) {
		console.info(
			`\u001b[32mSuccessfully compressed a total of ${
				savings.files
			} ${type.toUpperCase()} ${
				savings.files === 1 ? "file" : "files"
			} for ${await formatBytes(savings.total)}.\u001b[39m`
		);
	}
};
