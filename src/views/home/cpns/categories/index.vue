<script lang="ts" setup>
import { ref } from 'vue';

const active = ref();
</script>

<template>
  <div class="categories">
    <van-tabs v-model:active="active">
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index"> </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less"></style>
