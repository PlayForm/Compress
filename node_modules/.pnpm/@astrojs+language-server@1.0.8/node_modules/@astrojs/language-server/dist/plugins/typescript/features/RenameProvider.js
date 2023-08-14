"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameProviderImpl = void 0;
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
class RenameProviderImpl {
    constructor(languageServiceManager, configManager) {
        this.languageServiceManager = languageServiceManager;
        this.configManager = configManager;
        this.ts = languageServiceManager.docContext.ts;
    }
    async prepareRename(document, position) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const offset = tsDoc.offsetAt(tsDoc.getGeneratedPosition(position));
        // If our TSX isn't valid, we can't rename safely, so let's abort
        if (tsDoc.isInErrorState) {
            return null;
        }
        // TODO: Allow renaming of import paths
        // This requires a bit of work, because we need to create files for the new import paths
        const renameInfo = lang.getRenameInfo(tsDoc.filePath, offset, { allowRenameOfImportPath: false });
        if (!renameInfo.canRename) {
            return null;
        }
        return (0, documents_1.mapRangeToOriginal)(tsDoc, (0, utils_2.convertRange)(tsDoc, renameInfo.triggerSpan));
    }
    async rename(document, position, newName) {
        const { lang, tsDoc } = await this.languageServiceManager.getLSAndTSDoc(document);
        const offset = tsDoc.offsetAt(tsDoc.getGeneratedPosition(position));
        const { providePrefixAndSuffixTextForRename } = await this.configManager.getTSPreferences(document);
        let renames = lang.findRenameLocations(tsDoc.filePath, offset, false, false, providePrefixAndSuffixTextForRename);
        if (!renames) {
            return null;
        }
        const docs = new utils_3.SnapshotMap(this.languageServiceManager);
        docs.set(tsDoc.filePath, tsDoc);
        const mappedRenames = await Promise.all(renames.map(async (rename) => {
            const snapshot = await docs.retrieve(rename.fileName);
            return {
                ...rename,
                range: (0, documents_1.mapRangeToOriginal)(snapshot, (0, utils_2.convertRange)(snapshot, rename.textSpan)),
                newName,
            };
        }));
        return mappedRenames.reduce((acc, loc) => {
            const uri = (0, utils_1.pathToUrl)(loc.fileName);
            if (!acc.changes[uri]) {
                acc.changes[uri] = [];
            }
            acc.changes[uri].push({
                newText: (loc.prefixText || '') + (loc.newName || newName) + (loc.suffixText || ''),
                range: loc.range,
            });
            return acc;
        }, { changes: {} });
    }
}
exports.RenameProviderImpl = RenameProviderImpl;
