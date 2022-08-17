<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/base-ui/navbar/index.vue';
import { navbarTabData } from '@/assets/data/favor-tab';
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/store/modules/common';
import { storeToRefs } from 'pinia';

const router = useRouter();
const commonStore = useCommonStore();
const { themeColor } = storeToRefs(commonStore);
const emit = defineEmits(['changeNavTab']);
const active = ref();

// 监听tab发生变化后向父组件发出change事件
const handleChange = (name: string, title: string) => {
  emit('changeNavTab', name);
};

// 点击返回按钮
const handleClickBackBtn = () => {
  router.back();
};
</script>

<script lang="ts">
export default { name: 'favor-navbar' };
</script>

<template>
  <div class="favor-navbar">
    <Navbar back-text="旅途" @click-btn="handleClickBackBtn">
      <template #center>
        <div class="center-tab">
          <van-tabs v-model:active="active" type="card" :color="themeColor" @change="handleChange">
            <template v-for="item in navbarTabData" :key="item.name">
              <van-tab :title="item.title" :name="item.name" />
            </template>
          </van-tabs>
        </div>
      </template>
    </Navbar>
  </div>
</template>

<style scoped lang="less">
.favor-navbar {
  :deep(.van-nav-bar__title) {
    width: 50%;
  }

  .center-tab {
    width: 100%;
  }
}
</style>
