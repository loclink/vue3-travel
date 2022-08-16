<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});

const value = ref(4);
</script>

<script lang="ts">
export default { name: 'house-item-v9' };
</script>

<template>
  <div class="house-item-v9">
    <img class="house-image" :src="data.image.url" alt="" />
    <div class="description">
      <div class="summary-text">{{ data.summaryText }}</div>
      <div class="house-name">{{ data.houseName }}</div>
      <van-rate v-model="value" icon="like" void-icon="like-o" size="5px" gutter="10px" />
    </div>
  </div>
</template>

<style scoped lang="less">
.house-item-v9 {
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  .house-image {
    width: 100%;
    border-radius: 10px;
  }
  .description {
    padding: 8px 10px;
    box-sizing: border-box;
    color: #fff;
    position: absolute;
    bottom: 0;
  }
}
</style>
