<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<script lang="ts">
export default { name: 'navbar' };
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

<style scoped>
/* .navbar ::v-deep .van-nav-bar > .van-nav-bar__content > .van-nav-bar__title {
  color: var(--primary-color);
} */

.navbar :deep(.van-nav-bar > .van-nav-bar__content > .van-nav-bar__title) {
  color: var(--primary-color);
}
</style>
