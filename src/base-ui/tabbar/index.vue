<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import tabbarData from '@/assets/data/tabbar';
import getAssetURL from '@/utils/load-assets';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const route = useRoute();
const { path } = toRefs(route);
const active = ref(route.path);
watch(path, (newValue) => {
  active.value = newValue;
});
</script>

<script lang="ts">
export default { name: 'tabbar' };
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ff9854">
      <van-tabbar-item v-for="item of tabbarData" :key="item.text" :to="item.path" :name="item.path">
        <template #icon>
          <img v-if="route.path !== item.path" :src="getAssetURL(item.image)" :alt="item.image" />
          <img v-else :src="getAssetURL(item.imageActive)" :alt="item.text" />
        </template>
        <template #default>
          <span :class="{ active: route.path === item.path }">{{ item.text }}</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.tabbar {
  // --van-tabbar-item-text-color: red;
  .active {
    color: var(--primary-color);
  }
}
</style>
