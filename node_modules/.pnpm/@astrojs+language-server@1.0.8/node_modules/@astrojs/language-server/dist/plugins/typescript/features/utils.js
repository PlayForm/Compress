"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findContainingNode = exports.SnapshotMap = exports.isPartOfImportStatement = void 0;
const documents_1 = require("../../../core/documents");
function isPartOfImportStatement(text, position) {
    const line = (0, documents_1.getLineAtPosition)(position, text);
    return /\s*from\s+["'][^"']*/.test(line.slice(0, position.character));
}
exports.isPartOfImportStatement = isPartOfImportStatement;
class SnapshotMap {
    constructor(languageServiceManager) {
        this.languageServiceManager = languageServiceManager;
        this.map = new Map();
    }
    set(fileName, snapshot) {
        this.map.set(fileName, snapshot);
    }
    get(fileName) {
        return this.map.get(fileName);
    }
    async retrieve(fileName) {
        let snapshot = this.get(fileName);
        if (!snapshot) {
            const snap = await this.languageServiceManager.getSnapshot(fileName);
            this.set(fileName, snap);
            snapshot = snap;
        }
        return snapshot;
    }
}
exports.SnapshotMap = SnapshotMap;
function findContainingNode(node, textSpan, predicate) {
    const children = node.getChildren();
    const end = textSpan.start + textSpan.length;
    for (const child of children) {
        if (!(child.getStart() <= textSpan.start && child.getEnd() >= end)) {
            continue;
        }
        if (predicate(child)) {
            return child;
        }
        const foundInChildren = findContainingNode(child, textSpan, predicate);
        if (foundInChildren) {
            return foundInChildren;
        }
    }
}
exports.findContainingNode = findContainingNode;
