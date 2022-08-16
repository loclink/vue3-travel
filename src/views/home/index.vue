<script lang="ts" setup>
import Banner from './cpns/banner/index.vue';
import SearchBox from './cpns/search-box/index.vue';
import Navbar from '@/base-ui/navbar/index.vue';
import Categories from './cpns/categories/index.vue';
import { useHomeStore } from '../../store/modules/home';
import { useScroll } from '@/hooks/useScroll';
import { ref, watch, onActivated } from 'vue';
import HouseList from './cpns/house-list/index.vue';

const currentPage = ref(1);
const homeStore = useHomeStore();

// 获取热门建议数据
homeStore.getHotSuggestAction();

// 获取分类数据
homeStore.getCategoriesAction();

// 获取房源数据
homeStore.getHouseListAction(currentPage.value);

const homeRef = ref();

const { isReachBottom, scrollTop } = useScroll(homeRef);
watch(isReachBottom, (newVal) => {
  if (newVal) {
    currentPage.value++;
    homeStore.getHouseListAction(currentPage.value).then(() => {
      isReachBottom.value = false;
    });
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
    <Navbar title="Vue3旅途" />
    <Banner />
    <SearchBox />
    <Categories />
    <HouseList />
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  background-color: #f7f8fb;
  overflow-y: auto;
}
</style>
