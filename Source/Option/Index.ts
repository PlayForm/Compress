import Bytes from "files-pipe/Target/Library/Bytes.js";
import Merge from "files-pipe/Target/Library/Merge.js";

import type { Option as _Option } from "files-pipe/Target/Option/Index.js";
import type { CSS } from "./CSS.js";
import type { HTML } from "./HTML.js";
import type { Image } from "./Image.js";
import type { JavaScript } from "./JavaScript.js";
import type { MAP } from "./Map.js";
import type { SVG } from "./SVG.js";

export interface Option extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	CSS?: boolean | CSS;

	HTML?: boolean | HTML;

	JavaScript?: boolean | JavaScript;

	Image?: boolean | Image;

	SVG?: boolean | SVG;

	Map?: boolean | MAP;
}

export default Merge(
	(await import("files-pipe/Target/Option/Index.js")).default,
	{
		CSS: (await import("./CSS.js")).default,
		HTML: (await import("./HTML.js")).default,
		JavaScript: (await import("./JavaScript.js")).default,
		Image: (await import("./Image.js")).default,
		SVG: (await import("./SVG.js")).default,
		Map: (await import("./Map.js")).default,
		Pipe: {
			Failed: async (On) => `Error: Cannot compress file ${On.Input}!`,
			Passed: async (On) =>
				On.Before > Buffer.byteLength(On.Buffer.toString()),
			Accomplished: async (On) =>
				`Compressed ${On.Input} for ${await Bytes(
					On.Before - On.After
				)} (${(((On.Before - On.After) / On.Before) * 100).toFixed(
					2
				)}% reduction) in ${On.Output}.`,
			Changed: async (Plan) => {
				Plan.Info.Total =
					(Plan.Info.Total ? Plan.Info.Total : 0) +
					(Plan.On.Before - Plan.On.After);
				return Plan;
			},
		},
	} satisfies Option
) as Option;
