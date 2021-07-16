<template>
  <div class="home">
    home
  </div>
</template>

<script>
import { defineComponent} from 'vue'
export default defineComponent({
  setup(){
    console.log('home')
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