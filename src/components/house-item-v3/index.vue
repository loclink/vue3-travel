<script setup lang="ts">
import getAssetURL from '../../utils/load-assets';

defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});
</script>
<script lang="ts">
export default { name: 'house-item-v3' };
</script>
<template>
  <div class="house-item-v3">
    <img class="house-image" :src="data.image.url" alt="" />
    <div class="content">
      <div class="location">
        <img :src="getAssetURL('home/location.png')" alt="" />
        <span class="location-text">{{ data.location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-item-v3 {
  padding: 5px;
  box-sizing: border-box;

  .house-image {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .content {
    padding: 8px 10px;

    .location {
      display: flex;
      align-items: center;
      img {
        height: 12px;
        margin-right: 3px;
      }
    }
  }
}
</style>
