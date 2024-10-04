import type File from "@playform/pipe/Target/Interface/File.js";
import type { Sharp } from "sharp";
/**
 * @module Image
 *
 */
export default interface Interface extends Omit<File, "Buffer"> {
    Buffer: {
        [key: string]: any;
    } & Sharp;
}
