<!--
 * @Author: your name
 * @Date: 2022-04-14 19:21:26
 * @LastEditTime: 2022-04-28 21:11:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新建文件夹\src\views\YiBiao.vue
-->
<template>
  <div class="Yibiao">
    <div class="box" ref="chartThr"></div>
    <div class="box" ref="chartOne"></div>
    <div class="box" ref="chartTwo"></div>
    <button @click="Change">change</button>
  </div>
</template>
    
<script>
//配置option数据
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import eChartsStart from "../hooks/echarts/index";
import nightingaleChartOption from "../hooks/echarts/nightingaleChartOption"; //引进南丁格尔玫瑰图配置项
import smoothedLineChartOption from "../hooks/echarts/smoothedLineChartOption"; //折线图配置项
import histogramOption from "../hooks/echarts/histogramOption"; //动态柱状图图配置项

export default defineComponent({
  setup() {
    const chartOne = ref(null);
    const chartTwo = ref(null);
    const chartThr = ref(null);
  
    const Change = () =>{
      
        smoothedLineChartOption.series[0].data.sort((a,b)=>{
          return b-a
        })
         eChartsStart(chartTwo.value, smoothedLineChartOption);

    }
    onMounted(() => {
      eChartsStart(chartOne.value, nightingaleChartOption);
      eChartsStart(chartTwo.value, smoothedLineChartOption);
      eChartsStart(chartThr.value, histogramOption);
    });
    return {
      chartOne,
      chartTwo,
      chartThr,
      Change
    };
  },
});
</script>
    
<style>
.box {
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
}
</style>