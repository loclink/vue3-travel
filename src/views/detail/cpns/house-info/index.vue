<script setup lang="ts">
import { useDetailStore } from '@/store/modules/detail';
import { storeToRefs } from 'pinia';

const detailStore = useDetailStore();
const { detailTopModule } = storeToRefs(detailStore);
</script>

<script lang="ts">
export default { name: 'house-info' };
</script>

<template>
  <div class="house-info">
    <div class="house-name">{{ detailTopModule?.houseName }}</div>
    <ul class="house-tags">
      <template v-for="(item, index) in detailTopModule?.houseTags" :key="index">
        <li
          class="house-tag-item"
          v-if="item.tagText?.text"
          :style="{ color: item.tagText?.color, backgroundColor: item.tagText?.background?.color }"
        >
          {{ item.tagText?.text }}
        </li>

        <li v-else class="house-tag-img-item">
          <img :src="item.tagPic" alt="" />
        </li>
      </template>
    </ul>

    <div class="extra comment">
      <div class="left">
        <div class="score">{{ detailTopModule?.commentBrief?.overall }}</div>
        <div class="title">{{ detailTopModule?.commentBrief?.scoreTitle }}</div>
        <div class="brief">"{{ detailTopModule?.commentBrief?.commentBrief }}"</div>
      </div>
      <div class="right">
        <div class="commen-count">{{ detailTopModule?.commentBrief?.totalCountStr }}条评论 ></div>
      </div>
    </div>

    <div class="extra position">
      <div class="left">{{ detailTopModule?.nearByPosition?.address }}</div>
      <div class="right">地图·周边 ></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-info {
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;

  .house-name {
    color: #333;
    text-align: justify;
    margin-bottom: 6px;
    font-size: 20px;
    font-weight: 700;
  }
  .house-tags {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;

    .house-tag-item {
      height: 14px;
      margin-right: 3px;
      margin-bottom: 3px;
      padding: 2px 4px;
    }

    .house-tag-img-item {
      margin-right: 3px;
      margin-bottom: 3px;
      height: 18px;
      img {
        height: 100%;
      }
    }
  }

  .extra {
    display: flex;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    background-color: #f5f7fa;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;

    .left {
      display: flex;
      .score {
        color: #333;
        font-size: 18;
      }

      .title {
        color: #333;
        margin: 0 3px;
        font-size: 12px;
      }

      .brief {
        color: #666;
        font-size: 12px;
      }
    }

    .right {
      color: var(--primary-color);
      font-size: 12px;
      font-weight: lighter;
    }
  }
}
</style>
