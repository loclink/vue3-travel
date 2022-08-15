<script lang="ts" setup>
import getAssetURL from '@/utils/load-assets';
import { useHomeStore } from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// 获取homeStore
const homeStore = useHomeStore();

// 处理点击跳转
const router = useRouter();
const handleClickLocation = () => {
  router.push({
    path: '/city'
  });
};

// 获取热门建议数据
homeStore.getHotSuggestAction();

// 解构热门建议数据， 直接解构的话数据将变成非响应式数据，可以使用pinia提供的storeToRefs 类似于 vue 中的 toRefs 将数据变成响应式
const { hotSuggests } = storeToRefs(homeStore);

console.log(hotSuggests);
</script>

<template>
  <div class="search-box">
    <div class="location" @click="() => handleClickLocation()">
      <div class="city">广州</div>
      <div class="current">
        <span class="current-text">我的位置</span>
        <img class="current-icon" :src="getAssetURL('home/icon_location.png')" alt="" />
      </div>
    </div>

    <div class="date-range">
      <div class="time-item check-in">
        <div class="title">入住</div>
        <div class="time">8月25日</div>
      </div>
      <div class="calculate-time">共 1 晚</div>
      <div class="time-item leave">
        <div class="title">离店</div>
        <div class="time">8月26日</div>
      </div>
    </div>

    <div class="price-counter">
      <div class="price">价格不限</div>
      <div class="population">人数不限</div>
    </div>

    <div class="keyword">关键字/位置/民宿名</div>

    <div class="hot-suggest">
      <template v-for="(item, index) in (hotSuggests as any[])" :key="index">
        <span class="hot-suggest-item">{{ item.tagText.text }}</span>
      </template>
    </div>

    <div class="search-btn">开始搜索</div>

    <div class="btn-con-bottom-powerby"><span class="txt">民宿预订服务由途家网提供</span></div>
  </div>
</template>

<style scoped lang="less">
.search-box {
  padding: 0 20px;
  box-sizing: border-box;

  .location {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .city {
      color: #333;
      font-size: 15px;
    }

    .current {
      .current-text {
        font-size: 12px;
        color: #666;
        margin-right: 5px;
      }

      .current-icon {
        height: 18px;
      }
    }
  }

  .date-range {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    box-sizing: border-box;
    height: 45px;
    align-items: center;
    .calculate-time {
      color: #666;
      font-size: 12px;
    }
    .time-item {
      .title {
        color: #999;
        font-size: 12px;
      }
      .time {
        font-size: 15px;
        color: #333;
      }
    }
  }

  .price-counter {
    height: 45px;
    display: flex;
    align-items: center;
    color: #999;
    justify-content: space-between;
    padding-right: 30px;
    box-sizing: border-box;
  }

  .keyword {
    height: 45px;
    display: flex;
    align-items: center;
    color: #999;
  }

  .hot-suggest {
    .hot-suggest-item {
      display: inline-block;
      font-size: 12px;
      background-color: #f1f3f5;
      color: #3f4954;
      padding: 4px 8px;
      margin: 3px;
      border-radius: 20px;
    }
  }

  .search-btn {
    margin-top: 10px;
    background-image: var(--tjc-theme-linear-gradient);
    color: #fff;
    height: 38px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .btn-con-bottom-powerby {
    color: #ccc;
    font-size: 9px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
