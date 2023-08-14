"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindReferencesProviderImpl = void 0;
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
class FindReferencesProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
    }
    async findReferences(document, position, context) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const fragmentPosition = tsDoc.getGeneratedPosition(position);
        const fragmentOffset = tsDoc.offsetAt(fragmentPosition);
        const offset = document.offsetAt(position);
        const node = document.html.findNodeAt(offset);
        let references;
        if (node.tag === 'script') {
            const { snapshot: scriptTagSnapshot, filePath: scriptFilePath, offset: scriptOffset, } = (0, utils_2.getScriptTagSnapshot)(tsDoc, document, node, position);
            references = lang.getReferencesAtPosition(scriptFilePath, scriptOffset);
            if (references) {
                references = references.map((ref) => {
                    const isInSameFile = ref.fileName === scriptFilePath;
                    ref.fileName = isInSameFile ? tsDoc.filePath : ref.fileName;
                    if (isInSameFile) {
                        ref.textSpan.start = (0, documents_1.mapScriptSpanStartToSnapshot)(ref.textSpan, scriptTagSnapshot, tsDoc);
                    }
                    return ref;
                });
            }
        }
        else {
            references = lang.getReferencesAtPosition(tsDoc.filePath, fragmentOffset);
        }
        if (!references) {
            return null;
        }
        const snapshots = new utils_3.SnapshotMap(this.languageServiceManager);
        snapshots.set(tsDoc.filePath, tsDoc);
        const result = await Promise.all(references.map(async (reference) => {
            if (!context.includeDeclaration) {
                return null;
            }
            const snapshot = await snapshots.retrieve(reference.fileName);
            const range = (0, documents_1.mapRangeToOriginal)(snapshot, (0, utils_2.convertRange)(snapshot, reference.textSpan));
            if (range.start.line >= 0 && range.end.line >= 0) {
                return vscode_languageserver_types_1.Location.create((0, utils_1.pathToUrl)(reference.fileName), range);
            }
        }));
        return result.filter(utils_1.isNotNullOrUndefined);
    }
}
exports.FindReferencesProviderImpl = FindReferencesProviderImpl;
