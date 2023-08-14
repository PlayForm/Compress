"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDefinitionsProviderImpl = void 0;
const vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
class TypeDefinitionsProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
    }
    async getTypeDefinitions(document, position) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const fragmentPosition = tsDoc.getGeneratedPosition(position);
        const fragmentOffset = tsDoc.offsetAt(fragmentPosition);
        const html = document.html;
        const offset = document.offsetAt(position);
        const node = html.findNodeAt(offset);
        let typeDefs;
        if (node.tag === 'script') {
            const { snapshot: scriptTagSnapshot, filePath: scriptFilePath, offset: scriptOffset, } = (0, utils_2.getScriptTagSnapshot)(tsDoc, document, node, position);
            typeDefs = lang.getTypeDefinitionAtPosition(scriptFilePath, scriptOffset);
            if (typeDefs) {
                typeDefs = typeDefs.map((def) => {
                    const isInSameFile = def.fileName === scriptFilePath;
                    def.fileName = isInSameFile ? tsDoc.filePath : def.fileName;
                    if (isInSameFile) {
                        def.textSpan.start = (0, documents_1.mapScriptSpanStartToSnapshot)(def.textSpan, scriptTagSnapshot, tsDoc);
                    }
                    return def;
                });
            }
        }
        else {
            typeDefs = lang.getTypeDefinitionAtPosition(tsDoc.filePath, fragmentOffset);
        }
        const snapshots = new utils_3.SnapshotMap(this.languageServiceManager);
        snapshots.set(tsDoc.filePath, tsDoc);
        if (!typeDefs) {
            return [];
        }
        const result = await Promise.all(typeDefs.map(async (typeDef) => {
            const snapshot = await snapshots.retrieve(typeDef.fileName);
            const fileName = (0, utils_2.ensureRealFilePath)(typeDef.fileName);
            const range = (0, documents_1.mapRangeToOriginal)(snapshot, (0, utils_2.convertRange)(snapshot, typeDef.textSpan));
            if (range.start.line >= 0 && range.end.line >= 0) {
                return vscode_languageserver_protocol_1.Location.create((0, utils_1.pathToUrl)(fileName), range);
            }
        }));
        return result.filter(utils_1.isNotNullOrUndefined);
    }
}
exports.TypeDefinitionsProviderImpl = TypeDefinitionsProviderImpl;
