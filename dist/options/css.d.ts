export interface beforeCompressOptions {
    ast?: {};
    options?: {};
}
export interface afterCompressOptions {
    compressResult?: String;
    options?: {};
}
export default interface CSS {
    [key: string]: any;
    /**
     * Generate a source map when true.
     * @default false
     */
    sourceMap?: Boolean;
    /**
     * Filename of input CSS, uses for source map generation.
     * @default '<unknown>'
     */
    filename?: String;
    /**
     * Output debug information to stderr.
     * @default false
     */
    debug?: Boolean;
    /**
     * Called right after parse is run.
     * @default null
     */
    beforeCompress?: ({}: beforeCompressOptions) => void | Array<({}: beforeCompressOptions) => void> | null;
    /**
     * Called right after syntax.compress() is run.
     * @default null
     */
    afterCompress?: ({}: afterCompressOptions) => void | Array<({}: afterCompressOptions) => void> | null;
    /**
     * Disable | enable a structure optimisations.
     * @default true
     */
    restructure?: Boolean;
    /**
     * Enables merging of @media rules with the same media query by splitted by other rules.
     * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
     * @default false
     * @default astro-compress: true
     */
    forceMediaMerge?: Boolean;
    /**
     * Transform a copy of input AST if true. Useful in case of AST reuse.
     * @default false
     */
    clone?: Boolean;
    /**
     * Specify what comments to leave:
     * 'exclamation' | true – leave all exclamation comments (i.e. /*! .. *\/)
     * 'first-exclamation' – remove every comment except first one false – remove all comments
     * @default true
     * @default astro-compress: false
     */
    comments?: String | Boolean;
    /**
     * Usage data for advanced optimisations.
     * @default null
     */
    usage?: {} | null;
    /**
     * Function to track every step of transformation.
     * @default null
     */
    logger?: () => {} | null;
}
