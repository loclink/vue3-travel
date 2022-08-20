<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDetailStore } from '../../../../store/modules/detail';

const detailStore = useDetailStore();
const { detailBanner } = storeToRefs(detailStore);
</script>

<script lang="ts">
export default { name: 'banner' };
</script>

<template>
  <div class="banner">
    <van-swipe :loop="true" :autoplay="3000">
      <template v-for="(item, index) in detailBanner" :key="index">
        <van-swipe-item> <img class="banner-img" :src="item.url" :alt="item.title" /></van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.banner {
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  width: 100%;
  .banner-img {
    width: 100%;
  }
}
</style>
