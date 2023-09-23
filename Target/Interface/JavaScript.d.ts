import type { MinifyOptions as Minify } from "terser";
export interface Type extends Minify {
    [key: string]: any;
}
