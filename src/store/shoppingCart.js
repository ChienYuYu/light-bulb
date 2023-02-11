import Swal from 'sweetalert2';
import { saveCart } from '@/apis/api';

export default {
  namespaced: true,
  state: {
    shoppingCart: [],
  },
  mutations: {
    // 網路請求取得購物車後 寫入vuex
    initCart(state, data) {
      state.shoppingCart = data;
    },

    // 登出後歸零vuex購物車 跟userId
    resetCartAndUser(state) {
      state.shoppingCart = [];
    },

    // 加入購物車-------------------------------------------
    async addCart(state, data) {
      // findIndex()判斷資料是否存在// 不存在=> push() // 存在=> 數量+1 & 總價:價格x數量
      const tempV = await state.shoppingCart.findIndex((item) => item.id === data.id);
      if (await tempV === -1) {
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
      await saveCart(state.shoppingCart);
      await this.commit('shoppingCart/sweetAlert');
    },

    // 修改數量-------------------------------------------
    async setQty(state, data) {
      const i = await state.shoppingCart.findIndex((item) => item.id === data.id);
      const tempItem = await state.shoppingCart[i];
      if (await data.addOrSub === 'add') {
        tempItem.qty += 1;
      } else {
        if (await tempItem.qty === 1) {
          return;
        }
        tempItem.qty -= 1;
      }
      tempItem.totalPrice = await tempItem.qty * tempItem.price;
      await saveCart(state.shoppingCart);
    },

    // 需同時加入購物車 & 數量設定 (ProductItem.vue頁面的加入購物車邏輯)
    async addCart2(state, data) {
      const temp = await state.shoppingCart.findIndex((value) => value.id === data.item.id);
      if (await temp === -1) {
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
      await saveCart(state.shoppingCart);
      this.commit('shoppingCart/sweetAlert');
    },

    // 移除項目-------------------------------------------
    async removeCart(state, data) {
      state.shoppingCart = await state.shoppingCart.filter((item) => item.id !== data.id);
      await saveCart(state.shoppingCart);
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
