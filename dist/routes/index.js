"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const charts_1 = __importDefault(require("./charts"));
const express_1 = require("express");
const routes = express_1.Router();
routes.get('/ping', (req, res) => {
    res.send({ message: 'pong' });
});
routes.use(charts_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map