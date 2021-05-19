<template>
  <router-view></router-view>
</template>

<script>
import * as echarts from 'echarts'
import { provide } from 'vue'
import {
    BarChart
} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import * as THREE from 'three'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
)

export default {
  setup(){
    provide('echarts', echarts)
    provide('THREE', THREE)
    provide('OrbitControls', OrbitControls)
  }
}
</script>