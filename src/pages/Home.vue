<template>
  <div class="home">
    <BaseHeader/>
    <div class="canvas">
      <div id="barchart"></div>
      <div id="three"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onMounted } from 'vue'
import BaseHeader from '../components/BaseHeader'
export default defineComponent({
  components:{
    BaseHeader
  },
  setup(){
    
    onMounted( () => {
      const echarts = inject( 'echarts' )
      const THREE = inject( 'THREE' )
      const OrbitControls = inject( 'OrbitControls' )

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

      let scene = new THREE.Scene()
      let width = document.getElementById( 'three' ).offsetWidth
      let height = document.getElementById( 'three' ).offsetHeight
      let k = width / height
      let s = 200
      let camera = new THREE.OrthographicCamera( -s * k, s * k, s, -s, 1, 1000 )
      camera.position.set( 100, 200, 300 )
      camera.lookAt( scene.position )
      let point = new THREE.PointLight(0xffffff)
      point.position.set( 400, 200, 300 )
      scene.add( point )
      let bottom = new THREE.CylinderGeometry( 50, 50, 50, 25, 25 )
      let middle = new THREE.CylinderGeometry( 100, 100, 50, 25, 25 )
      let top = new THREE.CylinderGeometry( 50, 50, 50, 25, 25 )
      let group = new THREE.Group()
      let material = new THREE.MeshLambertMaterial( {
        color: 0x0000ff
      } )
      let bottomMesh = new THREE.Mesh( bottom, material )
      bottomMesh.position.set( 0, 0, 0 )
      let middleMesh = new THREE.Mesh( middle, material )
      middleMesh.position.set( 0, 50, 0 )
      let topMesh = new THREE.Mesh( top, material )
      topMesh.position.set( 0, 100, 0 )
      group.add( middleMesh, bottomMesh, topMesh )
      scene.add( group )
      let renderer = new THREE.WebGLRenderer()
      renderer.setSize( width, height )
      renderer.setClearColor(0xb9d3ff, 1)
      document.getElementById( 'three' ).appendChild( renderer.domElement )
      function render(){
        renderer.render( scene, camera )
        // group.rotateZ( 0.03 )
        group.rotateY( 0.03 )
        // requestAnimationFrame( render )
      }
      let controls = new OrbitControls( camera, document.getElementById( 'three' ) )
      controls.addEventListener('change', render)
      render()
    } )

  }
})
</script>

<style lang="less" scoped>
.home{
  .canvas{
    display: flex;
    #barchart{
      width: 500px;
      height: 300px;
    }
    #three{
      width: 300px;
      height: 300px;
    }
  }
}
</style>