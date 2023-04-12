import type { CSS } from "./css.js";
import type { HTML } from "./html.js";
import type { JS } from "./js.js";
import type { MAP } from "./map.js";
import type { SVG } from "./svg.js";
import type { Options as OptionsBase } from "files-pipe/options/index.js";
export interface Options extends OptionsBase {
    [key: string]: unknown;
    css?: boolean | CSS;
    html?: boolean | HTML;
    js?: boolean | JS;
    svg?: boolean | SVG;
    map?: boolean | MAP;
}
declare const _default: Options;
export default _default;
