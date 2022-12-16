export default {
  namespaced: true,
  state: {
    shoppingCart: [],
  },
  mutations: {
    addCart(state, data) {
      // findIndex()判斷資料是否存在// 不存在=> push() // 存在=> 數量+1 & 總價:價格x數量
      const tempV = state.shoppingCart.findIndex((item) => item.id === data.id);
      if (tempV === -1) {
        const qty = 1;
        state.shoppingCart.push({
          ...data,
          qty,
          totalPrice: data.price * qty,
        });
      } else {
        state.shoppingCart[tempV].qty += 1;
        const tempObj = state.shoppingCart[tempV];
        state.shoppingCart[tempV].totalPrice = tempObj.price * tempObj.qty;
      }
    },
  },
  actions: {},
  getters: {},
};
