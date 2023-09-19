import type { Option as _Option } from "files-pipe";
import type { CSS } from "./CSS.js";
import type { HTML } from "./HTML.js";
import type { JavaScript } from "./JavaScript.js";
import type { Map as _Map } from "./Map.js";
import type { SVG } from "./SVG.js";
export interface Option extends _Option {
    [key: string]: any;
    /**
     * csso option properties
     */
    CSS?: boolean | CSS;
    /**
     * html-minifier-terser option properties
     */
    HTML?: boolean | HTML;
    /**
     * terser option properties
     */
    JavaScript?: boolean | JavaScript;
    /**
     * svgo option properties
     */
    SVG?: boolean | SVG;
    Map?: boolean | _Map;
}
declare const _default: Option;
export default _default;
