/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Location, Range, SymbolKind } from '../htmlLanguageTypes';
export function findDocumentSymbols(document, htmlDocument) {
    const symbols = [];
    htmlDocument.roots.forEach(node => {
        provideFileSymbolsInternal(document, node, '', symbols);
    });
    return symbols;
}
function provideFileSymbolsInternal(document, node, container, symbols) {
    const name = nodeToName(node);
    const location = Location.create(document.uri, Range.create(document.positionAt(node.start), document.positionAt(node.end)));
    const symbol = {
        name: name,
        location: location,
        containerName: container,
        kind: SymbolKind.Field
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
