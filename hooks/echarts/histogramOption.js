/*
 * @Author: your name
 * @Date: 2022-04-28 21:02:19
 * @LastEditTime: 2022-04-28 21:15:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹\src\hooks\echarts\barRace.js
 */

export default {
    title: {
        text: 'Article Number',
        subtext: 'Responsive Data',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['web前端', '后端', '大数据', '移动', '运维', '测试', '人工智能']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [
            120,
            {
                value: 200,
                itemStyle: {
                    color: '#a90000'
                }
            },
            150,
            80,
            70,
            110,
            130
        ],
        type: 'bar'
    }]
}