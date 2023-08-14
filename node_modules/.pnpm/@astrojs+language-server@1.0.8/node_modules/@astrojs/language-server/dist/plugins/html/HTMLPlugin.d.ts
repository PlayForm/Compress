import { CompletionList, FoldingRange, Hover, LinkedEditingRanges, Position, Range, SymbolInformation, WorkspaceEdit } from 'vscode-languageserver';
import type { ConfigManager } from '../../core/config/ConfigManager';
import type { AstroDocument } from '../../core/documents/AstroDocument';
import type { Plugin } from '../interfaces';
export declare class HTMLPlugin implements Plugin {
    __name: string;
    private lang;
    private attributeOnlyLang;
    private componentLang;
    private styleScriptTemplate;
    private configManager;
    constructor(configManager: ConfigManager);
    doHover(document: AstroDocument, position: Position): Promise<Hover | null>;
    /**
     * Get HTML completions
     */
    getCompletions(document: AstroDocument, position: Position): Promise<CompletionList | null>;
    getFoldingRanges(document: AstroDocument): FoldingRange[] | null;
    getLinkedEditingRanges(document: AstroDocument, position: Position): LinkedEditingRanges | null;
    doTagComplete(document: AstroDocument, position: Position): Promise<string | null>;
    prepareRename(document: AstroDocument, position: Position): Range | null;
    rename(document: AstroDocument, position: Position, newName: string): WorkspaceEdit | null;
    getDocumentSymbols(document: AstroDocument): Promise<SymbolInformation[]>;
    /**
     * Get lang completions for style tags (ex: `<style lang="scss">`)
     */
    private getLangCompletions;
    /**
     * Returns true if rename happens at the tag name, not anywhere inbetween.
     */
    private isRenameAtTag;
    private featureEnabled;
}
