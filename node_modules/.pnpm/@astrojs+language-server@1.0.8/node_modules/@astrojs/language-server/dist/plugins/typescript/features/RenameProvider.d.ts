import type { Position, Range, WorkspaceEdit } from 'vscode-languageserver-types';
import type { ConfigManager } from '../../../core/config';
import { AstroDocument } from '../../../core/documents';
import type { RenameProvider } from '../../interfaces';
import type { LanguageServiceManager } from '../LanguageServiceManager';
export declare class RenameProviderImpl implements RenameProvider {
    private languageServiceManager;
    private configManager;
    private ts;
    constructor(languageServiceManager: LanguageServiceManager, configManager: ConfigManager);
    prepareRename(document: AstroDocument, position: Position): Promise<Range | null>;
    rename(document: AstroDocument, position: Position, newName: string): Promise<WorkspaceEdit | null>;
}
