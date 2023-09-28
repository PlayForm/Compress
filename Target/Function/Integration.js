"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharp = exports.Merge = exports._Default = exports.Default = void 0;
exports.default = (function (_Option) {
    if (_Option === void 0) { _Option = {}; }
    for (var Option_1 in _Option) {
        if (Object.prototype.hasOwnProperty.call(_Option, Option_1) &&
            _Option[Option_1] === true) {
            _Option[Option_1] = exports.Default[Option_1];
        }
    }
    var _a = (0, exports.Merge)(exports.Default, _Option), Path = _a.Path, Cache = _a.Cache, Logger = _a.Logger, _Map = _a.Map, Exclude = _a.Exclude, Action = _a.Action, CSS = _a.CSS, HTML = _a.HTML, Image = _a.Image, JavaScript = _a.JavaScript, SVG = _a.SVG;
    var Paths = new Set();
    if (typeof Path !== "undefined") {
        if (Path instanceof Array || Path instanceof Set) {
            for (var _i = 0, Path_1 = Path; _i < Path_1.length; _i++) {
                var _Path = Path_1[_i];
                Paths.add(_Path);
            }
        }
    }
    return {
        name: "astro-compress",
        hooks: {
            "astro:build:done": function (_a) {
                var Dir = _a.dir;
                return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        if (typeof _Map !== "object") {
                            return [2 /*return*/];
                        }
                        if (!Paths.size) {
                            Paths.add(Dir);
                        }
                        if (typeof Cache === "object" &&
                            Cache["Search"] === exports._Default.Cache.Search) {
                            Cache["Search"] = Dir;
                        }
                        Object.entries({ CSS: CSS, HTML: HTML, Image: Image, JavaScript: JavaScript, SVG: SVG }).forEach(function (_a) {
                            var File = _a[0], Setting = _a[1];
                            return __awaiter(void 0, void 0, void 0, function () {
                                var _Action;
                                return __generator(this, function (_b) {
                                    if (!Setting || !_Map[File]) {
                                        return [2 /*return*/];
                                    }
                                    _Action = (0, exports.Merge)(Action, (0, exports.Merge)(Action, {
                                        Wrote: function (_a) {
                                            var Buffer = _a.Buffer, Input = _a.Input;
                                            return __awaiter(void 0, void 0, void 0, function () {
                                                var _b, Data;
                                                var _c;
                                                return __generator(this, function (_d) {
                                                    switch (_d.label) {
                                                        case 0:
                                                            _b = File;
                                                            switch (_b) {
                                                                case "CSS": return [3 /*break*/, 1];
                                                                case "HTML": return [3 /*break*/, 3];
                                                                case "JavaScript": return [3 /*break*/, 6];
                                                                case "Image": return [3 /*break*/, 9];
                                                                case "SVG": return [3 /*break*/, 11];
                                                            }
                                                            return [3 /*break*/, 13];
                                                        case 1: return [4 /*yield*/, Promise.resolve().then(function () { return require("csso"); })];
                                                        case 2: return [2 /*return*/, (_d.sent()).minify(Buffer.toString(), Setting).css];
                                                        case 3: return [4 /*yield*/, Promise.resolve().then(function () { return require("html-minifier-terser"); })];
                                                        case 4: return [4 /*yield*/, (_d.sent()).minify(Buffer.toString(), Setting)];
                                                        case 5: return [2 /*return*/, _d.sent()];
                                                        case 6: return [4 /*yield*/, Promise.resolve().then(function () { return require("terser"); })];
                                                        case 7: return [4 /*yield*/, (_d.sent()).minify(Buffer.toString(), Setting)];
                                                        case 8: return [2 /*return*/, ((_c = (_d.sent()).code) !== null && _c !== void 0 ? _c : Buffer)];
                                                        case 9: return [4 /*yield*/, Promise.resolve().then(function () { return require("../Function/Image.js"); })];
                                                        case 10: return [2 /*return*/, (_d.sent()).default(Setting, { Buffer: Buffer, Input: Input })];
                                                        case 11: return [4 /*yield*/, Promise.resolve().then(function () { return require("svgo"); })];
                                                        case 12:
                                                            Data = (_d.sent()).optimize(Buffer.toString(), Setting).data;
                                                            return [2 /*return*/, Data ? Data : Buffer];
                                                        case 13:
                                                            {
                                                                return [2 /*return*/, Buffer];
                                                            }
                                                            _d.label = 14;
                                                        case 14: return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        },
                                        Fulfilled: function (Plan) { return __awaiter(void 0, void 0, void 0, function () {
                                            var _a, _b, _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(Plan.Files > 0)) return [3 /*break*/, 3];
                                                        _c = (_b = "Successfully compressed a total of ".concat(Plan.Files, " ").concat(File, " ").concat(Plan.Files === 1
                                                            ? "file"
                                                            : "files", " for ")).concat;
                                                        return [4 /*yield*/, Promise.resolve().then(function () { return require("files-pipe/Target/Function/Bytes.js"); })];
                                                    case 1: return [4 /*yield*/, (_d.sent()).default(Plan.Info.Total)];
                                                    case 2:
                                                        _a = _c.apply(_b, [_d.sent(), "."]);
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        _a = false;
                                                        _d.label = 4;
                                                    case 4: return [2 /*return*/, _a];
                                                }
                                            });
                                        }); },
                                    }));
                                    if (File === "Image") {
                                        _Action = (0, exports.Merge)(_Action, {
                                            Read: function (_a) {
                                                var Input = _a.Input;
                                                return __awaiter(void 0, void 0, void 0, function () {
                                                    var format;
                                                    return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4 /*yield*/, (0, exports.sharp)(Input).metadata()];
                                                            case 1:
                                                                format = (_b.sent()).format;
                                                                return [2 /*return*/, (0, exports.sharp)(Input, {
                                                                        failOn: "none",
                                                                        sequentialRead: true,
                                                                        unlimited: true,
                                                                        animated: format === "webp" ||
                                                                            format === "gif"
                                                                            ? true
                                                                            : false,
                                                                    })];
                                                        }
                                                    });
                                                });
                                            },
                                        });
                                    }
                                    Paths.forEach(function (Path) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("files-pipe"); })];
                                                case 1: return [4 /*yield*/, new (_a.sent()).default(Cache, Logger).In(Path)];
                                                case 2: return [4 /*yield*/, (_a.sent()).By(_Map[File])];
                                                case 3: return [4 /*yield*/, (_a.sent()).Not(Exclude)];
                                                case 4: return [4 /*yield*/, (_a.sent()).Pipe(_Action)];
                                                case 5: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/];
                    });
                });
            },
        },
    };
});
exports.Default = (await Promise.resolve().then(function () { return require("../Object/Option.js"); })).default;
exports._Default = (await Promise.resolve().then(function () { return require("files-pipe/Target/Object/Option.js"); })).default;
exports.Merge = (await Promise.resolve().then(function () { return require("files-pipe/Target/Function/Merge.js"); })).default;
exports.sharp = (await Promise.resolve().then(function () { return require("sharp"); })).default;
