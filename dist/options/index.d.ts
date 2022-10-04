import type CSS from "./css";
import type HTML from "./html";
import type JS from "./js";
import type SHARP from "./sharp";
import type SVG from "./svg";
export interface Options {
    [key: string]: any;
    path?: string;
    css?: boolean | CSS;
    html?: boolean | HTML;
    js?: boolean | JS;
    img?: boolean | SHARP;
    svg?: boolean | SVG;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
