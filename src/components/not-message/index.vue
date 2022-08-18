<script setup lang="ts">
import getAssetURL from '@/utils/load-assets';
</script>

<script lang="ts">
export default { name: 'not-message' };
</script>

<template>
  <div class="not-message">
    <img class="icon" :src="getAssetURL('message/icon_message.png')" alt="" />
    <div class="info">暂无聊天消息</div>
  </div>
</template>

<style scoped lang="less">
.not-message {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .icon {
    width: 100%;
  }
  .info {
    text-align: center;
  }
}
</style>
