import { defineStore } from 'pinia';
import { getCategories, getHotSuggests } from '@/service/modules/home';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
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
    }
  }
});

export { useHomeStore };
