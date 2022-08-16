<script setup lang="ts">
import Tabbar from '@/base-ui/tabbar/index.vue';
</script>

<template>
  <div class="page-wrapper">
    <RouterView v-slot="props">
      <KeepAlive>
        <component :is="props.Component"></component>
      </KeepAlive>
    </RouterView>
  </div>
  <Tabbar />
</template>

<style scoped></style>
