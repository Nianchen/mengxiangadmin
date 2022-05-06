/*
 * @Author: your name
 * @Date: 2022-04-28 19:59:31
 * @LastEditTime: 2022-04-28 21:09:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹\src\hooks\echarts\NightingaleChart.js
 */
import * as echarts from 'echarts/core';
//玫瑰饼表
import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
//折线图
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';

import { BarChart } from 'echarts/charts';


echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
    GridComponent,
    LineChart,
    UniversalTransition,
    BarChart
]);

function eChartsStart(valueDom, nightingaleChartOption) {
    //南丁格尔玫瑰图部分
    //配置南丁格尔玫瑰图的DOM
    let myChart = echarts.init(valueDom);
    //启动南丁格尔玫瑰图
    myChart.setOption(nightingaleChartOption)
}
export default eChartsStart