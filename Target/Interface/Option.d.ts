/**
 * @module Option
 *
 */
export default interface Type extends Option {
    /**
     * csso option properties
     */
    CSS?: boolean | CSS;
    /**
     * html-minifier-terser option properties
     */
    HTML?: boolean | HTML;
    /**
     * sharp option properties
     */
    Image?: boolean | Image;
    /**
     * terser option properties
     */
    JavaScript?: boolean | JavaScript;
    /**
     * svgo option properties
     */
    SVG?: boolean | SVG;
    /**
     * Map to different file paths
     */
    Map?: boolean | _Map;
}
import type CSS from "./CSS.js";
import type HTML from "../Type/HTML.js";
import type Image from "./Image/Option.js";
import type JavaScript from "../Type/JavaScript.js";
import type _Map from "./Map.js";
import type SVG from "../Type/SVG.js";
import type Option from "files-pipe/Target/Interface/Option.js";
