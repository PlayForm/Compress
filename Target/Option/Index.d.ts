import type { Option as _Option } from "files-pipe";
import type { Type } from "./CSS.js";
import type { Type as _Map } from "./Map.js";
export interface Type extends _Option {
    [key: string]: any;
    /**
     * csso option properties
     */
    CSS?: boolean | Type;
    /**
     * html-minifier-terser option properties
     */
    HTML?: boolean | Type;
    /**
     * terser option properties
     */
    JavaScript?: boolean | Type;
    /**
     * sharp option properties
     */
    Image?: boolean | Type;
    /**
     * svgo option properties
     */
    SVG?: boolean | Type;
    Map?: boolean | _Map;
}
declare const _default: Type;
export default _default;
