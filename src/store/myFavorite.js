export default {
  namespaced: true,
  state: {
    myFavorite: [],
  },
  mutations: {
    toggleFavorite(state, data) {
      const exist = state.myFavorite.some((item) => item.id === data.id);
      if (exist === false) {
        state.myFavorite.push(data);
      } else {
        state.myFavorite = state.myFavorite.filter((item) => item.id !== data.id);
      }
    },
  },
  actions: {},
  getters: {},
};
