"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticTokensProviderImpl = void 0;
const vscode_languageserver_1 = require("vscode-languageserver");
const documents_1 = require("../../../core/documents");
class SemanticTokensProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
        this.ts = languageServiceManager.docContext.ts;
    }
    async getSemanticTokens(document, range, cancellationToken) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        if (cancellationToken?.isCancellationRequested) {
            return null;
        }
        const start = range ? tsDoc.offsetAt(tsDoc.getGeneratedPosition(range.start)) : 0;
        const { spans } = lang.getEncodedSemanticClassifications(tsDoc.filePath, {
            start,
            length: range
                ? tsDoc.offsetAt(tsDoc.getGeneratedPosition(range.end)) - start
                : // We don't want tokens for things added by astro2tsx
                    tsDoc.getFullText().lastIndexOf('export default function ') || tsDoc.getLength(),
        }, this.ts.SemanticClassificationFormat.TwentyTwenty);
        const tokens = [];
        let i = 0;
        while (i < spans.length) {
            const offset = spans[i++];
            const generatedLength = spans[i++];
            const classification = spans[i++];
            const originalPosition = this.mapToOrigin(document, tsDoc, offset, generatedLength);
            if (!originalPosition) {
                continue;
            }
            const [line, character, length] = originalPosition;
            const classificationType = this.getTokenTypeFromClassification(classification);
            if (classificationType < 0) {
                continue;
            }
            const modifier = this.getTokenModifierFromClassification(classification);
            tokens.push([line, character, length, classificationType, modifier]);
        }
        const sorted = tokens.sort((a, b) => {
            const [lineA, charA] = a;
            const [lineB, charB] = b;
            return lineA - lineB || charA - charB;
        });
        const builder = new vscode_languageserver_1.SemanticTokensBuilder();
        sorted.forEach((tokenData) => builder.push(...tokenData));
        const build = builder.build();
        return build;
    }
    mapToOrigin(document, snapshot, generatedOffset, generatedLength) {
        const range = {
            start: snapshot.positionAt(generatedOffset),
            end: snapshot.positionAt(generatedOffset + generatedLength),
        };
        const { start: startPosition, end: endPosition } = (0, documents_1.mapRangeToOriginal)(snapshot, range);
        if (startPosition.line < 0 || endPosition.line < 0) {
            return;
        }
        const startOffset = document.offsetAt(startPosition);
        const endOffset = document.offsetAt(endPosition);
        return [startPosition.line, startPosition.character, endOffset - startOffset, startOffset];
    }
    /**
     *  TSClassification = (TokenType + 1) << TokenEncodingConsts.typeOffset + TokenModifier
     */
    getTokenTypeFromClassification(tsClassification) {
        return (tsClassification >> 8 /* TokenEncodingConsts.typeOffset */) - 1;
    }
    getTokenModifierFromClassification(tsClassification) {
        return tsClassification & 255 /* TokenEncodingConsts.modifierMask */;
    }
}
exports.SemanticTokensProviderImpl = SemanticTokensProviderImpl;
