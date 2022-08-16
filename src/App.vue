<script setup lang="ts">
import Tabbar from '@/base-ui/tabbar/index.vue';
import Loading from './components/loading/index.vue';
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
  <Loading />
</template>

<style scoped></style>
