export default {
  namespaced: true,
  state: {
    couponStatus: false,
    sum: 0,
    orderInfo: {},
  },
  mutations: {
    initSum(state, data) {
      state.sum = data;
    },

    // 使用優惠碼
    useCoupon(state, data) {
      if (data.couponCode === 'bulb999') {
        state.couponStatus = true;
      } else {
        console.log('輸入的優惠碼不存在');
      }
    },

    // orderInfo: {} 寫入購買項目&總價
    writeItemInfo(state, data) {
      state.orderInfo = { buyItem: data, sum: this.getters['checkout/couponPrice'] };
    },

    // orderInfo: {} 寫入購買者 & 收件資料
    writeBuyerInfo(state, data) {
      state.orderInfo = { ...state.orderInfo, ...data };
    },

  },
  actions: {},
  getters: {
    // 計算是否使用優惠券的價格
    couponPrice(state) {
      if (state.couponStatus === true) {
        return Math.floor(state.sum * 0.9);
      }
      return state.sum;
    },
  },
};
