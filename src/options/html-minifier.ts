export interface HTML {
	/**
	 * Treat attributes in case sensitive manner (useful for custom HTML tags).
	 * Default: false
	 */
	caseSensitive?: Boolean;

	/**
	 * Omit attribute values from boolean attributes.
	 * Default: false
	 */
	collapseBooleanAttributes?: Boolean;

	/**
	 * Don't leave any spaces between `display:inline;` elements when collapsing.
	 * Must be used in conjunction with `collapseWhitespace=true`
	 * Default: false
	 */
	collapseInlineTagWhitespace?: Boolean;

	/**
	 * Collapse white space that contributes to text nodes in a document tree.
	 * Default: false
	 */
	collapseWhitespace?: Boolean;

	/**
	 * Always collapse to 1 space (never remove it entirely).
	 * Must be used in conjunction with `collapseWhitespace=true`
	 * Default: false
	 */
	conservativeCollapse?: Boolean;

	/**
	 * Handle parse errors instead of aborting.
	 * Default: false
	 */
	continueOnParseError?: Boolean;

	/**
	 * 	Arrays of regex'es that allow to support custom attribute assign expressions (e.g. `'<div flex?="{{mode != cover}}"></div>'`).
	 * Default: [ ]
	 */
	customAttrAssign?: RegExp[];

	/**
	 * Regex that specifies custom attribute to strip newlines from (e.g. `/ng-class/`).
	 */
	customAttrCollapse?: String;

	/**
	 * Arrays of regex'es that allow to support custom attribute surround expressions (e.g. `<input {{#if value}}checked="checked"{{/if}}>`).
	 * Default: [ ]
	 */
	customAttrSurround?: RegExp[];

	/**
	 * Arrays of regex'es that allow to support custom event attributes for `minifyJS` (e.g. `ng-click`).
	 * Default: [ /^on[a-z]{3,}$/ ]
	 */
	customEventAttributes?: RegExp[];

	/**
	 * Use direct Unicode characters whenever possible.
	 * Default: false
	 */
	decodeEntities?: Boolean;

	/**
	 * Parse input according to HTML5 specifications.
	 * Default: true
	 */
	html5?: Boolean;

	/**
	 * Array of regex'es that allow to ignore certain comments, when matched.
	 * Default: [ /^!/, /^\s*#/ ]
	 */
	ignoreCustomComments?: RegExp[];

	/**
	 * Array of regex'es that allow to ignore certain fragments, when matched (e.g. `<?php ... ?>`, `{{ ... }}`, etc.).
	 * Default: [ /<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/ ]
	 */
	ignoreCustomFragments?: RegExp[];

	/**
	 * Insert tags generated by HTML parser.
	 * Default: true
	 */
	includeAutoGeneratedTags?: Boolean;

	/**
	 * Keep the trailing slash on singleton elements.
	 * Default: false
	 */
	keepClosingSlash?: Boolean;

	/**
	 * Specify a maximum line length.
	 * Compressed output will be split by newlines at valid HTML split-points.
	 * Default: null
	 */
	maxLineLength?: Number | null;

	/**
	 * Minify CSS in style elements and style attributes (uses clean-css).
	 * Default: false (could be `true`, `Object`, `Function(text, type)`
	 */
	minifyCSS?:
		| Boolean
		| Object
		| (({}: { text: string; type: string }) => void);

	/**
	 * Minify JavaScript in script elements and event attributes (uses Terser).
	 * Default: false (could be `true`, `Object`, `Function(text, inline)`
	 */
	minifyJS?:
		| Boolean
		| Object
		| (({}: { text: string; inline: string }) => void);

	/**
	 * Minify URLs in various attributes (uses relateurl).
	 * Default: false (could be `String`, `Object`, `Function(text)`
	 */
	minifyURLs?: Boolean | String | Object | (({}: { text: string }) => void);

	/**
	 * Never add a newline before a tag that closes an element.
	 * Default: false
	 */
	noNewlinesBeforeTagClose?: Boolean;

	/**
	 * Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break.
	 * Must be used in conjunction with `collapseWhitespace=true`
	 * Default: false
	 */
	preserveLineBreaks?: Boolean;

	/**
	 * Prevents the escaping of the values of attributes.
	 * Default: false
	 */
	preventAttributesEscaping?: Boolean;

	/**
	 * Process contents of conditional comments through minifier.
	 * Default: false
	 */
	processConditionalComments?: Boolean;

	/**
	 * Array of strings corresponding to types of script elements to process through minifier (e.g. `text/ng-template`, `text/x-handlebars-template`, etc.).
	 * Default: [ ]
	 */
	processScripts?: String[];

	/**
	 * Type of quote to use for attribute values (' or ").
	 * Default: ""
	 */
	quoteCharacter?: String;

	/**
	 * Remove quotes around attributes when possible.
	 * Default: false
	 */
	removeAttributeQuotes?: Boolean;

	/**
	 * Strip HTML comments.
	 * Default: false
	 */
	removeComments?: Boolean;

	/**
	 * Remove all attributes with whitespace-only values.
	 * Default: false (could be `true`, `Function(attrName, tag)`
	 */
	removeEmptyAttributes?:
		| Boolean
		| (({}: { attrName: string; tag: string }) => void);

	/**
	 * Remove all elements with empty contents.
	 * Default: false
	 */
	removeEmptyElements?: Boolean;

	/**
	 * Remove optional tags.
	 * Default: false
	 */
	removeOptionalTags?: Boolean;

	/**
	 * Remove attributes when value matches default.
	 * Default: false
	 */
	removeRedundantAttributes?: Boolean;

	/**
	 * Remove `type="text/javascript"` from `script` tags.
	 * Other `type` attribute values are left intact
	 * Default: false
	 */
	removeScriptTypeAttributes?: Boolean;

	/**
	 * Remove `type="text/css"` from `style` and `link` tags.
	 * Other `type` attribute values are left intact
	 * Default: false
	 */
	removeStyleLinkTypeAttributes?: Boolean;

	/**
	 * Remove space between attributes whenever possible.
	 * Note that this will result in invalid HTML!
	 * Default: false
	 */
	removeTagWhitespace?: Boolean;

	/**
	 * Sort attributes by frequency.
	 * Default: false
	 */
	sortAttributes?: Boolean;

	/**
	 * Sort style classes by frequency.
	 * Default: false
	 */
	sortClassName?: Boolean;

	/**
	 * Trim white space around `ignoreCustomFragments`
	 * Default: false
	 */
	trimCustomFragments?: Boolean;

	/**
	 * Replaces the `doctype` with the short (HTML5) doctype.
	 * Default: false
	 */
	useShortDoctype?: Boolean;
}
