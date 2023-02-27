import type { CSS } from "./css.js";
import type { HTML } from "./html.js";
import type { IMG } from "./img.js";
import type { JS } from "./js.js";
import type { MAP } from "./map.js";
import type { SVG } from "./svg.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/index.js";
export interface Options extends OptionsBase {
    [key: string]: any;
    css?: boolean | CSS;
    html?: boolean | HTML;
    js?: boolean | JS;
    img?: boolean | IMG;
    svg?: boolean | SVG;
    map?: boolean | MAP;
}
declare const _default: Options;
export default _default;
