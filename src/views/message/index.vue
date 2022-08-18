<script setup lang="ts">
import Navbar from '@/base-ui/navbar/index.vue';
import NotMessage from '../../components/not-message/index.vue';
</script>

<script lang="ts">
export default { name: 'message' };
</script>

<template>
  <div class="message">
    <Navbar title="消息中心" />
    <NotMessage />
  </div>
</template>

<style lang="less" scoped></style>
