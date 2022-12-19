export default {
  namespaced: true,
  state: {
    shoppingCart: [],
  },
  mutations: {
    // 加入購物車---------------
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
      this.commit('shoppingCart/updateCartLocalStorage');
    },

    // 修改數量
    setQty(state, data) {
      const i = state.shoppingCart.findIndex((item) => item.id === data.id);
      const tempItem = state.shoppingCart[i];
      if (data.addOrSub === 'add') {
        tempItem.qty += 1;
      } else {
        if (tempItem.qty === 1) {
          return;
        }
        tempItem.qty -= 1;
      }
      tempItem.totalPrice = tempItem.qty * tempItem.price;
      this.commit('shoppingCart/updateCartLocalStorage');
    },

    // 移除項目-------------------
    removeCart(state, data) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== data.id);
      this.commit('shoppingCart/updateCartLocalStorage');
    },

    // localStorage -----------------
    initCartLocalStorage(state) {
      //  瀏覽器首次載入會沒有localstorage資料會報錯誤，
      // 判斷如果為空就創立一個 []
      if (localStorage.getItem('myCart') === null) {
        localStorage.setItem('myCart', '[]');
      }
      state.shoppingCart = JSON.parse(localStorage.getItem('myCart'));
    },

    // 寫入localStorage ---------------
    updateCartLocalStorage(state) {
      localStorage.setItem('myCart', JSON.stringify(state.shoppingCart));
    },
  },
  actions: {},
  getters: {},
};
