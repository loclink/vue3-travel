<script setup lang="ts">
import { ref } from 'vue';
const value = ref();
</script>
<script lang="ts">
export default { name: 'search-bar' };
</script>
<template>
  <div class="search-bar">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<style scoped lang="less">
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
}
</style>
