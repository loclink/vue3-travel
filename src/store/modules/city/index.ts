import { defineStore } from 'pinia';
import { getCityAllData } from '@/service/modules/city';
import type { ICityState } from './types';

const useCityStore = defineStore('city', {
  state: (): ICityState => ({
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
