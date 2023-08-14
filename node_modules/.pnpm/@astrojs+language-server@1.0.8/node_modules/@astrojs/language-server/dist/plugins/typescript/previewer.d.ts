/**
 * adopted from https://github.com/microsoft/vscode/blob/10722887b8629f90cc38ee7d90d54e8246dc895f/extensions/typescript-language-features/src/utils/previewer.ts
 */
import type ts from 'typescript';
export declare function getTagDocumentation(tag: ts.JSDocTagInfo, ts: typeof import('typescript/lib/tsserverlibrary')): string | undefined;
export declare function plain(parts: ts.SymbolDisplayPart[] | string, ts: typeof import('typescript/lib/tsserverlibrary')): string;
export declare function getMarkdownDocumentation(documentation: ts.SymbolDisplayPart[] | undefined, tags: ts.JSDocTagInfo[] | undefined, ts: typeof import('typescript/lib/tsserverlibrary')): string;
