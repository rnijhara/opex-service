"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChartConfig_1 = require("../entities/ChartConfig");
const entities_1 = __importDefault(require("../entities"));
const lodash_1 = require("lodash");
async function getChart(type) {
    const chartConfig = await ChartConfig_1.ChartConfig.findOne({ where: { type } });
    if (!chartConfig) {
        return;
    }
    return await generateChart(chartConfig);
}
exports.getChart = getChart;
async function generateChart(chartConfig) {
    const table = chartConfig.config.table;
    const entity = entities_1.default[table];
    const data = await entity.find();
    return transformToCirclePacking(data, chartConfig);
}
function transformToCirclePacking(data, chartConfig) {
    const config = chartConfig.config;
    const groupedByMaster = lodash_1.groupBy(data, config.masterCircle);
    const groupedByMasterAndParent = lodash_1.keys(groupedByMaster).map((k) => {
        return { [k]: lodash_1.groupBy(groupedByMaster[k], config.parentCircle) };
    });
    const masterData = lodash_1.flatMap(groupedByMasterAndParent, masterGroup => {
        return lodash_1.flatMap(lodash_1.keys(masterGroup), masterId => {
            const parentGroup = masterGroup[masterId];
            return buildMaster(masterId, parentGroup, config);
        });
    });
    return { name: config.table, children: masterData };
}
function buildMaster(masterId, parentGroup, config) {
    const transformedParents = lodash_1.keys(parentGroup).map(parentId => {
        return buildParent(parentId, parentGroup, config);
    });
    return {
        name: masterId,
        children: transformedParents
    };
}
function buildParent(parentId, parentGroup, config) {
    let children = parentGroup[parentId];
    if (children.length === 1) {
        return {
            name: children[0][config.parentTooltip],
            value: children[0][config.parentSize]
        };
    }
    return {
        name: children[0][config.parentTooltip],
        children: children.map((child) => {
            return buildChild(child, config);
        })
    };
}
function buildChild(child, config) {
    return {
        name: child[config.childrenTooltip],
        value: child[config.childrenSize]
    };
}
//# sourceMappingURL=chartsService.js.map