<script setup lang="ts">
import Navbar from '@/base-ui/navbar/index.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { orderTabData } from '@/assets/data/order-tab';
import { useCommonStore } from '@/store/modules/common';
import { useOrderStore } from '@/store/modules/order';
import { storeToRefs } from 'pinia';
import OrderList from './cpns/order-list/index.vue';
const router = useRouter();
const commonStore = useCommonStore();
const { themeColor } = storeToRefs(commonStore);
const active = ref();
const orderStore = useOrderStore();

const handleClickBack = () => {
  router.back();
};

const handleChangeTab = (name: string) => {
  console.log(name);
  orderStore.getOrderListAction(name);
};
</script>

<script lang="ts">
export default { name: 'order' };
</script>

<template>
  <div class="order">
    <Navbar title="订单列表" @click-btn="handleClickBack" />
    <van-tabs v-model:active="active" :color="themeColor" :title-active-color="themeColor" @change="handleChangeTab">
      <template v-for="(item, index) in orderTabData" :key="index">
        <van-tab :title="item.title" :name="item.name" />
      </template>
    </van-tabs>
    <OrderList />
  </div>
</template>

<style scoped></style>
