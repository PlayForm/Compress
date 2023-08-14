import type { MinifyOptions as Minify } from "terser";
export interface JavaScript extends Minify {
    [key: string]: any;
}
declare const _default: {
    ecma: 5;
    enclose: false;
    keep_classnames: false;
    keep_fnames: false;
    ie8: false;
    module: false;
    safari10: false;
    toplevel: false;
    format: {
        comments: false;
    };
};
export default _default;
