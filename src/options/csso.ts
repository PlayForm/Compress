export interface beforeCompressOptions {
	ast?: {};
	options?: {};
}

export interface afterCompressOptions {
	compressResult?: String;
	options?: {};
}

export default interface CSS {
	/**
	 * Generate a source map when true.
	 * Default: false
	 */
	sourceMap?: Boolean;

	/**
	 * Filename of input CSS, uses for source map generation.
	 * Default: '<unknown>'
	 */
	filename?: String;

	/**
	 * Output debug information to stderr.
	 * Default: false
	 */
	debug?: Boolean;

	/**
	 * Called right after parse is run.
	 * Default: null
	 */
	beforeCompress?: ({}: beforeCompressOptions) => void | Array<
		({}: beforeCompressOptions) => void
	> | null;

	/**
	 * Called right after syntax.compress() is run.
	 * Default: null
	 */
	afterCompress?: ({}: afterCompressOptions) => void | Array<
		({}: afterCompressOptions) => void
	> | null;

	/**
	 * Disable | enable a structure optimisations.
	 * Default: true
	 */
	restructure?: Boolean;

	/**
	 * Enables merging of @media rules with the same media query by splitted by other rules.
	 * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
	 * Default: false
	 */
	forceMediaMerge?: Boolean;

	/**
	 * Transform a copy of input AST if true. Useful in case of AST reuse.
	 * Default: false
	 */
	clone?: Boolean;

	/**
	 * Specify what comments to leave:
	 * 'exclamation' | true – leave all exclamation comments (i.e. /*! .. *\/)
	 * 'first-exclamation' – remove every comment except first one false – remove all comments
	 * Default: true
	 */
	comments?: String | Boolean;

	/**
	 * Usage data for advanced optimisations.
	 * Default: null
	 */
	usage?: {} | null;

	/**
	 * Function to track every step of transformation.
	 * Default: null
	 */
	logger?: () => {} | null;
}
