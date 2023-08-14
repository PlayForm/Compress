import type { AstroConfig } from '../@types/astro';
/**
 * Converts the first dot in `import.meta.env` to its Unicode escape sequence,
 * which prevents Vite from replacing strings like `import.meta.env.SITE`
 * in our JS representation of modules like Markdown
 */
export declare function escapeViteEnvReferences(code: string): string;
export declare function getFileInfo(id: string, config: AstroConfig): {
    fileId: string;
    fileUrl: string | undefined;
};
/**
 * Normalizes different file names like:
 *
 * - /@fs/home/user/project/src/pages/index.astro
 * - /src/pages/index.astro
 *
 * as absolute file paths with forward slashes.
 */
export declare function normalizeFilename(filename: string, root: URL): string;
