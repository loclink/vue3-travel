<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="navbar">
    <van-nav-bar>
      <template #title>
        <slot name="center">
          {{ title }}
        </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<style scoped lang="less">
.navbar :deep(.van-nav-bar > .van-nav-bar__content > .van-nav-bar__title) {
  color: var(--primary-color);
}
</style>
