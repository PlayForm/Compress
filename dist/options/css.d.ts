import { MinifyOptions, CompressOptions, BeforeCompressFn, AfterCompressFn, Usage } from "csso";
export default interface CSS extends MinifyOptions, CompressOptions {
    [key: string]: any;
    /**
     * Generate a source map when true.
     * @default false
     */
    sourceMap?: boolean | undefined;
    /**
     * Filename of input CSS, uses for source map generation.
     * @default '<unknown>'
     */
    filename?: string | undefined;
    /**
     * Output debug information to stderr.
     * @default false
     */
    debug?: boolean | undefined;
    /**
     * Called right after parse is run.
     * @default null
     */
    beforeCompress?: BeforeCompressFn | BeforeCompressFn[] | undefined;
    /**
     * Called right after syntax.compress() is run.
     * @default null
     */
    afterCompress?: AfterCompressFn | AfterCompressFn[] | undefined;
    /**
     * Disable | enable a structure optimisations.
     * @default true
     */
    restructure?: boolean;
    /**
     * Enables merging of @media rules with the same media query by splitted by other rules.
     * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
     * @default false
     * @default astro-compress: true
     */
    forceMediaMerge?: boolean;
    /**
     * Transform a copy of input AST if true. Useful in case of AST reuse.
     * @default false
     */
    clone?: boolean;
    /**
     * Specify what comments to leave:
     * 'exclamation' | true – leave all exclamation comments (i.e. /*! .. *\/)
     * 'first-exclamation' – remove every comment except first one false – remove all comments
     * @default true
     * @default astro-compress: false
     */
    comments?: string | boolean | undefined;
    /**
     * Usage data for advanced optimisations.
     * @default null
     */
    usage?: Usage | undefined;
    /**
     * Function to track every step of transformation.
     * @default null
     */
    logger?: () => {} | null;
}
