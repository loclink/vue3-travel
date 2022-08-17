<script setup lang="ts">
import { formatPrice } from '@/utils/format';

defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});
</script>
<script lang="ts">
export default { name: 'house-list-item' };
</script>
<template>
  <div class="house-list-item">
    <div class="house-cover">
      <img class="house-cover-image" :src="data.defaultPicture" alt="" />
      <div class="bottom">
        <van-tag round type="primary" color="#fff" text-color="#000">
          <span class="overall">{{ data.commentBrief?.overall }}分</span>
          <span class="line"></span>
          <span class="score-title">{{ data.commentBrief?.scoreTitle }}</span>
        </van-tag>
      </div>

      <div class="tool-bar">
        <img class="avatar" :src="data.logoUrl" alt="" />
        <van-icon class="like" name="like" />
        <div class="message">
          <van-icon name="chat-o" class="message-icon" />
          <div class="count">
            {{ data.commentBrief?.totalCount }}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="info">
        <div class="location">{{ data.address }}</div>
        <div class="description">
          <template v-for="(unit, index) in data.unitSummeries" :key="index">
            <div class="name">{{ unit.text }}</div>
          </template>
        </div>
      </div>
      <div class="title">{{ data.unitName }}</div>
      <div class="tags">
        <template v-for="(tag, index) in data.houseTags" :key="index">
          <div class="tag">{{ tag.text }}</div>
        </template>
      </div>
      <div class="price">
        <div class="final-price">{{ formatPrice(data.finalPrice) }}</div>
        <div class="product-price">{{ formatPrice(data.productPrice) }}</div>
        <div class="price-tip-badge">
          <van-tag v-if="data.priceTipBadge?.text" round type="primary" color="red">
            <van-icon name="volume" />
            <span class="text">{{ data.priceTipBadge?.text }}</span>
          </van-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-cover {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  .house-cover-image {
    width: 100%;
  }
  .bottom {
    position: absolute;
    bottom: 10px;
    left: 10px;
    .overall {
      font-weight: 600;
    }
    .line {
      height: 12px;
      width: 1px;
      background-color: #ccc;
      margin: 0 3px;
      display: inline-block;
    }

    .score-title {
      font-size: 12px;
      color: #666;
    }
  }

  .tool-bar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10px;
    right: 10px;
    align-items: center;
    text-align: center;
    .avatar {
      border-radius: 50%;
      height: 40px;
    }

    .like {
      font-size: 25px;
      color: red;
      margin: 10px 0;
    }

    .message {
      color: #fff;

      .message-icon {
        font-size: 20px;
      }
    }
  }
}

.content {
  .info {
    margin-top: 7px;
    display: flex;
    align-items: center;
    font-size: 12px;

    .location {
      background: rgb(63, 73, 84);
      color: #fff;
      border-radius: 3px;
      padding: 2px;
      margin-right: 5px;
    }

    .description {
      display: flex;
      color: #666;

      .name {
        display: flex;
        align-items: center;
      }
      & .name:not(:last-child) {
        &::after {
          content: '';
          display: block;
          margin: 0 2px;
          width: 2px;
          height: 2px;
          border-radius: 2px;
          background-color: #666;
        }
      }
    }
  }

  .title {
    font-size: 18px;
    margin: 8px 0;
  }

  .tags {
    display: flex;
    .tag {
      font-size: 12px;
      color: rgb(255, 102, 102);
      background: rgba(255, 102, 102, 0.1);
      margin-right: 5px;
      padding: 0 2px;
      border-radius: 2px;
    }
  }

  .price {
    margin: 6px 0 8px;
    display: flex;
    align-items: center;
    height: 25px;

    .final-price {
      font-size: 20px;
      color: var(--primary-color);
    }
    .product-price {
      text-decoration: line-through;
      font-size: 12px;
      color: #999;
      margin: 0 4px;
      padding-top: 5px;
      box-sizing: border-box;
    }

    .price-tip-badge {
      .text {
        margin-left: 5px;
      }
    }
  }
}
</style>
