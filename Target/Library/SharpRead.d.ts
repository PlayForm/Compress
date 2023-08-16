import type { File } from "files-pipe";
import type { Sharp } from "sharp";
import type { Image } from "../Option/Image.js";
export interface BufferSharp extends Sharp {
    [key: string]: any;
}
export interface OnSharp extends Omit<File, "Buffer"> {
    Buffer: BufferSharp;
}
declare const _default: (_Option: Image, On: OnSharp) => Promise<any>;
export default _default;
