import type { optionExecutionsFile } from "files-pipe/dist/options/Index.js";
import type { Sharp } from "sharp";
import type { IMG } from "../options/IMG.js";
export interface sharpBuffer extends Sharp {
    [key: string]: any;
}
export interface ongoingSharp extends Omit<optionExecutionsFile, "buffer"> {
    buffer: sharpBuffer;
}
declare const _default: (options: IMG, ongoing: ongoingSharp) => Promise<any>;
export default _default;
