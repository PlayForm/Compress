/**
 * @module Option
 *
 */
export default interface Type extends Option {
	/**
	 * csso & lightningcss option properties
	 *
	 */
	CSS?:
		| boolean
		| {
				[KeyCSS in CSS]: KeyCSS extends "csso"
					? csso
					: KeyCSS extends "lightningcss"
					? lightningcss
					: // biome-ignore lint/complexity/noBannedTypes:
					  {};
		  };

	/**
	 * html-minifier-terser option properties
	 *
	 */
	HTML?:
		| boolean
		| {
				[KeyHTML in HTML]: KeyHTML extends "html-minifier-terser"
					? html_minifier_terser
					: // biome-ignore lint/complexity/noBannedTypes:
					  {};
		  };

	/**
	 * sharp option properties
	 *
	 */
	Image?:
		| boolean
		| {
				// biome-ignore lint/complexity/noBannedTypes:
				[KeyImage in Image]: KeyImage extends "sharp" ? sharp : {};
		  };

	/**
	 * terser option properties
	 *
	 */
	JavaScript?:
		| boolean
		| {
				[KeyJavaScript in JavaScript]: KeyJavaScript extends "terser"
					? terser
					: // biome-ignore lint/complexity/noBannedTypes:
					  {};
		  };

	/**
	 * svgo option properties
	 *
	 */
	SVG?:
		| boolean
		| {
				[KeySVG in SVG]: KeySVG extends "svgo"
					? svgo
					: // biome-ignore lint/complexity/noBannedTypes:
					  {};
		  };

	/**
	 * Map to different file paths
	 *
	 */
	Map?: boolean | _Map;

	/**
	 * Parsers for different file types
	 *
	 */
	Parser?: Parser;
}

import type CSS from "../Type/Parser/CSS.js";
import type HTML from "../Type/Parser/HTML.js";
import type Image from "../Type/Parser/Image.js";
import type JavaScript from "../Type/Parser/JavaScript.js";
import type SVG from "../Type/Parser/SVG.js";

import type html_minifier_terser from "../Type/HTML/html-minifier-terser.js";
import type terser from "../Type/JavaScript/terser.js";
import type svgo from "../Type/SVG/svgo.js";
import type csso from "./CSS/csso.js";
import type lightningcss from "./CSS/lightningcss.js";
import type sharp from "./Image/sharp.js";

import type _Map from "./Map.js";
import type Parser from "./Parser.js";

import type Option from "files-pipe/Target/Interface/Option.js";
