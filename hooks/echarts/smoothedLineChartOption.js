/*
 * @Author: your name
 * @Date: 2022-04-28 20:46:29
 * @LastEditTime: 2022-04-28 21:17:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹\src\hooks\echarts\SmoothedLineChartOption.js
 */
export default {
    title: {
        text: 'Visitor Number',
        subtext: 'Responsive Data',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
}