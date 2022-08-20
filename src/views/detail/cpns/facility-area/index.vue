<script setup lang="ts"></script>

<script lang="ts">
export default { name: 'facility-area' };
</script>

<template>
  <div class="facility-area">
    <div class="header">房屋设施</div>
    <div class="content">
      <div class="facility">
        <template> </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.facility-area {
  .header {
    font-size: 20px;
    color: #333;
    line-height: 50px;
    border-bottom: 1px solid #eee;
  }

  .content {
    .facility {
      background-color: #f7f9fb;
      padding: 5px 0;
      border-radius: 6px;
      font-size: 12px;
    }
  }
}
</style>
