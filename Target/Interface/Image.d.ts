import type { File } from "files-pipe";
import type { Sharp } from "sharp";
export interface Type extends Omit<File, "Buffer"> {
    Buffer: {
        [key: string]: any;
    } & Sharp;
}
