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
    // http://localhost:3000/customer/verify
    verifyLogin(context) {
      axios.post(`${process.env.VUE_APP_API}/customer/verify`, {}, { withCredentials: true })
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

    // http://localhost:3000/customer/logout
    logout(context) {
      context.commit('showLoadingCircle', true);
      axios.post(`${process.env.VUE_APP_API}/customer/logout`, {}, { withCredentials: true })
        .then(() => {
          context.commit('loginStatus', false);
          context.commit('shoppingCart/resetCartAndUser');
          context.commit('myFavorite/resetFavoriteAndUser');
          localStorage.clear();
          context.commit('showLoadingCircle', false);
        })
        .catch((e) => console.log(e));
    },

  },
  modules: {
    myFavorite,
    shoppingCart,
    checkout,
  },
});
