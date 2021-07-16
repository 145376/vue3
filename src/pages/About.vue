<template>
  <div class="about">about</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    console.log("about");
  },
});
</script>

<style lang="less" scoped>
.about {
  background-color: #333;
}
</style>