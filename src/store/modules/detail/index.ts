import { defineStore } from 'pinia';
import { getDetailInfo } from '@/service/modules/detail';
import type { IDetailState } from './types';

const useDetailStore = defineStore('detail', {
  state: (): IDetailState => ({
    detailInfo: {}
  }),
  getters: {
    detailBanner(): any {
      return this.detailInfo?.mainPart?.topModule?.housePicture?.housePics;
    },

    detailTopModule(): any {
      return this.detailInfo?.mainPart?.topModule;
    },

    detailPriceModule(): any {
      return this.detailInfo?.pricePart?.priceModule;
    }
  },
  actions: {
    async getDetailInfoAction(houseId: string | string[]) {
      const result = await getDetailInfo(houseId);
      this.detailInfo = result.data;
    }
  }
});

export { useDetailStore };
