<script setup lang="ts">
import getAssetURL from '@/utils/load-assets';
import { formatPrice } from '@/utils/format';

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

      <div class="name">{{ data.houseName }}</div>

      <div class="summary-text">{{ data.summaryText }}</div>
      <div class="price">
        <span class="new">{{ formatPrice(data.finalPrice) }}</span>
        <span class="old">{{ data.productPrice }}</span>
        <span class="tip">{{ data.priceTipBadge.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-item-v3 {
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .house-image {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .content {
    padding: 20px 10px 0;
    box-sizing: border-box;
    background-color: #fff;
    flex: 1;
    border-radius: 0 0 10px 10px;
    .location {
      display: flex;
      align-items: center;
      img {
        height: 12px;
        margin-right: 3px;
      }
    }

    .name {
      color: #333;
      font-size: 14px;
      margin: 5px 0;
    }

    .summary-text {
      color: #666;
      font-size: 12px;
    }

    .price {
      margin: 8px 0;
      height: 18px;
      display: flex;
      align-items: center;

      .new {
        color: var(--primary-color);
        font-size: 14px;
      }
      .old {
        text-decoration: line-through;
        color: #999;
        font-size: 12px;
        margin: 0 3px;
      }

      .tip {
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        border-radius: 10px;
        font-size: 12px;
        display: flex;
        align-items: center;
        padding: 0 3px;
        color: #fff;
      }
    }
  }
}
</style>
