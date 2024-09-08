/**
 * @module CSS
 *
 */
export default interface Interface extends Omit<TransformOptions<CustomAtRules>, "filename" | "code" | "unusedSymbols"> {
    /**
     * Whether to enable minification
     *
     * @default Compress true
     * @default lightningcss false
     */
    minify?: boolean;
    /**
     * Whether to remove unused selectors or keywords.
     *
     * @default Compress false
     * @default lightningcss undefined
     */
    unusedSymbols?: string[] | boolean;
}
import type { CustomAtRules, TransformOptions } from "lightningcss";
