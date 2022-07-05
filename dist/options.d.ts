import CSS from "./options/css";
import HTML from "./options/html";
import IMG from "./options/img";
import JS from "./options/js";
import SVG from "./options/svg";
export default interface Options {
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
