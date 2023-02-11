import { saveFavorite } from '@/apis/api';

export default {
  namespaced: true,
  state: {
    myFavorite: [],
  },
  mutations: {
    initFavorite(state, data) {
      state.myFavorite = data;
    },

    // 登出後歸零vuex收藏清單 跟userId
    resetFavoriteAndUser(state) {
      state.myFavorite = [];
    },

    // 新增移除收藏
    async toggleFavorite(state, data) {
      const exist = await state.myFavorite.some((item) => item.id === data.id);
      if (await exist === false) {
        await state.myFavorite.push(data);
      } else {
        state.myFavorite = await state.myFavorite.filter((item) => item.id !== data.id);
      }
      await saveFavorite(state.myFavorite);
    },

  },
  actions: {
  },
  getters: {},
};
