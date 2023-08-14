"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationsProviderImpl = void 0;
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
class ImplementationsProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
    }
    async getImplementation(document, position) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const fragmentPosition = tsDoc.getGeneratedPosition(position);
        const fragmentOffset = tsDoc.offsetAt(fragmentPosition);
        const html = document.html;
        const offset = document.offsetAt(position);
        const node = document.html.findNodeAt(offset);
        let implementations;
        if (node.tag === 'script') {
            const { snapshot: scriptTagSnapshot, filePath: scriptFilePath, offset: scriptOffset, } = (0, utils_2.getScriptTagSnapshot)(tsDoc, document, node, position);
            implementations = lang.getImplementationAtPosition(scriptFilePath, scriptOffset);
            if (implementations) {
                implementations = implementations.map((impl) => {
                    const isInSameFile = impl.fileName === scriptFilePath;
                    impl.fileName = isInSameFile ? tsDoc.filePath : impl.fileName;
                    if (isInSameFile) {
                        impl.textSpan.start = (0, documents_1.mapScriptSpanStartToSnapshot)(impl.textSpan, scriptTagSnapshot, tsDoc);
                    }
                    return impl;
                });
            }
        }
        else {
            implementations = lang.getImplementationAtPosition(tsDoc.filePath, fragmentOffset);
        }
        const snapshots = new utils_3.SnapshotMap(this.languageServiceManager);
        snapshots.set(tsDoc.filePath, tsDoc);
        if (!implementations) {
            return null;
        }
        const result = await Promise.all(implementations.map(async (implementation) => {
            const snapshot = await snapshots.retrieve(implementation.fileName);
            const range = (0, documents_1.mapRangeToOriginal)(snapshot, (0, utils_2.convertRange)(snapshot, implementation.textSpan));
            if (range.start.line >= 0 && range.end.line >= 0) {
                return vscode_languageserver_types_1.Location.create((0, utils_1.pathToUrl)(implementation.fileName), range);
            }
        }));
        return result.filter(utils_1.isNotNullOrUndefined);
    }
}
exports.ImplementationsProviderImpl = ImplementationsProviderImpl;
