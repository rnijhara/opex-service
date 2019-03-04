"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartsService_1 = require("../services/chartsService");
const routes = express_1.Router();
routes.get('/charts/:type', async (req, res) => {
    res.send(await chartsService_1.getChart(req.params.type));
});
exports.default = routes;
//# sourceMappingURL=charts.js.map