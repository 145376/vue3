<template>
  <div class="navbar">
    <toggle-btn></toggle-btn>
  </div>
</template>

<script>
import toggleBtn from "@/components/ToggleSide.vue";
export default {
  components: {
    toggleBtn,
  },
};
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #cccc;
}
</style>