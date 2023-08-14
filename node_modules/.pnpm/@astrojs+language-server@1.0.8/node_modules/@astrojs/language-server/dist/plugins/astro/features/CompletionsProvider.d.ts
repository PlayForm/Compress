import { CompletionContext, Position } from 'vscode-languageserver';
import type { AstroDocument } from '../../../core/documents';
import type { AppCompletionList, CompletionsProvider } from '../../interfaces';
import type { LanguageServiceManager } from '../../typescript/LanguageServiceManager';
export declare class CompletionsProviderImpl implements CompletionsProvider {
    private readonly languageServiceManager;
    private readonly ts;
    private lastCompletion;
    directivesHTMLLang: import("vscode-html-languageservice").LanguageService;
    constructor(languageServiceManager: LanguageServiceManager);
    getCompletions(document: AstroDocument, position: Position, completionContext?: CompletionContext): Promise<AppCompletionList | null>;
    private getComponentScriptCompletion;
    private getPropCompletionsAndFilePath;
    private getImportedSymbol;
    private getPropType;
    private getCompletionItemForProperty;
}
