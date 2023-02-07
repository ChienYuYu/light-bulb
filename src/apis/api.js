import axios from 'axios';

// //////////////////////////////////////////////////

// 購物車存入資料庫
async function saveCart(shoppingCart) {
  try {
    const uid = localStorage.getItem('userId');
    await axios
      .post(`${process.env.VUE_APP_API}/customer/cart/${uid}`, shoppingCart, { withCredentials: true });
  } catch (e) {
    // eslint-disable-next-line no-alert
    // alert(e);
    console.log(e);
  }
}

// 收藏清單存入資料庫
async function saveFavorite(myFavorite) {
  try {
    const uid = localStorage.getItem('userId');
    await axios
      .post(`${process.env.VUE_APP_API}/customer/favorite/${uid}`, myFavorite, { withCredentials: true });
  } catch (e) {
    // eslint-disable-next-line no-alert
    // alert(e);
    console.log(e);
  }
}

// 取得購物車
function getCart(uid) {
  // const uid = localStorage.getItem('userId');
  return axios.get(`${process.env.VUE_APP_API}/customer/cart/${uid}`);
}

// 取得收藏清單
function getFavorite(uid) {
  // const uid = localStorage.getItem('userId');
  return axios.get(`${process.env.VUE_APP_API}/customer/favorite/${uid}`);
}

// 驗證有無登入
// 注意第二參數，這裡使用空物件佔位，因為post Credentials要放第三參數 !!!
function verifyLogin() {
  return axios.post(`${process.env.VUE_APP_API}/customer/verify`, {}, { withCredentials: true });
}

// 顧客登入
function customerLogin(data) {
  return axios.post(`${process.env.VUE_APP_API}/customer/login`, data, { withCredentials: true });
}

// 登入後取得顧客資料
// 用get 這裡的Credentials要放第二參數
function getCustomer(verifyID) {
  return axios
    .get(`${process.env.VUE_APP_API}/customer/user/${verifyID}`, { withCredentials: true });
}

// 顧客更新資料
function customerUpdate(verifyID, userInfo) {
  return axios
    .put(`${process.env.VUE_APP_API}/customer/user/${verifyID}`, userInfo, { withCredentials: true });
}

// 送出訂單
function customerSendOrder(data) {
  return axios.post(`${process.env.VUE_APP_API}/order`, data);
}

// 顧客登出
function customerLogout() {
  return axios.post(`${process.env.VUE_APP_API}/customer/logout`, {}, { withCredentials: true });
}

function adminLogin() {}

function adminLogout() {}

export {
  verifyLogin,
  customerLogin,
  customerLogout,
  getCart,
  getFavorite,
  adminLogin,
  adminLogout,
  saveCart,
  saveFavorite,
  getCustomer,
  customerUpdate,
  customerSendOrder,
};
