import { defineStore } from 'pinia';
import { getOrderList } from '@/service/modules/order';
import type { IOrderState } from './types';

const useOrderStore = defineStore('order', {
  state: (): IOrderState => ({
    orderData: {},
    orderList: []
  }),

  actions: {
    async getOrderListAction(type: string) {
      const result = await getOrderList({ type });
      this.orderData = result.data.data;
      this.orderList = this.orderData.orders;
    }
  }
});

export { useOrderStore };
