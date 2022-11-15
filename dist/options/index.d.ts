import type CSS from "./css.js";
import type HTML from "./html.js";
import type IMG from "./img.js";
import type JS from "./js.js";
import type SVG from "./svg.js";
export declare type filterFn = (file: string) => boolean;
export interface Options {
    [key: string]: any;
    path?: string | string[] | Set<string>;
    exclude?: string | RegExp | filterFn | string[] | RegExp[] | filterFn[] | Set<string> | Set<RegExp> | Set<filterFn>;
    css?: boolean | CSS;
    html?: boolean | HTML;
    js?: boolean | JS;
    img?: boolean | IMG;
    svg?: boolean | SVG;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
