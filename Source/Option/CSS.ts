import type {
	CompressOptions as Compress,
	MinifyOptions as Minify,
} from "csso";

export interface CSS extends Minify, Compress {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * Specify what comments to leave:
	 * - 'exclamation' or true – leave all exclamation comments
	 * - 'first-exclamation' – remove every comment except first one
	 * - false – remove all comments
	 * @default AstroCompress false
	 * @default csso true
	 */
	comments: boolean;

	/**
	 * Enables merging of @media rules with the same media query by splitted by other rules.
	 * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
	 * @default AstroCompress true
	 * @default csso false
	 */
	forceMediaMerge: boolean;

	/**
	 * Disable or enable a structure optimisations.
	 * @default AstroCompress false
	 * @default csso true
	 */
	restructure: boolean;
}

export default {
	comments: false,
	forceMediaMerge: true,
	restructure: false,
} satisfies CSS;
