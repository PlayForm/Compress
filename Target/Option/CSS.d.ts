import type { CompressOptions as Compress, MinifyOptions as Minify } from "csso";
export interface CSS extends Minify, Compress {
    [key: string]: any;
}
declare const _default: {
    clone: false;
    comments: false;
    forceMediaMerge: true;
    restructure: false;
};
export default _default;
