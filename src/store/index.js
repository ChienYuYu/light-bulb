import { createStore } from 'vuex';
import { customerLogout } from '@/apis/api';
import myFavorite from './myFavorite';
import shoppingCart from './shoppingCart';
import checkout from './checkout';

export default createStore({
  state: {
    isLogin: false,
    products: [],
    hotProduct: [],
    showLoadingCircle: false,
  },
  getters: {
  },
  mutations: {
    storeProductData(state, res) {
      state.products = res;
      this.commit('hotProduct');
    },
    hotProduct(state) {
      state.hotProduct = state.products.filter((item) => item.tag.includes('hot'));
    },
    loginStatus(state, tf) {
      state.isLogin = tf;
    },
    showLoadingCircle(state, tf) {
      state.showLoadingCircle = tf;
    },

  },
  actions: {
    getProductData(context) {
      const api = 'https://chienyuyu.github.io/myJSON/bulb.json';
      fetch(api)
        .then((res) => res.json())
        .then((result) => {
          context.commit('storeProductData', result);
        });
    },

    async logout(context) {
      try {
        context.commit('showLoadingCircle', true);
        await customerLogout();
        context.commit('loginStatus', false);
        // context.commit('shoppingCart/resetCartAndUser');
        this.commit('shoppingCart/resetCartAndUser');
        // context.commit('myFavorite/resetFavoriteAndUser');
        this.commit('myFavorite/resetFavoriteAndUser');
        localStorage.clear();
        context.commit('showLoadingCircle', false);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    },

  },
  modules: {
    myFavorite,
    shoppingCart,
    checkout,
  },
});
