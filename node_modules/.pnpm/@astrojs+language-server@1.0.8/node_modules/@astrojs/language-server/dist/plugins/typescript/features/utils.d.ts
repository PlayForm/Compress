import type ts from 'typescript';
import type { Position } from 'vscode-languageserver';
import type { LanguageServiceManager } from '../LanguageServiceManager';
import type { DocumentSnapshot } from '../snapshots/DocumentSnapshot';
export declare function isPartOfImportStatement(text: string, position: Position): boolean;
export declare class SnapshotMap {
    private languageServiceManager;
    private map;
    constructor(languageServiceManager: LanguageServiceManager);
    set(fileName: string, snapshot: DocumentSnapshot): void;
    get(fileName: string): DocumentSnapshot | undefined;
    retrieve(fileName: string): Promise<DocumentSnapshot>;
}
export declare function findContainingNode<T extends ts.Node>(node: ts.Node, textSpan: ts.TextSpan, predicate: (node: ts.Node) => node is T): T | undefined;
