import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

// //////////////////////////////////////////////////

// 取得購物車
async function getCart() {
  try {
    const id = localStorage.getItem('userId');
    const res = await axios.get(`${process.env.VUE_APP_API}/customer/cart/${id}`);
    store.commit('shoppingCart/initCart', res.data.cart);
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
}

// 購物車存入資料庫
async function saveCart() {
  try {
    const id = localStorage.getItem('userId');
    const cart = store.state.shoppingCart.shoppingCart;
    await axios
      .post(`${process.env.VUE_APP_API}/customer/cart/${id}`, cart, { withCredentials: true });
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
}

// 取得收藏清單
async function getFavorite() {
  try {
    const id = localStorage.getItem('userId');
    const res = await axios.get(`${process.env.VUE_APP_API}/customer/favorite/${id}
    `);
    store.commit('myFavorite/initFavorite', res.data.favorite);
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
}

// 收藏清單存入資料庫
async function saveFavorite() {
  try {
    const id = localStorage.getItem('userId');
    const favorite = store.state.myFavorite.myFavorite;
    await axios
      .post(`${process.env.VUE_APP_API}/customer/favorite/${id}`, favorite, { withCredentials: true });
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
}

// 首次造訪驗證有無登入
async function verifyLogin1() {
  try {
    const res = await axios
      .post(`${process.env.VUE_APP_API}/customer/verify`, {}, { withCredentials: true });
    if (await res.data.isLogin === true) {
      store.commit('loginStatus', true);
      getFavorite();
      getCart();
    } else {
      store.commit('loginStatus', false);
    }
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
}

function customerLogin() {}

function customerLogout() {}

function verifyLogin2() {}

function adminLogin() {}

function adminLogout() {}

export {
  verifyLogin1,
  customerLogin,
  customerLogout,
  verifyLogin2,
  getCart,
  getFavorite,
  adminLogin,
  adminLogout,
  saveCart,
  saveFavorite,
};
