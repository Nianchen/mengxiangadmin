/*
 * @Author: your name
 * @Date: 2022-04-28 20:11:26
 * @LastEditTime: 2022-04-28 21:26:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹\src\hooks\echarts\nightingaleChartOption.js
 */
export default {
    title: {
        text: 'Articles And Professional Heat',
        subtext: 'Responsive Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        //控制颜色区域
        data: [
            'web前端',
            '后端',
            '大数据',
            '移动',
            '运维',
            '测试',
            '人工智能',
        ]
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [{
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: 'web前端' },
                { value: 33, name: '后端' },
                { value: 28, name: '大数据' },
                { value: 22, name: '移动' },
                { value: 20, name: '运维' },
                { value: 15, name: '测试' },
                { value: 12, name: '人工智能' },
            ]
        },
        {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 40, name: 'web前端' },
                { value: 33, name: '后端' },
                { value: 28, name: '大数据' },
                { value: 22, name: '移动' },
                { value: 20, name: '运维' },
                { value: 15, name: '测试' },
                { value: 12, name: '人工智能' },
            ]
        }
    ]
}