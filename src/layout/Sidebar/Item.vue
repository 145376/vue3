<template>
  <!-- <div class="sidebar-item"> -->
    <template v-for="item in items" :key="item.path">
      <template v-if="item.children.length === 1">
          <a-menu-item :key="getKey(item)">
            <span :class="['iconfont', item.children[0].mate.icon]"></span>
            {{ item.children[0].mate.title }}
          </a-menu-item>
        </template>
        <!-- 嵌套子路由 -->
        <!-- <template v-else>
          <a-sub-menu :title="item2.mate.title" v-for="(item2, index2) in item.children" :key="index2">
            <a-menu-item :key="index2">子菜单项</a-menu-item>
          </a-sub-menu>
        </template> -->
    </template>
  <!-- </div> -->
</template>

<script>
import { Menu } from "ant-design-vue";

export default {
  name: 'sideItem',
  components:{
    AMenuItem: Menu.Item,
    // ASubMenu: Menu.SubMenu,
  },
  props:{
    items: {
      type: Array,
      require: true
    }
  },
  setup(){
    const getKey = (item) => {
      console.log(item);
      if (item.path === "/") {
        return "/home";
      } else {
        return `${item.path}/${item.children[0].path}`;
      }
    };

    return {
      getKey
    }
  }
}
</script>

<style lang="less" scioped>
.sidebar-item{

}
</style>