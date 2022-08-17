<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import HouseListItem from '@/components/house-list-item/index.vue';
import { useCommonStore } from '@/store/modules/common';
import { useFavorStore } from '@/store/modules/favor';
import NotCollect from '../not-collect/index.vue';

const active = ref();
const commonStore = useCommonStore();
const { themeColor } = storeToRefs(commonStore);
</script>

<script lang="ts">
export default { name: 'collect-list' };
const favorStore = useFavorStore();
const { houseItemList } = storeToRefs(favorStore);
</script>

<template>
  <div class="collect-list">
    <van-tabs v-model:active="active" :color="themeColor">
      <van-tab title="房屋">
        <div class="list-content">
          <template v-for="item in houseItemList" :key="item.cityId">
            <HouseListItem :data="item" />
          </template>
        </div>
      </van-tab>
      <van-tab title="房东">
        <NotCollect />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
.collect-list {
  height: calc(100vh - 50px);
  overflow-y: scroll;

  .list-content {
    padding: 10px 20px 50px;
  }
}
</style>
