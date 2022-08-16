<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCityStore } from '../../store/modules/city';

const cityStore = useCityStore();

const router = useRouter();
// 搜索框数据
const value = ref();

// tabs索引数据
const active = ref<string>('cityGroup');

// 获取数据
cityStore.getCityAllDataAction();
const { cityAllData } = storeToRefs(cityStore);

const hotCities = computed(() => cityAllData.value[active.value]['hotCities']);
const cities = computed(() => cityAllData.value[active.value]['cities']);
// 点击取消
const onCancel = () => {
  router.back();
};
</script>

<script lang="ts">
export default { name: 'city' };
</script>

<template>
  <div class="city">
    <div class="city-header">
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" show-action @cancel="onCancel" />
      <van-tabs v-model:active="active" color="#ff9645">
        <template v-for="(value, key) in (cityAllData as any)" :key="key">
          <van-tab :title="value?.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <div class="city-tag-list">
        <div class="title">热门</div>
        <div class="hot-tag-list">
          <template v-for="item in hotCities" :key="item.cityId">
            <div class="hot-tag">{{ item.cityName }}</div>
          </template>
        </div>
      </div>

      <van-index-bar highlight-color="#ff9645">
        <template v-for="item in cities" :key="item.group">
          <van-index-anchor :index="item.group" />
          <template v-for="citie in item.cities" :key="citie.cityId">
            <van-cell :title="citie.cityName" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<style scoped lang="less">
.city {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  background-color: #fff;

  .city-header {
    position: sticky;
    height: 104px;
    top: 0;
    z-index: 999;
  }

  .content {
    height: calc(100vh - 104px);
    overflow-y: auto;

    .city-tag-list {
      overflow-y: auto;
    }

    .title {
      height: 32px;
      padding: 0 20px;
      display: flex;
      align-items: center;
    }

    .hot-tag-list {
      display: flex;

      // 允许换行
      flex-wrap: wrap;

      // 均匀排列每个元素
      justify-content: space-evenly;
      padding: 10px 20px;
      box-sizing: border-box;
      .hot-tag {
        width: 65px;
        height: 18px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff4ec;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
