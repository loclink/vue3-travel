<script setup lang="ts">
import { computed } from 'vue';
import getAssetURL from '@/utils/load-assets';
import { formatDate } from '@/utils/format';
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});
const orderStatusDesc = computed(() => {
  if (props.data.orderStatus === 1) {
    return props.data.orderStatusDesc;
  } else {
    return props.data.orderStatusDesc + props.data.cancelReasonDesc;
  }
});
</script>

<script lang="ts">
export default { name: 'order-item' };
</script>

<template>
  <div class="order-item">
    <div class="order-item-title">
      <div class="title ellipsis-text-1">{{ data.unitName }}</div>
      <div class="status" :class="{ pend: data.orderStatus === 1 }">{{ orderStatusDesc }}</div>
    </div>
    <div class="order-item-info">
      <img class="cover" :src="data.unitPicture" alt="" />
      <div class="bottom">
        <div class="star-time bottom-time">
          <div class="date">{{ formatDate(data.checkInDate) }}</div>
          <div class="time"></div>
        </div>
        <img class="icon" :src="getAssetURL('order/icon_right_orderlist.png')" alt="" />
        <div class="end-time bottom-time">
          <div class="date"></div>
          <div class="time"></div>
        </div>
        <div class="line"></div>
        <div class="price"></div>
      </div>
    </div>
    <div class="order-item-btn"></div>
  </div>
</template>

<style scoped lang="less">
.order-item {
  background-color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  .order-item-title {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      max-width: 180px;
      font-size: 12px;
      line-height: 12px;
      color: #333;
    }

    .status {
      font-size: 18px;
      color: rgb(178, 178, 178);
    }
    .status.pend {
      color: var(--primary-color);
    }
  }

  .order-item-info {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .cover {
      width: 100%;
    }

    .bottom {
      width: 100%;
      height: 60px;
      position: absolute;
      background: rgba(9, 10, 14, 0.7);
      bottom: 0;
      display: flex;
      .bottom-time {
        .date {
          color: #fff;
        }
      }
    }
  }
}
</style>
