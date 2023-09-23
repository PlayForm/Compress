import type { File } from "files-pipe";
import type { Sharp } from "sharp";
import type { Type } from "../Option/Image.js";
export interface BufferSharp extends Sharp {
    [key: string]: any;
}
export interface Image extends Omit<File, "Buffer"> {
    Buffer: BufferSharp;
}
export declare const Show: {
    [key: string]: string;
};
declare const _default: (_Option: Type, On: Image) => Promise<any>;
export default _default;
