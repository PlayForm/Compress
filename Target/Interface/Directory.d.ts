import type { ParsedPath } from "path";
/**
 * @module Directory
 *
 */
export default interface Interface {
    (Path: string): Promise<ParsedPath["dir"]>;
}
