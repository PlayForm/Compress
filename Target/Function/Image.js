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
exports._Map = void 0;
exports._Map = (await Promise.resolve().then(function () { return require("../Object/Image/Map.js"); })).default;
exports.default = (function (Option, _a) {
    var Buffer = _a.Buffer, Input = _a.Input;
    return __awaiter(void 0, void 0, void 0, function () {
        var File, Type, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    File = Input.split(".").pop();
                    if (!File) {
                        return [2 /*return*/];
                    }
                    Type = typeof exports._Map[File] !== "undefined"
                        ? exports._Map[File]
                        : typeof Option[File] !== "undefined"
                            ? File
                            : false;
                    if (!(Type &&
                        ["avif", "gif", "heif", "jpeg", "png", "raw", "tiff", "webp"].includes(Type) &&
                        typeof Option[Type] !== "undefined" &&
                        Option[Type] !== false)) return [3 /*break*/, 6];
                    _b = Type in Buffer;
                    if (!_b) return [3 /*break*/, 5];
                    _d = (_c = Buffer)[Type];
                    if (!(Option[Type] !== true)) return [3 /*break*/, 1];
                    _e = Option[Type];
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, Promise.resolve().then(function () { return require("../Object/Image.js"); })];
                case 2:
                    _e = (_f.sent()).default;
                    _f.label = 3;
                case 3: return [4 /*yield*/, _d.apply(_c, [_e]).toBuffer()];
                case 4:
                    _b = (_f.sent());
                    _f.label = 5;
                case 5: return [2 /*return*/, (_b)];
                case 6: return [2 /*return*/];
            }
        });
    });
});
