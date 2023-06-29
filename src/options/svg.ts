import type { Config } from "svgo";

export default {
	multipass: true,
	js2svg: {
		indent: 0,
		pretty: false,
	},
	plugins: ["preset-default"],
} satisfies Config & {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
};
