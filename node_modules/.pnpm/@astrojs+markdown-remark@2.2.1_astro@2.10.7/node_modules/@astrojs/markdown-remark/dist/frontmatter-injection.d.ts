import type { VFile, VFileData as Data } from 'vfile';
import type { MarkdownAstroData } from './types.js';
export declare class InvalidAstroDataError extends TypeError {
}
export declare function safelyGetAstroData(vfileData: Data): MarkdownAstroData | InvalidAstroDataError;
export declare function toRemarkInitializeAstroData({ userFrontmatter, }: {
    userFrontmatter: Record<string, any>;
}): () => (tree: any, vfile: VFile) => void;
