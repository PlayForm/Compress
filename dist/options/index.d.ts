import { CSS } from "./csso";
import { HTML } from "./html-minifier";
export interface Options {
    /**
     * Astro build path.
     * Default: "./dist/"
     */
    path?: string;
    /**
     * csso options.
     */
    css?: CSS;
    /**
     * html-minifier options.
     */
    html?: HTML;
}
export declare const defaultOptions: Options;
