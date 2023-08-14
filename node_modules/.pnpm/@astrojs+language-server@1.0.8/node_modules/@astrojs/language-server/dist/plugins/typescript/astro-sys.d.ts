import type ts from 'typescript';
import type { DocumentSnapshot } from './snapshots/DocumentSnapshot';
/**
 * This should only be accessed by TS Astro module resolution.
 */
export declare function createAstroSys(getSnapshot: (fileName: string) => DocumentSnapshot, ts: typeof import('typescript/lib/tsserverlibrary')): ts.System & {
    deleteFromCache: (path: string) => void;
};
