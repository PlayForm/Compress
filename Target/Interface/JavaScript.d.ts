import type { MinifyOptions as Minify } from "terser";
export default interface Type extends Minify {
    [key: string]: any;
}
