<script lang="ts" setup>
import Banner from './cpns/banner/index.vue';
import SearchBox from './cpns/search-box/index.vue';
import Navbar from '../../base-ui/navbar.vue';
import Categories from './cpns/categories/index.vue';
import { useHomeStore } from '../../store/modules/home';

const homeStore = useHomeStore();
// 获取热门建议数据
homeStore.getHotSuggestAction();

// 获取分类数据
homeStore.getCategoriesAction();
</script>

<template>
  <div class="home page-wrapper">
    <Navbar title="Vue3旅途" />
    <Banner />
    <SearchBox />
    <Categories />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
    </ul>
  </div>
</template>

<style scoped lang="less"></style>
