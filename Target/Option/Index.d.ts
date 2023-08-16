import type { Option as _Option } from "files-pipe";
import type { CSS } from "./CSS.js";
import type { HTML } from "./HTML.js";
import type { Image } from "./Image.js";
import type { JavaScript } from "./JavaScript.js";
import type { Map as _Map } from "./Map.js";
import type { SVG } from "./SVG.js";
export interface Option extends _Option {
    [key: string]: any;
    CSS?: boolean | CSS;
    HTML?: boolean | HTML;
    JavaScript?: boolean | JavaScript;
    Image?: boolean | Image;
    SVG?: boolean | SVG;
    Map?: boolean | _Map;
}
declare const _default: Option;
export default _default;
