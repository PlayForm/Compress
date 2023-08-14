import { DiagnosticMessage } from '@astrojs/compiler/types';
import { EncodedSourceMap, TraceMap } from '@jridgewell/trace-mapping';
import type ts from 'typescript';
import { Position, TextDocumentContentChangeEvent } from 'vscode-languageserver';
import { AstroDocument, DocumentMapper, FragmentMapper, IdentityMapper, SourceMapDocumentMapper, TagInformation } from '../../../core/documents';
export interface DocumentSnapshot extends ts.IScriptSnapshot, DocumentMapper {
    version: number;
    filePath: string;
    scriptKind: ts.ScriptKind;
    positionAt(offset: number): Position;
    offsetAt(position: Position): number;
    /**
     * Convenience function for getText(0, getLength())
     */
    getFullText(): string;
}
/**
 * Snapshots used for Astro files
 */
export declare class AstroSnapshot implements DocumentSnapshot {
    readonly parent: AstroDocument;
    private readonly text;
    private readonly tsxMap;
    readonly scriptKind: ts.ScriptKind;
    readonly compilerDiagnostics: DiagnosticMessage[];
    private mapper?;
    private lineOffsets?;
    private url;
    scriptTagSnapshots: ScriptTagDocumentSnapshot[];
    version: number;
    constructor(parent: AstroDocument, text: string, tsxMap: EncodedSourceMap, scriptKind: ts.ScriptKind, compilerDiagnostics: DiagnosticMessage[]);
    get isInErrorState(): boolean;
    isInGenerated(pos: Position): boolean;
    getURL(): string;
    get filePath(): string;
    getText(start: number, end: number): string;
    getLength(): number;
    getFullText(): string;
    getChangeRange(): undefined;
    positionAt(offset: number): Position;
    offsetAt(position: Position): number;
    getOriginalPosition(pos: Position): Position;
    getGeneratedPosition(pos: Position): Position;
    private getLineOffsets;
    private getMapper;
}
/**
 * Snapshots used for script tags inside Astro files
 */
export declare class ScriptTagDocumentSnapshot extends FragmentMapper implements DocumentSnapshot {
    scriptTag: TagInformation;
    private readonly parent;
    filePath: string;
    readonly scriptKind: ts.ScriptKind;
    readonly version: number;
    private text;
    private lineOffsets?;
    constructor(scriptTag: TagInformation, parent: AstroDocument, filePath: string, scriptKind: ts.ScriptKind);
    positionAt(offset: number): Position;
    offsetAt(position: Position): number;
    getText(start: number, end: number): string;
    getLength(): number;
    getFullText(): string;
    getChangeRange(): undefined;
    private getLineOffsets;
}
/**
 * Snapshot used for anything that is not an Astro file
 * It's both used for .js(x)/.ts(x) files and .svelte/.vue files
 */
export declare class TypeScriptDocumentSnapshot extends IdentityMapper implements DocumentSnapshot {
    version: number;
    readonly filePath: string;
    private text;
    readonly supportPartialUpdate: boolean;
    scriptKind: ts.ScriptKind;
    private lineOffsets?;
    constructor(version: number, filePath: string, text: string, scriptKind: ts.ScriptKind, supportPartialUpdate: boolean);
    getText(start: number, end: number): string;
    getLength(): number;
    getFullText(): string;
    getChangeRange(): undefined;
    positionAt(offset: number): Position;
    offsetAt(position: Position): number;
    createFragment(): this;
    update(changes: TextDocumentContentChangeEvent[]): void;
    private getLineOffsets;
}
export declare class ConsumerDocumentMapper extends SourceMapDocumentMapper {
    private nrPrependesLines;
    constructor(traceMap: TraceMap, sourceUri: string, nrPrependesLines: number);
    getOriginalPosition(generatedPosition: Position): Position;
    getGeneratedPosition(originalPosition: Position): Position;
    isInGenerated(): boolean;
}
