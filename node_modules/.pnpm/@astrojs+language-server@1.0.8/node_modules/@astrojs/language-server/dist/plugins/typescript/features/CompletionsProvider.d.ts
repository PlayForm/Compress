import type ts from 'typescript';
import { CancellationToken, CompletionContext, Position, TextDocumentIdentifier, TextEdit } from 'vscode-languageserver';
import type { ConfigManager } from '../../../core/config';
import { AstroDocument } from '../../../core/documents';
import type { AppCompletionItem, AppCompletionList, CompletionsProvider } from '../../interfaces';
import type { LanguageServiceManager } from '../LanguageServiceManager';
import type { DocumentSnapshot } from '../snapshots/DocumentSnapshot';
export interface CompletionItemData extends TextDocumentIdentifier {
    filePath: string;
    offset: number;
    scriptTagIndex: number | undefined;
    originalItem: ts.CompletionEntry;
}
export declare class CompletionsProviderImpl implements CompletionsProvider<CompletionItemData> {
    private languageServiceManager;
    private configManager;
    private ts;
    constructor(languageServiceManager: LanguageServiceManager, configManager: ConfigManager);
    private readonly validTriggerCharacters;
    private isValidTriggerCharacter;
    private lastCompletion?;
    getCompletions(document: AstroDocument, position: Position, completionContext?: CompletionContext, cancellationToken?: CancellationToken): Promise<AppCompletionList<CompletionItemData> | null>;
    resolveCompletion(document: AstroDocument, item: AppCompletionItem<CompletionItemData>, cancellationToken?: CancellationToken): Promise<AppCompletionItem<CompletionItemData>>;
    private toCompletionItem;
    private getCompletionDocument;
    private canReuseLastCompletion;
    private getExistingImports;
    private isAstroComponentImport;
    private isValidCompletion;
}
export declare function codeActionChangeToTextEdit(document: AstroDocument, snapshot: DocumentSnapshot, isInsideScriptTag: boolean, change: ts.TextChange, ts: typeof import('typescript/lib/tsserverlibrary')): TextEdit;
