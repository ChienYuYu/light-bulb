export default {
  namespaced: true,
  state: {
    couponStatus: false, // getters會用到
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
        state.orderInfo = { ...state.orderInfo, useCoupon: true };
        this.commit('checkout/saveInSessionStorage');
      } else {
        console.log('輸入的優惠碼不存在');
      }
    },

    // orderInfo: {} 寫入購買項目&總價
    writeItemInfo(state, data) {
      state.orderInfo = { ...state.orderInfo, buyItem: data, sum: this.getters['checkout/couponPrice'] };
      this.commit('checkout/saveInSessionStorage');
    },

    // orderInfo: {} 寫入購買者 & 收件資料
    writeBuyerInfo(state, data) {
      state.orderInfo = { ...state.orderInfo, ...data };
      this.commit('checkout/saveInSessionStorage');
    },

    // 初始sessionStorage 沒有資料就建立一個{}
    initSessionStorage(state) {
      if (sessionStorage.getItem('orderInfo') === null) {
        sessionStorage.setItem('orderInfo', '{}');
      }
      state.orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
      state.couponStatus = state.orderInfo.useCoupon; // 跟下方getters couponPrice有關係
    },

    // 寫入sessionStorage
    saveInSessionStorage(state) {
      sessionStorage.setItem('orderInfo', JSON.stringify(state.orderInfo));
    },

  },
  actions: {},
  getters: {
    // 計算是否使用優惠券的價格  讓mutations的writeItemInfo使用
    couponPrice(state) {
      if (state.couponStatus === true) {
        return Math.floor(state.sum * 0.9);
      }
      return state.sum;
    },
  },
};
