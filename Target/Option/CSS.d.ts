import type { CompressOptions, MinifyOptions } from "csso";
export interface CSS extends MinifyOptions, CompressOptions {
    [key: string]: any;
}
declare const _default: {
    clone: false;
    comments: false;
    forceMediaMerge: true;
    restructure: false;
};
export default _default;
