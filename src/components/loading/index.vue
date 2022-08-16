<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCommonStore } from '../../store/modules/common';
import getAssetURL from '@/utils/load-assets';

const commonStore = useCommonStore();
const { isLoading } = storeToRefs(commonStore);
</script>
<script lang="ts">
export default { name: 'loading' };
</script>
<template>
  <div v-if="isLoading" class="loading">
    <img :src="getAssetURL('home/full-screen-loading.gif')" alt="" />
  </div>
</template>

<style scoped lang="less">
.loading {
  position: fixed;
  z-index: 999;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 30vw;
  height: 30vw;
  background-image: url('@/assets/img/home/loading-bg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  img {
    width: 85%;
    transform: translateY(-6%);
    display: block;
  }
}
</style>
