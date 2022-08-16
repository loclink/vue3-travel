import { defineStore } from 'pinia';

// 公共的仓库
const useCommonStore = defineStore('common', {
  state: () => ({
    isLoading: false
  })
});

export { useCommonStore };
