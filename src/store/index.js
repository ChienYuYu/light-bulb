import { createStore } from 'vuex';
import myFavorite from './myFavorite';
import shoppingCart from './shoppingCart';
import checkout from './checkout';

export default createStore({
  state: {
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
  },
  modules: {
    myFavorite,
    shoppingCart,
    checkout,
  },
});
