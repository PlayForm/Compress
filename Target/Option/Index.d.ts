import type { Options as _Options } from "files-pipe/Target/Option/Index.js";
import type { CSS } from "./CSS.js";
import type { HTML } from "./HTML.js";
import type { Image } from "./Image.js";
import type { JavaScript } from "./JavaScript.js";
import type { MAP } from "./Map.js";
import type { SVG } from "./SVG.js";
export interface Options extends _Options {
    [key: string]: any;
    CSS?: boolean | CSS;
    HTML?: boolean | HTML;
    JavaScript?: boolean | JavaScript;
    Image?: boolean | Image;
    SVG?: boolean | SVG;
    Map?: boolean | MAP;
}
declare const _default: Options;
export default _default;
