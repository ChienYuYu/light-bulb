export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    storeProductData(state, res) {
      state.products = res.filter((item) => item.tag.includes('hot'));

      console.log('[]', state.products);
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
};
