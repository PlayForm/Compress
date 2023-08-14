import { Diagnostic } from 'vscode-languageserver-types';
import { AstroDocument } from '../../../core/documents';
import { DiagnosticsProvider } from '../../interfaces';
import { LanguageServiceManager } from '../../typescript/LanguageServiceManager';
export declare class DiagnosticsProviderImpl implements DiagnosticsProvider {
    private languageServiceManager;
    constructor(languageServiceManager: LanguageServiceManager);
    getDiagnostics(document: AstroDocument): Promise<Diagnostic[]>;
    private compilerMessageToDiagnostic;
}
