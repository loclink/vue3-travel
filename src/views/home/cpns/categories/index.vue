<script lang="ts" setup>
import { ref } from 'vue';
import { useHomeStore } from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const active = ref();
const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<template>
  <div class="categories">
    <van-tabs v-model:active="active" color="#ff9645">
      <van-tab v-for="item in (categories as any)" :key="item.id">
        <template #title>
          <img class="icon" :src="item.subPictureUrl" alt="" />
          <div class="text">{{ item.title }}</div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
:deep(.van-tabs__nav) {
  padding: 0;
  height: 100%;
}

:deep(.van-tabs__nav .van-tabs__line) {
  bottom: 0;
}
.categories {
  margin-top: 5px;
  padding-bottom: 10px;
  height: 65px;
  padding-top: 8px;
  // box-sizing: border-box;
  background-color: #fff;
  .icon {
    height: 32px;
    text-align: center;
  }
}

:deep(.van-tabs) {
  height: 100%;
}
:deep(.van-tabs__wrap) {
  height: 100%;
}

:deep(.van-tabs__wrap .van-tab .van-tab__text) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
