import type CSS from "./css";
import type HTML from "./html";
import type IMG from "./img";
import type JS from "./js";
import type SVG from "./svg";
export interface Options {
    [key: string]: any;
    /**
     * Astro build path.
     * @default "./dist/"
     */
    path?: string;
    /**
     * [csso] options.
     */
    css?: boolean | CSS;
    /**
     * [html-minifier-terser] options.
     */
    html?: boolean | HTML;
    /**
     * [terser] options.
     */
    js?: boolean | JS;
    /**
     * [sharp] options.
     */
    img?: boolean | IMG;
    /**
     * [svgo] options.
     */
    svg?: boolean | SVG;
    /**
     * Logger level.
     * Default: 2
     */
    logger?: number;
}
declare const _default: Options;
export default _default;
