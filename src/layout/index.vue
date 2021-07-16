<template>
  <div class="layout">
    <div class="sidebar">
      <a-menu
        mode="inline"
        :theme="theme"
        v-model:selectedKeys="selectedKeys"
      >
        <template v-for="(item) in routes" :key="item.path">
          <template v-if="item.children">
            <a-menu-item :key="item.path" @click="navTo(item)">{{item.children[0].mate.title}}</a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>
    <div class="main-container">
      <div class="navbar">导航栏</div>
      <div class="main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import {Menu} from 'ant-design-vue'
export default {
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    // ASubMenu: Menu.SubMenu
  },
  setup() {
    const router = useRouter();
    const routes = router.options.routes;
    const state = reactive({
      theme: 'dark',
      selectedKeys: ['item_0'],
    });

    const navTo = (item) => {
      console.log(item);
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
      routes,
      navTo,
      ...toRefs(state)
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #333;
    color: #fff;
    /deep/ .ant-menu-dark{
      background-color: #333;
    }
  }
  .main-container {
    margin-left: 200px;
    .navbar {
      height: 50px;
      background-color: #fff;
      box-shadow: 0 0 10px 0 #cccc;
    }
  }
}
</style>