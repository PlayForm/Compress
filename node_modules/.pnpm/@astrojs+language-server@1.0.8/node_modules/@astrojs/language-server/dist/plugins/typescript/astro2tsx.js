"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astro2tsx = void 0;
const sync_1 = require("@astrojs/compiler/sync");
function astro2tsx(content, fileName) {
    try {
        const tsx = (0, sync_1.convertToTSX)(content, { filename: fileName });
        return tsx;
    }
    catch (e) {
        console.error(`There was an error transforming ${fileName} to TSX. An empty file will be returned instead. Please create an issue: https://github.com/withastro/language-tools/issues\nError: ${e}.`);
        return {
            code: '',
            map: {
                file: fileName,
                sources: [],
                sourcesContent: [],
                names: [],
                mappings: '',
                version: 0,
            },
            diagnostics: [],
        };
    }
}
exports.astro2tsx = astro2tsx;
