/**
 * @module CSS
 *
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
import type { CompressOptions, MinifyOptions } from "csso";
