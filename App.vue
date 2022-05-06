<template>
  <div>
 
  <router-view></router-view>
  </div>
</template>

<script>
// import home from './views/home.vue'

import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
  name: 'App',
  components: {
    // home
  },
  setup() {
      provide('ec',echarts)//provide
    return {
     
    }
  },
}
</script>

<style>
 ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
</style>
