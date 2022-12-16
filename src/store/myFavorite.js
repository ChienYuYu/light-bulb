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
      this.commit('myFavorite/updateFavoriteLocalStorage');
      // modules要注意寫法 this.commit('ooo/xxx')
    },

    // localStorage ------------------------------
    initFavoriteLocalStorage(state) {
    //  瀏覽器首次載入會沒有localstorage資料會報錯誤，
    // 判斷如果為空就創立一個 []
      if (localStorage.getItem('favoriteItem') === null) {
        localStorage.setItem('favoriteItem', '[]');
      }
      state.myFavorite = JSON.parse(localStorage.getItem('favoriteItem'));
    },

    updateFavoriteLocalStorage(state) {
      localStorage.setItem('favoriteItem', JSON.stringify(state.myFavorite));
    },
  },
  actions: {},
  getters: {},
};
