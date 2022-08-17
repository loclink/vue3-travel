<script setup lang="ts">
import getAssetURL from '@/utils/load-assets';
import { useRouter } from 'vue-router';
const router = useRouter();
const handleClickBtn = () => {
  router.back();
};
</script>

<script lang="ts">
export default { name: 'not-collect' };
</script>

<template>
  <div class="not-collect">
    <img class="cover" :src="getAssetURL('favor/empty_favorite.44731802.png')" alt="" />
    <div class="content">
      <div class="name">暂无收藏</div>
      <div class="message">
        <span>点击 <van-icon name="like" /> 即可收藏对应房东</span>
      </div>
      <div class="jump-button" @click="handleClickBtn">随便去逛逛</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.not-collect {
  .cover {
    width: 100%;
  }

  .content {
    width: 100%;
    text-align: center;

    .name {
      color: #333;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .message {
      color: #666;
    }

    .jump-button {
      width: 156px;
      height: 40px;
      margin: 20px auto 0;
      line-height: 40px;
      background-color: var(--primary-color);
      color: #fff;
      border-radius: 50px;
    }
  }
}
</style>
