<script lang="ts" setup>
import HouseItemV9 from '@/components/house-item-v9/index.vue';
import { useHomeStore } from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import HouseItemV3 from '../../../../components/house-item-v3/index.vue';

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
const router = useRouter();

const handleClickHouseItem = (houseId: number) => {
  router.push({
    path: `/detail/${houseId}`
  });
};
</script>

<script lang="ts">
export default { name: 'house-list' };
</script>
<template>
  <div class="house-list">
    <h1 class="title">热门精选</h1>
    <div class="content">
      <template v-for="(item) in (houseList as any)" :key="item.data.cityId">
        <HouseItemV9
          class="house-item"
          v-if="item.discoveryContentType === 9"
          :data="item.data"
          @click="handleClickHouseItem(item.data?.houseId)"
        />
        <HouseItemV3
          class="house-item"
          v-else-if="item.discoveryContentType === 3"
          :data="item.data"
          @click="handleClickHouseItem(item.data?.houseId)"
        ></HouseItemV3>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-list {
  margin-top: 20px;
  .title {
    margin-top: 10px;
    padding: 0 10px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .house-item {
      width: 50%;
    }
  }
}
</style>
