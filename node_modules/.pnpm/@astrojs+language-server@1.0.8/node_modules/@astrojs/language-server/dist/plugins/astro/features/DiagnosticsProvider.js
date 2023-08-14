"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticsProviderImpl = void 0;
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
class DiagnosticsProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
    }
    async getDiagnostics(document) {
        const { tsDoc } = (await this.languageServiceManager.getLSAndTSDoc(document));
        return tsDoc.compilerDiagnostics.map(this.compilerMessageToDiagnostic);
    }
    compilerMessageToDiagnostic(message) {
        return {
            message: message.text + '\n\n' + message.hint,
            range: vscode_languageserver_types_1.Range.create(message.location.line - 1, message.location.column - 1, message.location.line, message.location.length),
            code: message.code,
            severity: message.severity,
            source: 'astro',
        };
    }
}
exports.DiagnosticsProviderImpl = DiagnosticsProviderImpl;
