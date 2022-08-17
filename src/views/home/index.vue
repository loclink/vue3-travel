<script lang="ts" setup>
import { ref, watch, onActivated } from 'vue';
import { useHomeStore } from '@/store/modules/home';
import { useScroll } from '@/hooks/useScroll';
import Banner from './cpns/banner/index.vue';
import SearchBox from './cpns/search-box/index.vue';
import Navbar from '@/base-ui/navbar/index.vue';
import Categories from './cpns/categories/index.vue';
import HouseList from './cpns/house-list/index.vue';
import SearchBar from '@/components/search-bar/index.vue';

const currentPage = ref(1);
const isShowSearchBar = ref(false);
const homeStore = useHomeStore();

// 获取热门建议数据
homeStore.getHotSuggestAction();

// 获取分类数据
homeStore.getCategoriesAction();

// 获取房源数据
homeStore.getHouseListAction(currentPage.value);

const homeRef = ref();

const { isReachBottom, scrollTop } = useScroll(homeRef);

// 监听是否到达底部
watch(isReachBottom, (newVal) => {
  if (newVal) {
    currentPage.value++;
    homeStore.getHouseListAction(currentPage.value).then(() => {
      isReachBottom.value = false;
    });
  }
});

// 监听视口顶部距离元素顶部距离的变化（滚动距离）
watch(scrollTop, (newVal) => {
  if (newVal >= 360) {
    isShowSearchBar.value = true;
  } else {
    isShowSearchBar.value = false;
  }
});

// 路由活跃状态
onActivated(() => {
  console.log(homeRef.value);
  homeRef.value?.scrollTo({
    top: scrollTop.value
  });
});
</script>
<script lang="ts">
export default { name: 'home' };
</script>
<template>
  <div class="home" ref="homeRef">
    <Navbar title="Vue3旅途" :is-show-menu="false" :is-show-back="false" />
    <Banner />
    <SearchBox />
    <Categories />
    <HouseList />
    <SearchBar v-if="isShowSearchBar" />
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  background-color: #f7f8fb;
  overflow-y: auto;
}
</style>
