import { defineStore } from 'pinia';
import { getCityAllData } from '@/service/modules/city';

const useCityStore = defineStore('city', {
  state: () => ({
    cityAllData: {
      cityGroup: {},
      cityGroupOverSea: {}
    }
  }),

  getters: {},

  actions: {
    async getCityAllDataAction() {
      const result = await getCityAllData();
      this.cityAllData = result.data;
    }
  }
});

export { useCityStore };
