import type { AstroMarkdownOptions, MarkdownRenderingOptions, MarkdownRenderingResult } from './types';
export { rehypeHeadingIds } from './rehype-collect-headings.js';
export { remarkCollectImages } from './remark-collect-images.js';
export * from './types.js';
export declare const markdownConfigDefaults: Omit<Required<AstroMarkdownOptions>, 'drafts'>;
/** Shared utility for rendering markdown */
export declare function renderMarkdown(content: string, opts: MarkdownRenderingOptions): Promise<MarkdownRenderingResult>;
