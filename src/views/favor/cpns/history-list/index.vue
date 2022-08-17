<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFavorStore } from '../../../../store/modules/favor';

const favorStore = useFavorStore();
const { historyItmeList } = storeToRefs(favorStore);
</script>
<script lang="ts">
export default { name: 'history-list' };
</script>
<template>
  <div class="history-list">
    <div class="list-content">
      <template v-for="(item, index) in historyItmeList" :key="index">
        <HouseListItem :data="item" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.history-list {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  .list-content {
    padding: 10px 20px 50px;
  }
}
</style>
