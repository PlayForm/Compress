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
var csso_1 = require("csso");
var files_pipe_1 = require("files-pipe");
var html_minifier_terser_1 = require("html-minifier-terser");
var svgo_1 = require("svgo");
var terser_1 = require("terser");
var Index_js_1 = require("./Option/Index.js");
exports.default = (function (_Option) {
    if (_Option === void 0) { _Option = {}; }
    for (var Option_1 in _Option) {
        if (Object.prototype.hasOwnProperty.call(_Option, Option_1) &&
            _Option[Option_1] === true) {
            _Option[Option_1] = Index_js_1.default[Option_1];
        }
    }
    var __Option = (0, files_pipe_1.Merge)(Index_js_1.default, _Option);
    var Paths = new Set();
    if (typeof __Option["Path"] !== "undefined") {
        if (__Option["Path"] instanceof Array ||
            __Option["Path"] instanceof Set) {
            for (var _i = 0, _a = __Option["Path"]; _i < _a.length; _i++) {
                var Path = _a[_i];
                Paths.add(Path);
            }
        }
    }
    return {
        name: "astro-compress",
        hooks: {
            "astro:build:done": function (_a) {
                var Dir = _a.dir;
                return __awaiter(void 0, void 0, void 0, function () {
                    var _loop_1, _i, _b, _c, File_1, Setting;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                if (!Paths.size) {
                                    Paths.add(Dir);
                                }
                                _loop_1 = function (File_1, Setting) {
                                    var _e, Paths_1, Path;
                                    return __generator(this, function (_f) {
                                        switch (_f.label) {
                                            case 0:
                                                if (!Setting) {
                                                    return [2 /*return*/, "continue"];
                                                }
                                                _e = 0, Paths_1 = Paths;
                                                _f.label = 1;
                                            case 1:
                                                if (!(_e < Paths_1.length)) return [3 /*break*/, 7];
                                                Path = Paths_1[_e];
                                                return [4 /*yield*/, new files_pipe_1.Files(__Option["Cache"], __Option["Logger"]).In(Path)];
                                            case 2: return [4 /*yield*/, (_f.sent()).By(typeof __Option["Map"] === "object"
                                                    ? __Option["Map"][File_1]
                                                    : "")];
                                            case 3: return [4 /*yield*/, (_f.sent()).Not(__Option["Exclude"])];
                                            case 4: return [4 /*yield*/, (_f.sent()).Pipe((0, files_pipe_1.Merge)(__Option["Action"], (0, files_pipe_1.Merge)(__Option["Action"], {
                                                    Wrote: function (On) { return __awaiter(void 0, void 0, void 0, function () {
                                                        var _a, code, Data;
                                                        return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0:
                                                                    _a = File_1;
                                                                    switch (_a) {
                                                                        case "CSS": return [3 /*break*/, 1];
                                                                        case "HTML": return [3 /*break*/, 2];
                                                                        case "JavaScript": return [3 /*break*/, 4];
                                                                        case "SVG": return [3 /*break*/, 6];
                                                                    }
                                                                    return [3 /*break*/, 7];
                                                                case 1:
                                                                    {
                                                                        return [2 /*return*/, (0, csso_1.minify)(On.Buffer.toString(), Setting).css];
                                                                    }
                                                                    _b.label = 2;
                                                                case 2: return [4 /*yield*/, (0, html_minifier_terser_1.minify)(On.Buffer.toString(), Setting)];
                                                                case 3: return [2 /*return*/, _b.sent()];
                                                                case 4: return [4 /*yield*/, (0, terser_1.minify)(On.Buffer.toString(), Setting)];
                                                                case 5:
                                                                    code = (_b.sent()).code;
                                                                    return [2 /*return*/, code ? code : On.Buffer];
                                                                case 6:
                                                                    {
                                                                        Data = (0, svgo_1.optimize)(On.Buffer.toString(), Setting).data;
                                                                        if (typeof Data !== "undefined") {
                                                                            return [2 /*return*/, Data];
                                                                        }
                                                                        return [2 /*return*/, On.Buffer];
                                                                    }
                                                                    _b.label = 7;
                                                                case 7:
                                                                    {
                                                                        return [2 /*return*/, On.Buffer];
                                                                    }
                                                                    _b.label = 8;
                                                                case 8: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); },
                                                    Fulfilled: function (Plan) { return __awaiter(void 0, void 0, void 0, function () {
                                                        var _a, _b, _c;
                                                        return __generator(this, function (_d) {
                                                            switch (_d.label) {
                                                                case 0:
                                                                    if (!(Plan.Files > 0)) return [3 /*break*/, 2];
                                                                    _c = (_b = "Successfully compressed a total of ".concat(Plan.Files, " ").concat(File_1, " ").concat(Plan.Files === 1
                                                                        ? "file"
                                                                        : "files", " for ")).concat;
                                                                    return [4 /*yield*/, (0, files_pipe_1.Bytes)(Plan.Info.Total)];
                                                                case 1:
                                                                    _a = _c.apply(_b, [_d.sent(), "."]);
                                                                    return [3 /*break*/, 3];
                                                                case 2:
                                                                    _a = false;
                                                                    _d.label = 3;
                                                                case 3: return [2 /*return*/, _a];
                                                            }
                                                        });
                                                    }); },
                                                })))];
                                            case 5:
                                                _f.sent();
                                                _f.label = 6;
                                            case 6:
                                                _e++;
                                                return [3 /*break*/, 1];
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                };
                                _i = 0, _b = Object.entries(__Option);
                                _d.label = 1;
                            case 1:
                                if (!(_i < _b.length)) return [3 /*break*/, 4];
                                _c = _b[_i], File_1 = _c[0], Setting = _c[1];
                                return [5 /*yield**/, _loop_1(File_1, Setting)];
                            case 2:
                                _d.sent();
                                _d.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            },
        },
    };
});
