import type { ParsedPath } from "node:path";
/**
 * @module Directory
 *
 */
export default interface Interface {
    (Path: string): Promise<ParsedPath["dir"]>;
}
