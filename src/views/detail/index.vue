<script setup lang="ts">
import { onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '../../base-ui/navbar/index.vue';

const route = useRoute();
const router = useRouter();

// 点击返回按钮
const handleClickBtn = () => {
  router.back();
};

// 处于活跃状态
onActivated(() => {
  console.log(route.params.id);
});
</script>

<script lang="ts">
export default { name: 'detail' };
</script>

<template>
  <div class="detail">
    <Navbar title="房屋详情" :is-show-menu="false" back-text="旅途" @click-btn="handleClickBtn" />
  </div>
</template>

<style scoped lang="less">
.detail {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: #f5f7fa;
}
</style>
