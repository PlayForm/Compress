import type { Config } from "svgo";

export interface SVG extends Config {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	multipass: true,
	js2svg: {
		indent: 0,
		pretty: false,
	},
	plugins: ["preset-default"],
} satisfies SVG;
