import Swal from 'sweetalert2';

export default {
  namespaced: true,
  state: {
    shoppingCart: [],
    // sum: 0,
  },
  mutations: {
    // 加入購物車-------------------------------------------
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
      this.commit('shoppingCart/sweetAlert');
    },

    // 修改數量-------------------------------------------
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

    // 需同時加入購物車 & 數量設定 (ProductItem.vue頁面的加入購物車邏輯)
    addCart2(state, data) {
      const temp = state.shoppingCart.findIndex((value) => value.id === data.item.id);
      if (temp === -1) {
        state.shoppingCart.push({
          ...data.item,
          qty: data.qty,
          totalPrice: data.item.price * data.qty,
        });
      } else {
        state.shoppingCart[temp].qty += data.qty;
        state.shoppingCart[temp].totalPrice = state
          .shoppingCart[temp].price * state.shoppingCart[temp].qty;
      }
      this.commit('shoppingCart/updateCartLocalStorage');
      this.commit('shoppingCart/sweetAlert');
    },

    // 移除項目-------------------------------------------
    removeCart(state, data) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== data.id);
      this.commit('shoppingCart/updateCartLocalStorage');
    },

    // localStorage -------------------------------------
    initCartLocalStorage(state) {
      //  瀏覽器首次載入會沒有localstorage資料會報錯誤，
      // 判斷如果為空就創立一個 []
      if (localStorage.getItem('myCart') === null) {
        localStorage.setItem('myCart', '[]');
      }
      state.shoppingCart = JSON.parse(localStorage.getItem('myCart'));
    },

    // 寫入localStorage --------------------------------
    updateCartLocalStorage(state) {
      localStorage.setItem('myCart', JSON.stringify(state.shoppingCart));
    },

    // 共用加入購物車sweetalert
    sweetAlert() {
      Swal.fire({
        icon: 'success',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 800,
      });
    },
  },
  actions: {},
  getters: {
    // 總金額
    sum(state) {
      let sum = 0;
      state.shoppingCart.forEach((item) => {
        sum += item.totalPrice;
      });
      return sum;
    },
  },
};
