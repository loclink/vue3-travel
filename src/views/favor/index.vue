<script setup lang="ts">
import { shallowRef } from 'vue';
import FavorNavbar from './cpns/favor-navbar/index.vue';
import HistoryList from './cpns/history-list/index.vue';
import CollectList from './cpns/collect-list/index.vue';
import { useFavorStore } from '@/store/modules/favor';

const favorStore = useFavorStore();
// 组件若绑定为响应数据，应该使用 shallowRef 而不是 ref
const listComponent = shallowRef(HistoryList);

// 获取favor页面的房屋数据
favorStore.getFavorListAction();
favorStore.getFavorHistoryAction();

// 根据tab来判断动态组件渲染哪个 CollectList / HistoryList
const handleChangeNavTab = (name: string) => {
  switch (name) {
    case 'collect':
      listComponent.value = CollectList;
      break;
    case 'history':
      listComponent.value = HistoryList;
      break;
    default:
      listComponent.value = CollectList;
      break;
  }
};
</script>

<script lang="ts">
export default { name: 'favor' };
</script>

<template>
  <div class="favor">
    <FavorNavbar @change-nav-tab="handleChangeNavTab" />
    <component :is="listComponent"></component>
  </div>
</template>

<style scoped lang="less">
.favor {
}
</style>
