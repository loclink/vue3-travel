<script lang="ts" setup>
import getAssetURL from '@/utils/load-assets';
</script>

<script lang="ts">
export default { name: 'banner' };
</script>
<template>
  <div class="banner">
    <img :src="getAssetURL('home/banner.webp')" alt="" />
  </div>
</template>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
