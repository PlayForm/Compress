"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlayHintsProviderImpl = void 0;
const vscode_languageserver_1 = require("vscode-languageserver");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
class InlayHintsProviderImpl {
    constructor(languageServiceManager, configManager) {
        this.languageServiceManager = languageServiceManager;
        this.configManager = configManager;
        this.ts = languageServiceManager.docContext.ts;
    }
    async getInlayHints(document, range) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const start = tsDoc.offsetAt(tsDoc.getGeneratedPosition(range.start));
        const end = tsDoc.offsetAt(tsDoc.getGeneratedPosition(range.end));
        const tsPreferences = await this.configManager.getTSPreferences(document);
        const inlayHints = lang.provideInlayHints(tsDoc.filePath, { start, length: end - start }, tsPreferences);
        return inlayHints.map((hint) => {
            const result = vscode_languageserver_1.InlayHint.create(tsDoc.getOriginalPosition(tsDoc.positionAt(hint.position)), hint.text, hint.kind === this.ts.InlayHintKind.Type
                ? vscode_languageserver_types_1.InlayHintKind.Type
                : hint.kind === this.ts.InlayHintKind.Parameter
                    ? vscode_languageserver_types_1.InlayHintKind.Parameter
                    : undefined);
            result.paddingLeft = hint.whitespaceBefore;
            result.paddingRight = hint.whitespaceAfter;
            return result;
        });
    }
}
exports.InlayHintsProviderImpl = InlayHintsProviderImpl;
