"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerDocumentMapper = exports.TypeScriptDocumentSnapshot = exports.ScriptTagDocumentSnapshot = exports.AstroSnapshot = void 0;
const trace_mapping_1 = require("@jridgewell/trace-mapping");
const vscode_languageserver_1 = require("vscode-languageserver");
const documents_1 = require("../../../core/documents");
const utils_1 = require("../../../utils");
/**
 * Snapshots used for Astro files
 */
class AstroSnapshot {
    constructor(parent, text, tsxMap, scriptKind, compilerDiagnostics) {
        this.parent = parent;
        this.text = text;
        this.tsxMap = tsxMap;
        this.scriptKind = scriptKind;
        this.compilerDiagnostics = compilerDiagnostics;
        this.url = (0, utils_1.pathToUrl)(this.filePath);
        this.scriptTagSnapshots = [];
        this.version = this.parent.version;
    }
    get isInErrorState() {
        return this.compilerDiagnostics.filter((diag) => diag.severity === vscode_languageserver_1.DiagnosticSeverity.Error).length > 0;
    }
    isInGenerated(pos) {
        throw new Error('Method not implemented.');
    }
    getURL() {
        return this.url;
    }
    get filePath() {
        return this.parent.getFilePath() || '';
    }
    getText(start, end) {
        return this.text.substring(start, end);
    }
    getLength() {
        return this.text.length;
    }
    getFullText() {
        return this.text;
    }
    getChangeRange() {
        return undefined;
    }
    positionAt(offset) {
        return (0, documents_1.positionAt)(offset, this.text, this.getLineOffsets());
    }
    offsetAt(position) {
        return (0, documents_1.offsetAt)(position, this.text, this.getLineOffsets());
    }
    getOriginalPosition(pos) {
        return this.getMapper().getOriginalPosition(pos);
    }
    getGeneratedPosition(pos) {
        return this.getMapper().getGeneratedPosition(pos);
    }
    getLineOffsets() {
        if (!this.lineOffsets) {
            this.lineOffsets = (0, documents_1.getLineOffsets)(this.text);
        }
        return this.lineOffsets;
    }
    getMapper() {
        if (!this.mapper) {
            this.mapper = new ConsumerDocumentMapper(new trace_mapping_1.TraceMap(this.tsxMap), this.url, 0);
        }
        return this.mapper;
    }
}
exports.AstroSnapshot = AstroSnapshot;
/**
 * Snapshots used for script tags inside Astro files
 */
class ScriptTagDocumentSnapshot extends documents_1.FragmentMapper {
    constructor(scriptTag, parent, filePath, scriptKind) {
        super(parent.getText(), scriptTag, filePath);
        this.scriptTag = scriptTag;
        this.parent = parent;
        this.filePath = filePath;
        this.scriptKind = scriptKind;
        this.version = this.parent.version;
        this.text = this.parent.getText().slice(this.scriptTag.start, this.scriptTag.end) + '\nexport {}';
    }
    positionAt(offset) {
        return (0, documents_1.positionAt)(offset, this.text, this.getLineOffsets());
    }
    offsetAt(position) {
        return (0, documents_1.offsetAt)(position, this.text, this.getLineOffsets());
    }
    getText(start, end) {
        return this.text.substring(start, end);
    }
    getLength() {
        return this.text.length;
    }
    getFullText() {
        return this.text;
    }
    getChangeRange() {
        return undefined;
    }
    getLineOffsets() {
        if (!this.lineOffsets) {
            this.lineOffsets = (0, documents_1.getLineOffsets)(this.text);
        }
        return this.lineOffsets;
    }
}
exports.ScriptTagDocumentSnapshot = ScriptTagDocumentSnapshot;
/**
 * Snapshot used for anything that is not an Astro file
 * It's both used for .js(x)/.ts(x) files and .svelte/.vue files
 */
class TypeScriptDocumentSnapshot extends documents_1.IdentityMapper {
    constructor(version, filePath, text, scriptKind, supportPartialUpdate) {
        super((0, utils_1.pathToUrl)(filePath));
        this.version = version;
        this.filePath = filePath;
        this.text = text;
        this.supportPartialUpdate = supportPartialUpdate;
        this.scriptKind = scriptKind;
    }
    getText(start, end) {
        return this.text.substring(start, end);
    }
    getLength() {
        return this.text.length;
    }
    getFullText() {
        return this.text;
    }
    getChangeRange() {
        return undefined;
    }
    positionAt(offset) {
        return (0, documents_1.positionAt)(offset, this.text, this.getLineOffsets());
    }
    offsetAt(position) {
        return (0, documents_1.offsetAt)(position, this.text, this.getLineOffsets());
    }
    createFragment() {
        return this;
    }
    update(changes) {
        for (const change of changes) {
            let start = 0;
            let end = 0;
            if ('range' in change) {
                start = this.offsetAt(change.range.start);
                end = this.offsetAt(change.range.end);
            }
            else {
                end = this.getLength();
            }
            this.text = this.text.slice(0, start) + change.text + this.text.slice(end);
        }
        this.version++;
        this.lineOffsets = undefined;
    }
    getLineOffsets() {
        if (!this.lineOffsets) {
            this.lineOffsets = (0, documents_1.getLineOffsets)(this.text);
        }
        return this.lineOffsets;
    }
}
exports.TypeScriptDocumentSnapshot = TypeScriptDocumentSnapshot;
class ConsumerDocumentMapper extends documents_1.SourceMapDocumentMapper {
    constructor(traceMap, sourceUri, nrPrependesLines) {
        super(traceMap, sourceUri);
        this.nrPrependesLines = nrPrependesLines;
    }
    getOriginalPosition(generatedPosition) {
        return super.getOriginalPosition(vscode_languageserver_1.Position.create(generatedPosition.line - this.nrPrependesLines, generatedPosition.character));
    }
    getGeneratedPosition(originalPosition) {
        const result = super.getGeneratedPosition(originalPosition);
        result.line += this.nrPrependesLines;
        return result;
    }
    isInGenerated() {
        // always return true and map outliers case by case
        return true;
    }
}
exports.ConsumerDocumentMapper = ConsumerDocumentMapper;
