/**
 * @module CSS
 *
 */
export default interface Type extends Omit<TransformOptions<CustomAtRules>, "filename" | "code"> {
    /**
     * Whether to enable minification
     *
     * @default Compress true
     * @default lightningcss false
     */
    minify?: boolean;
}
import type { CustomAtRules, TransformOptions } from "lightningcss";
