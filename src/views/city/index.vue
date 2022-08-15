<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const value = ref();
const active = ref();
const onCancel = () => {
  router.back();
};
</script>

<template>
  <div class="city">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" show-action @cancel="onCancel" />
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
.city {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  background-color: #fff;
}
</style>
