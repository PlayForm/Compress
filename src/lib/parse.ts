import FastGlob from "fast-glob";
import fs from "fs";

import formatBytes from "./format-bytes.js";

/**
 * It takes a glob, a debug level, a type, a write function, and a read function, and then it
 * compresses all the files that match the glob using the write function, and then it logs the results
 * to the console using the debug level
 * @param {string} glob - The glob pattern to search for files.
 * @param {number} [debug=2] - The level of debug output. 0 = none, 1 = summary, 2 = detailed.
 * @param {string} [type] - The type of file you're compressing. This is used for the console output.
 * @param write - (data: string) => any = async (data) => data,
 * @param read - (file: string) => any = async (file) =>
 */
export default async (
	glob: string,
	debug: number = 2,
	type: string = "",
	write: (data: string) => any = async (data) => data,
	read: (file: string) => any = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	const savings = {
		initial: 0,
		files: 0,
		total: 0,
	};

	for (const file of files) {
		try {
			const fileSizeBefore = (await fs.promises.stat(file)).size;
			savings.initial += fileSizeBefore;

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
						"\u001b[32mCompressed " +
							file.replace(/^.*[\\\/]/, "") +
							" for " +
							(await formatBytes(
								fileSizeBefore - fileSizeAfter
							)) +
							" (" +
							(
								((fileSizeBefore - fileSizeAfter) /
									fileSizeBefore) *
								100
							).toFixed(2) +
							"% reduction)" +
							".\u001b[39m"
					);
				}
			}
		} catch (error) {
			console.log("Error: Cannot compress file " + file + "!");
		}
	}

	if (debug > 0 && savings.files > 0) {
		console.info(
			"\u001b[32mSuccessfully compressed a total of " +
				savings.files +
				" " +
				type.toUpperCase() +
				" " +
				(savings.files === 1 ? "file" : "files") +
				" for " +
				(await formatBytes(savings.total)) +
				".\u001b[39m"
		);
	}
};
