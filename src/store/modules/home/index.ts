import { defineStore } from 'pinia';
import { getCategories, getHotSuggests, getHouseList } from '@/service/modules/home';
import type { IHomeState } from './types';

const useHomeStore = defineStore('home', {
  state: (): IHomeState => ({
    hotSuggests: [],
    categories: [],
    houseList: []
  }),
  getters: {},
  actions: {
    // 请求热门建议数据
    async getHotSuggestAction() {
      const result = await getHotSuggests();
      this.hotSuggests = result.data;
    },

    // 获取分类数据
    async getCategoriesAction() {
      const result = await getCategories();
      this.categories = result.data;
    },

    // 获取房源列表数据
    async getHouseListAction(page: number) {
      const result = await getHouseList({ page });
      this.houseList = [...this.houseList, ...result.data];
    }
  }
});

export { useHomeStore };
