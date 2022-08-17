<script setup lang="ts">
import FavorNavbar from './cpns/favor-navbar/index.vue';

const handleChangeNavTab = (name: string) => {
  console.log(name);
};
</script>
<script lang="ts">
export default { name: 'favor' };
</script>
<template>
  <div class="favor">
    <FavorNavbar @change-nav-tab="handleChangeNavTab" />
  </div>
</template>

<style scoped lang="less">
.favor {
}
</style>
