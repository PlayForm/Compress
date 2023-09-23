import type File from "files-pipe/Target/Interface/File.js";

import type { Sharp } from "sharp";

export default interface Type extends Omit<File, "Buffer"> {
	Buffer: {
		// rome-ignore lint/suspicious/noExplicitAny:
		[key: string]: any;
	} & Sharp;
}
