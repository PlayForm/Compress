/// <reference types="node" />
/**
 * @module Directory
 *
 */
export default interface Interface {
    (Path: string): Promise<ParsedPath["dir"]>;
}
import type { ParsedPath } from "path";
