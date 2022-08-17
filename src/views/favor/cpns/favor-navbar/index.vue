<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/base-ui/navbar/index.vue';
import getAssetURL from '@/utils/load-assets';
import { navbarTabData } from '@/assets/data/favor-tab';
import { useRouter } from 'vue-router';
const router = useRouter();
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
    <Navbar>
      <template #left>
        <div class="back-btn" @click="handleClickBackBtn">
          <img class="back-icon" :src="getAssetURL('common/icon_nav_back.png')" alt="" />
          <span class="back-text">旅途</span>
        </div>
      </template>

      <template #center>
        <div class="center-tab">
          <van-tabs v-model:active="active" type="card" color="#ff9854" @change="handleChange">
            <template v-for="item in navbarTabData" :key="item.name">
              <van-tab :title="item.title" :name="item.name" />
            </template>
          </van-tabs>
        </div>
      </template>

      <template #right>
        <div class="menu-btn">
          <van-icon name="wap-nav" color="#ff9854" />
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

  .back-btn {
    display: flex;
    height: 100%;
    align-items: center;
    .back-icon {
      width: 10px;
      margin-right: 5px;
    }

    .back-text {
      color: var(--primary-color);
    }
  }

  .center-tab {
    width: 100%;
  }
  .menu-btn {
    font-size: 30px;
    color: var(--primary-color);
  }
}
</style>
