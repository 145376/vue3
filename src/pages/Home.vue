<template>
  <div class="home">
    <div id="barchart"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup(){
    onMounted( () => {
      const echarts = inject( 'echarts' )
      let barchart = echarts.init( document.getElementById( 'barchart' ) )
      barchart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: '曲线',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      } )
    })
  }
}
</script>

<style lang="less" scoped>
.home{
 #barchart{
   width: 500px;
   height: 300px;
 }
}
</style>