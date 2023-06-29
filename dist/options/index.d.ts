import type { Options as OptionsBase } from "files-pipe/dist/options/index.js";
import defaultsCSS from "./css.js";
import defaultsHTML from "./html.js";
import defaultsIMG from "./img.js";
import defaultsJS from "./js.js";
import defaultsMAP from "./map.js";
import defaultsSVG from "./svg.js";
export interface Options extends OptionsBase {
    [key: string]: any;
    css?: boolean | typeof defaultsCSS;
    html?: boolean | typeof defaultsHTML;
    js?: boolean | typeof defaultsJS;
    img?: boolean | typeof defaultsIMG;
    svg?: boolean | typeof defaultsSVG;
    map?: boolean | typeof defaultsMAP;
}
declare const _default: Options;
export default _default;
