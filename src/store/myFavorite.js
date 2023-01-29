import axios from 'axios';

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
      // state.userId = '';
    },

    // 新增移除收藏
    toggleFavorite(state, data) {
      const exist = state.myFavorite.some((item) => item.id === data.id);
      if (exist === false) {
        state.myFavorite.push(data);
      } else {
        state.myFavorite = state.myFavorite.filter((item) => item.id !== data.id);
      }
      this.dispatch('myFavorite/saveOnFirebase');
    },

  },
  actions: {
    // 存入資料庫網路請求
    saveOnFirebase(context) {
      const id = localStorage.getItem('userId');
      const favorite = context.state.myFavorite;
      axios.post(`http://localhost:3000/customer/favorite/${id}`, favorite, { withCredentials: true })
        .then()
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
    },

    // 取得收藏清單網路請求
    getFavoriteOnFirebase(context) {
      const id = localStorage.getItem('userId');
      axios.get(`http://localhost:3000/customer/favorite/${id}`)
        .then((res) => {
          context.commit('initFavorite', res.data.favorite);
        })
        .catch((e) => console.log(e));
    },
  },
  getters: {},
};
