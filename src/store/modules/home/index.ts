import { defineStore } from 'pinia';
import { getHotSuggests } from '@/service/modules/home';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: []
  }),

  getters: {},
  actions: {
    // 请求热门建议数据
    async getHotSuggestAction() {
      const result = await getHotSuggests();
      this.hotSuggests = result.data;
    }
  }
});

export { useHomeStore };
