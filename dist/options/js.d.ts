import type { MinifyOptions } from "terser";
export interface JS extends MinifyOptions {
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
};
export default _default;
