import { defineStore } from 'pinia';
import { getFavorList } from '@/service/modules/favor';
import type { IFavorState } from './types';
const useFavorStore = defineStore('favor', {
  state: (): IFavorState => ({
    favorListData: {},
    houseItemList: [],
    historyData: {},
    historyItmeList: []
  }),
  actions: {
    async getFavorListAction() {
      const result = await getFavorList();
      this.favorListData = result.data.data;
      this.houseItemList = this.favorListData.items;
    }
  }
});

export { useFavorStore };
