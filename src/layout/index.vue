<template>
  <div :class="['layout', collapsed ? 'hideSidebar' : '']">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <transition name="fade" mode="out-in">
        <main-view></main-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
import sidebar from "./Sidebar/Sidebar.vue";
import mainView from "./Main.vue";
import navbar from "./Navbar.vue"
import { computed } from '@vue/runtime-core';
export default {
  components: {
    sidebar,
    mainView,
    navbar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const navTo = (item) => {
      let baseUrl = item.path;
      if (item.path === "/") {
        router.push({ path: "/home" });
        return;
      }
      if (item.children) {
        router.push({ path: baseUrl + "/" + item.children[0].path });
      }
    };

    return {
      navTo,
      collapsed: computed(() => store.getters.sidebar.open)
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  &.hideSidebar > .sidebar-container {
    width: 80px;
  }
  &.hideSidebar {
    .main-container {
      margin-left: 80px;
    }
  }
  .main-container {
    height: 100%;
    margin-left: 200px;
    transition: margin-left 0.5s linear;
    .main {
      height: calc(100% - 80px);
    }
  }
}
</style>