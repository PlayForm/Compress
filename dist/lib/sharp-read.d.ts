import type { optionExecutionsFile } from "files-pipe/dist/options/index.js";
import type { Sharp } from "sharp";
import type { IMG } from "../options/img.js";
export interface sharpBuffer extends Sharp {
    [key: string]: any;
}
export interface ongoingSharp extends Omit<optionExecutionsFile, "buffer"> {
    buffer: sharpBuffer;
}
declare const _default: (options: IMG, ongoing: ongoingSharp) => Promise<any>;
export default _default;
