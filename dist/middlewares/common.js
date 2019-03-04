"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
exports.handleCors = (router) => {
    router.use(cors_1.default());
};
exports.handleBodyParsing = (router) => {
    router.use(body_parser_1.default.json());
    router.use(body_parser_1.default.urlencoded({ extended: true }));
};
//# sourceMappingURL=common.js.map