import { defineStore } from 'pinia';
import { getCategories, getHotSuggests, getHouseList } from '@/service/modules/home';

const useHomeStore = defineStore('home', {
  state: (): {
    hotSuggests: any[];
    categories: any[];
    houseList: any[];
  } => ({
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

    async getCategoriesAction() {
      const result = await getCategories();
      this.categories = result.data;
    },

    async getHouseListAction(page: number) {
      const result = await getHouseList({ page });
      this.houseList = [...this.houseList, ...result.data];
    }
  }
});

export { useHomeStore };
