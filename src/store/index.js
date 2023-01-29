import { createStore } from 'vuex';
import axios from 'axios';
import myFavorite from './myFavorite';
import shoppingCart from './shoppingCart';
import checkout from './checkout';

export default createStore({
  state: {
    isLogin: false,
    products: [],
    hotProduct: [],
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
    verifyLogin(context) {
      axios.post('http://localhost:3000/customer/verify', {}, { withCredentials: true })
        .then((res) => {
          if (res.data.isLogin === true) {
            context.commit('loginStatus', true);
            this.dispatch('myFavorite/getFavoriteOnFirebase');
            this.dispatch('shoppingCart/getCartOnFirebase');
          } else {
            context.commit('loginStatus', false);
          }
        })
        .catch();
    },

  },
  modules: {
    myFavorite,
    shoppingCart,
    checkout,
  },
});
