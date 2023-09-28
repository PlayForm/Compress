import type { MinifyOptions } from "terser";
export default interface Type extends MinifyOptions {
    [key: string]: any;
}
