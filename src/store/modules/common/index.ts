import { defineStore } from 'pinia';
import type { ICommonState } from './types';

// 公共的仓库
const useCommonStore = defineStore('common', {
  state: (): ICommonState => ({
    isLoading: false,
    themeColor: '#ff9854'
  })
});

export { useCommonStore };
