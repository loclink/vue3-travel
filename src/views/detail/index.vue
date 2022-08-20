<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/base-ui/navbar/index.vue';
import Banner from './cpns/banner/index.vue';
import HouseInfo from './cpns/house-info/index.vue';
import FacilityArea from './cpns/facility-area/index.vue';
import ActionBar from './cpns/action-bar/index.vue';
import { useDetailStore } from '@/store/modules/detail';

const route = useRoute();
const router = useRouter();
const detailStore = useDetailStore();

// 点击返回按钮
const handleClickBtn = () => {
  router.back();
};

// 处于活跃状态
onActivated(() => {
  detailStore.getDetailInfoAction(route.params.id);
});

// 非活跃
onDeactivated(() => {
  detailStore.detailInfo = {};
});
</script>

<script lang="ts">
export default { name: 'detail' };
</script>

<template>
  <div class="detail">
    <Navbar title="房屋详情" :is-show-menu="false" back-text="旅途" @click-btn="handleClickBtn" />
    <Banner />
    <HouseInfo />
    <FacilityArea class="panel-wrapper" />

    <ActionBar />
  </div>
</template>

<style scoped lang="less">
.detail {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: #f5f7fa;
  overflow-y: auto;
  // padding-bottom: 60px;

  .panel-wrapper {
    background-color: #fff;
    padding: 0 15px;
    margin-top: 12px;
    box-sizing: border-box;
  }
}
</style>
