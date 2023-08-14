"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionsProviderImpl = void 0;
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
class DefinitionsProviderImpl {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
    }
    async getDefinitions(document, position) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const fragmentPosition = tsDoc.getGeneratedPosition(position);
        const fragmentOffset = tsDoc.offsetAt(fragmentPosition);
        let defs;
        const html = document.html;
        const offset = document.offsetAt(position);
        const node = html.findNodeAt(offset);
        if (node.tag === 'script') {
            const { snapshot: scriptTagSnapshot, filePath: scriptFilePath, offset: scriptOffset, } = (0, utils_2.getScriptTagSnapshot)(tsDoc, document, node, position);
            defs = lang.getDefinitionAndBoundSpan(scriptFilePath, scriptOffset);
            if (defs) {
                defs.definitions = defs.definitions?.map((def) => {
                    const isInSameFile = def.fileName === scriptFilePath;
                    def.fileName = isInSameFile ? tsDoc.filePath : def.fileName;
                    if (isInSameFile) {
                        def.textSpan.start = (0, documents_1.mapScriptSpanStartToSnapshot)(def.textSpan, scriptTagSnapshot, tsDoc);
                    }
                    return def;
                });
                defs.textSpan.start = (0, documents_1.mapScriptSpanStartToSnapshot)(defs.textSpan, scriptTagSnapshot, tsDoc);
            }
        }
        else {
            defs = lang.getDefinitionAndBoundSpan(tsDoc.filePath, fragmentOffset);
        }
        if (!defs || !defs.definitions) {
            return [];
        }
        const snapshots = new utils_3.SnapshotMap(this.languageServiceManager);
        snapshots.set(tsDoc.filePath, tsDoc);
        const result = await Promise.all(defs.definitions.map(async (def) => {
            const snapshot = await snapshots.retrieve(def.fileName);
            const fileName = (0, utils_2.ensureRealFilePath)(def.fileName);
            // For Astro, Svelte and Vue, the position is wrongly mapped to the end of the file due to the TSX output
            // So we'll instead redirect to the beginning of the file
            const isFramework = ((0, utils_2.isFrameworkFilePath)(def.fileName) || (0, utils_2.isAstroFilePath)(def.fileName)) && tsDoc.filePath !== def.fileName;
            const targetRange = isFramework
                ? (0, utils_2.convertRange)(document, { start: 0, length: 0 })
                : (0, utils_2.convertToLocationRange)(snapshot, def.textSpan);
            return vscode_languageserver_types_1.LocationLink.create((0, utils_1.pathToUrl)(fileName), targetRange, targetRange, (0, utils_2.convertToLocationRange)(tsDoc, defs.textSpan));
        }));
        return result.filter(utils_1.isNotNullOrUndefined);
    }
}
exports.DefinitionsProviderImpl = DefinitionsProviderImpl;
