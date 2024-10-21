import type { Pattern } from "fast-glob";
/**
 * @module CLI
 *
 */
export default interface Interface {
    (File: Pattern[], Compress?: Pattern): Promise<void>;
}
