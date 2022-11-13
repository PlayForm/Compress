import type CSS from "./css";
import type HTML from "./html";
import type IMG from "./img";
import type JS from "./js";
import type SVG from "./svg";
export declare type filterFunction = (file: string) => boolean;
export interface Options {
    [key: string]: any;
    path?: string | [string];
    exclude?: string | RegExp | filterFunction | [string] | [RegExp] | [filterFunction];
    css?: boolean | CSS;
    html?: boolean | HTML;
    js?: boolean | JS;
    img?: boolean | IMG;
    svg?: boolean | SVG;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
