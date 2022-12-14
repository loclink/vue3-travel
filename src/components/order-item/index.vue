<script setup lang="ts">
import { computed } from 'vue';
import getAssetURL from '@/utils/load-assets';
import { formatDate, formatPrice, getDateWeek } from '@/utils/format';
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
          <div class="time">{{ `${getDateWeek(data.checkInDate)}${data.checkInLatestTime}` }}</div>
        </div>
        <img class="icon" :src="getAssetURL('order/icon_right_orderlist.png')" alt="" />
        <div class="end-time bottom-time">
          <div class="date">{{ formatDate(data.checkOutDate) }}</div>
          <div class="time">{{ `${getDateWeek(data.checkOutDate)}${data.checkOutLatestTime}` }}</div>
        </div>
        <div class="line"></div>
        <div class="price">
          <div class="name">支付总价</div>
          <div class="total-amout">{{ formatPrice(data.prepayAmount) }}</div>
        </div>
      </div>
    </div>
    <div class="order-item-btn">
      <div class="countdown">
        <van-icon name="clock-o" />
        <span class="time">29分</span>后订单自动取消
      </div>
      <div class="button">
        <div class="btn-item contact">联系房东</div>
        <div class="btn-item pay">去支付</div>
      </div>
    </div>
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
      align-items: center;
      justify-content: center;
      .bottom-time {
        color: #fff;
        text-align: center;
        .date {
          font-size: 16px;
        }
        .time {
          font-size: 12px;
        }
      }
      .icon {
        width: 16px;
        height: 12px;
        margin: 0 10px;
      }

      .line {
        background-color: #fff;
        height: 40px;
        width: 1px;
        margin: 0 20px;
      }

      .price {
        color: #fff;
        text-align: center;
        .total-amout {
          color: var(--primary-color);
          font-size: 16px;
        }
      }
    }
  }

  .order-item-btn {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .countdown {
      margin-right: 20px;
      .time {
        color: var(--primary-color);
        margin-left: 3px;
      }
    }
    .button {
      display: flex;
      .contact {
        border: 1px solid #e9e9e9;
        margin-right: 8px;
      }

      .pay {
        background-color: var(--primary-color);
        color: #fff;
      }
      .btn-item {
        width: 75px;
        height: 34px;
        border-radius: 5px;
        line-height: 34px;
        text-align: center;
      }
    }
  }
}
</style>
