<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOrderStore } from '@/store/modules/order';
import OrderItem from '@/components/order-item/index.vue';

const orderStore = useOrderStore();
const { orderList } = storeToRefs(orderStore);
</script>

<script lang="ts">
export default { name: 'order-list' };
</script>

<template>
  <div class="order-list">
    <template v-for="item in orderList" :key="item.unitId">
      <OrderItem :data="item" />
    </template>
  </div>
</template>

<style scoped lang="less">
.order-list {
  padding: 0 0 50px;
}
</style>
