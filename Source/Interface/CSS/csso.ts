import type { CompressOptions, MinifyOptions } from "csso";

/**
 * @module CSS
 *
 * Opt-in only. `csso` is disabled by default because it silently drops modern
 * CSS it cannot parse — Media Queries Level 4 range syntax
 * (`@media (width>=40rem)`) and CSS nesting blocks are removed from the output
 * rather than left untouched. `lightningcss` is the default CSS compressor.
 *
 * @see HTTPS://GitHub.Com/PlayForm/Compress/issues/640
 * @see HTTPS://GitHub.Com/PlayForm/Compress/issues/400
 */
export default interface Interface extends MinifyOptions, CompressOptions {
	/**
	 * Specify what comments to leave:
	 * - 'exclamation' or true – leave all exclamation comments
	 * - 'first-exclamation' – remove every comment except first one
	 * - false – remove all comments
	 *
	 * @default Compress false
	 * @default csso true
	 */
	comments?: boolean;

	/**
	 * Enables merging of @media rules with the same media query by splitted by other rules.
	 * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
	 *
	 * @default Compress true
	 * @default csso false
	 */
	forceMediaMerge?: boolean;

	/**
	 * Disable or enable a structure optimisations.
	 *
	 * @default CompressAstro false
	 * @default csso true
	 */
	restructure?: boolean;
}
