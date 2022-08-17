<script lang="ts" setup>
import getAssetURL from '@/utils/load-assets';
defineProps({
  title: {
    type: String,
    default: ''
  },
  isShowBack: {
    type: Boolean,
    default: true
  },
  backText: {
    type: String,
    default: null
  },
  isShowMenu: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['clickBtn']);

const handleClickBackBtn = () => {
  emit('clickBtn');
};
</script>

<script lang="ts">
export default { name: 'navbar' };
</script>

<template>
  <div class="navbar">
    <van-nav-bar>
      <template #left>
        <div v-if="isShowBack" class="back-btn" @click="handleClickBackBtn">
          <img class="back-icon" :src="getAssetURL('common/icon_nav_back.png')" alt="" />
          <span class="back-text">{{ backText }}</span>
        </div>
      </template>

      <template #title>
        <slot name="center">
          {{ title }}
        </slot>
      </template>

      <template #right>
        <div v-if="isShowMenu" class="menu-btn">
          <van-icon name="wap-nav" color="#ff9645" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang="less" scoped>
/* .navbar ::v-deep .van-nav-bar > .van-nav-bar__content > .van-nav-bar__title {
  color: var(--primary-color);
} */

.navbar :deep(.van-nav-bar > .van-nav-bar__content > .van-nav-bar__title) {
  color: var(--primary-color);
}

.back-btn {
  display: flex;
  height: 100%;
  align-items: center;
  .back-icon {
    width: 10px;
    margin-right: 7px;
  }

  .back-text {
    color: var(--primary-color);
    font-weight: 600;
  }
}

.menu-btn {
  font-size: 30px;
  color: var(--primary-color);
}
</style>
