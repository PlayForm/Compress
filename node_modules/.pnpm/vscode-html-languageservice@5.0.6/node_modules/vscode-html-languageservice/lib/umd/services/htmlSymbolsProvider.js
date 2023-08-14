/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../htmlLanguageTypes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findDocumentSymbols = void 0;
    const htmlLanguageTypes_1 = require("../htmlLanguageTypes");
    function findDocumentSymbols(document, htmlDocument) {
        const symbols = [];
        htmlDocument.roots.forEach(node => {
            provideFileSymbolsInternal(document, node, '', symbols);
        });
        return symbols;
    }
    exports.findDocumentSymbols = findDocumentSymbols;
    function provideFileSymbolsInternal(document, node, container, symbols) {
        const name = nodeToName(node);
        const location = htmlLanguageTypes_1.Location.create(document.uri, htmlLanguageTypes_1.Range.create(document.positionAt(node.start), document.positionAt(node.end)));
        const symbol = {
            name: name,
            location: location,
            containerName: container,
            kind: htmlLanguageTypes_1.SymbolKind.Field
        };
        symbols.push(symbol);
        node.children.forEach(child => {
            provideFileSymbolsInternal(document, child, name, symbols);
        });
    }
    function nodeToName(node) {
        let name = node.tag;
        if (node.attributes) {
            const id = node.attributes['id'];
            const classes = node.attributes['class'];
            if (id) {
                name += `#${id.replace(/[\"\']/g, '')}`;
            }
            if (classes) {
                name += classes.replace(/[\"\']/g, '').split(/\s+/).map(className => `.${className}`).join('');
            }
        }
        return name || '?';
    }
});
