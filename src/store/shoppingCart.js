import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    shoppingCart: [],
  },
  mutations: {
    // 網路請求取得購物車後 寫入vuex ////////////////
    initCart(state, data) {
      state.shoppingCart = data;
    },

    // 登出後歸零vuex購物車 跟userId
    resetCartAndUser(state) {
      state.shoppingCart = [];
    },

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
      this.commit('shoppingCart/sweetAlert');
      this.dispatch('shoppingCart/saveOnFirebase');
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
      this.dispatch('shoppingCart/saveOnFirebase');
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
      this.dispatch('shoppingCart/saveOnFirebase');
      this.commit('shoppingCart/sweetAlert');
    },

    // 移除項目-------------------------------------------
    removeCart(state, data) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== data.id);
      this.dispatch('shoppingCart/saveOnFirebase');
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

    // 登入後儲存ID
    saveUserId(state, data) {
      state.userId = data;
    },
  },
  actions: {
    // 存入資料庫網路請求
    saveOnFirebase(context) {
      const id = localStorage.getItem('userId');
      const cart = context.state.shoppingCart;
      axios.post(`http://localhost:3000/customer/cart/${id}`, cart, { withCredentials: true })
        .then()
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
    },

    // 取得購物車網路請求
    getCartOnFirebase(context) {
      const id = localStorage.getItem('userId');
      axios.get(`http://localhost:3000/customer/cart/${id}`)
        .then((res) => {
          context.commit('initCart', res.data.cart);
        })
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
    },
  },
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
