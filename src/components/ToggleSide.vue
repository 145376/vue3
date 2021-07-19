<template>
  <div class="toggle-side">
    <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <MenuFoldOutlined />
    </a-button>
  </div>
</template>

<script>
import { MenuFoldOutlined } from "@ant-design/icons-vue";
import {useStore} from 'vuex'
export default {
  components: {
    MenuFoldOutlined,
  },
  setup(){
    const store = useStore()

    return {
      toggleCollapsed: () => store.commit('layout/TOGGLE_SIDEBAR')
    }
  }
};
</script>

<style lang="less" scoped>
</style>