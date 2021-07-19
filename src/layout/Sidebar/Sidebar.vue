<template>
  <div class="sidebar">
    <a-menu
      mode="inline"
      :theme="theme"
      v-model:selectedKeys="selectedKeys"
      :inline-collapsed="collapsed"
      @click="navTo"
    >
      <!-- <template v-for="item in routers" :key="item.path">
        <template v-if="item.children.length === 1">
          <a-menu-item :key="getKey(item)">
            <span :class="['iconfont', item.children[0].mate.icon]"></span>
            {{ item.children[0].mate.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <a-sub-menu :title="item2.mate.title" v-for="item2 in item.children" :key="item2.path">
            <a-menu-item>子菜单项</a-menu-item>
          </a-sub-menu>
        </template>
      </template> -->
      <side-item :items="routers"></side-item> 
    </a-menu>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import routers from "@/router/sidebar";
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { Menu } from "ant-design-vue";
import sideItem from './Item.vue'
export default {
  components: {
    AMenu: Menu,
    sideItem
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      theme: "dark",
      selectedKeys: ["/home"],
      // openKeys: ["item_0"],
      // preOpenKeys: ["item_0"],
    });
    const store = useStore();
    const navTo = ({ key }) => {
      router.push({ path: key });
    };
  
    return {
      routers,
      ...toRefs(state),
      collapsed: computed(() => store.getters.sidebar.open),
      navTo,
    };
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: width 0.5s linear;
  /deep/ .ant-menu {
    background-color: inherit;
    .iconfont {
      margin: 0 15px;
    }
    .ant-menu-item-selected {
      background-color: transparent;
      color: #1890ff;
      .iconfont {
        color: inherit;
      }
    }
  }
}
</style>