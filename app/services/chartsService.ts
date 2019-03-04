import { ChartConfig } from "../entities/ChartConfig";
import { ChartType } from "../types/chartType";
import entities from '../entities';
import { flatMap, groupBy, keys } from 'lodash';

export async function getChart(type: ChartType) {
  const chartConfig = await ChartConfig.findOne({where: {type}});
  if (!chartConfig) {
    return;
  }
  return await generateChart(chartConfig);
}

async function generateChart(chartConfig: ChartConfig) {
  const table = chartConfig.config.table;
  const entity = entities[table];
  const data = await entity.find();
  return transformToCirclePacking(data, chartConfig);
}

function transformToCirclePacking(data: Array<any>, chartConfig: ChartConfig) {
  const config = chartConfig.config;
  const groupedByMaster = groupBy(data, config.masterCircle);
  const groupedByMasterAndParent = keys(groupedByMaster).map((k) => {
    return {[k]: groupBy(groupedByMaster[k], config.parentCircle)}
  });

  const masterData = flatMap(groupedByMasterAndParent, masterGroup => {
    return flatMap(keys(masterGroup), masterId => {
      const parentGroup = masterGroup[masterId];
      return buildMaster(masterId, parentGroup, config);
    })
  });
  return {name: config.table, children: masterData};
}

function buildMaster(masterId: string, parentGroup: any, config: any) {
  const transformedParents = keys(parentGroup).map(parentId => {
    return buildParent(parentId, parentGroup, config);
  });
  return {
    name: masterId,
    children: transformedParents
  }
}

function buildParent(parentId: string, parentGroup: any, config: any) {
  let children = parentGroup[parentId];
  if (children.length === 1) {
    return {
      name: children[0][config.parentTooltip],
      value: children[0][config.parentSize]
    };
  }
  return {
    name: children[0][config.parentTooltip],
    children: children.map((child: any) => {
      return buildChild(child, config)
    })
  }
}

function buildChild(child: any, config: any) {
  return {
    name: child[config.childrenTooltip],
    value: child[config.childrenSize]
  };
}
