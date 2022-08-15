<script lang="ts" setup>
import Banner from './cpns/banner/index.vue';
import SearchBox from './cpns/search-box/index.vue';
import Navbar from '../../base-ui/navbar.vue';
</script>

<template>
  <div class="home">
    <Navbar title="Vue3旅途" />
    <Banner />
    <SearchBox />
  </div>
</template>

<style scoped lang="less"></style>
