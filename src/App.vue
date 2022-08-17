<script setup lang="ts">
import Tabbar from '@/base-ui/tabbar/index.vue';
import { storeToRefs } from 'pinia';
import Loading from './components/loading/index.vue';
import { useCommonStore } from './store/modules/common';
const commonStore = useCommonStore();
const { themeColor } = storeToRefs(commonStore);
</script>

<template>
  <div class="page-wrapper">
    <RouterView v-slot="props">
      <KeepAlive>
        <component :is="props.Component"></component>
      </KeepAlive>
    </RouterView>
  </div>
  <Tabbar :active-color="themeColor" />
  <Loading />
</template>

<style scoped></style>
