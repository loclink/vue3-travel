<script lang="ts" setup>
import { ref } from 'vue';
import tabbarData from '../assets/data/tabbar';
import getAssetURL from '../utils/load-assets';
const active = ref(0);
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, index) of tabbarData" :key="item.text" :to="item.path">
        <template #icon>
          <img v-if="active !== index" :src="getAssetURL(item.image)" :alt="item.image" />
          <img v-else :src="getAssetURL(item.imageActive)" :alt="item.text" />
        </template>
        <template #default>
          <span :class="{ active: active === index }">{{ item.text }}</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.tabbar {
  .active {
    color: var(--primary-color);
  }
}
</style>
