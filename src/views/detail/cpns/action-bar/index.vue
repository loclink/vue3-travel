<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDetailStore } from '@/store/modules/detail';
import { formatPrice } from '@/utils/format';

const detailStore = useDetailStore();
const { detailPriceModule } = storeToRefs(detailStore);

console.log(detailPriceModule.value);
</script>

<script lang="ts">
export default { name: 'action-bar' };
</script>

<template>
  <div class="action-bar">
    <div class="chat">
      <van-icon name="chat-o" />
      <span>聊天</span>
    </div>

    <div class="price">
      <div class="final">
        <span class="final-price">{{ formatPrice(detailPriceModule?.product?.finalPrice) }}</span>
        <span> / 晚</span>
      </div>
      <div class="old">{{ formatPrice(detailPriceModule?.product?.productPrice) }}</div>
    </div>

    <div class="order">预定当前房源</div>
  </div>
</template>

<style scoped lang="less">
.action-bar {
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  .chat {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    border-right: 1px solid #ccc;
    margin: 10px 0;
    padding: 0 10px;
    color: #333;
  }

  .price {
    display: flex;
    align-items: center;
    .final {
      .final-price {
        color: var(--primary-color);
      }
    }

    .old {
      text-decoration: line-through;
      font-size: 12px;
      color: #999;
      margin-left: 5px;
    }
  }

  .order {
    background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
  }
}
</style>
