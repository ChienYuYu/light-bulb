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
    alert(e);
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
    alert(e);
  }
}

// 取得購物車
function getCart(uid) {
  return axios.get(`${process.env.VUE_APP_API}/customer/cart/${uid}`);
}

// 取得收藏清單
function getFavorite(uid) {
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

// 顧客更新資料
function customerUpdate(verifyID, userInfo) {
  return axios
    .put(`${process.env.VUE_APP_API}/customer/user/${verifyID}`, userInfo, { withCredentials: true });
}

// 登入後取得顧客資料
// 用get 這裡的Credentials要放第二參數
function getCustomer(verifyID) {
  return axios
    .get(`${process.env.VUE_APP_API}/customer/user/${verifyID}`, { withCredentials: true });
}

// 送出訂單
function customerSendOrder(data) {
  return axios.post(`${process.env.VUE_APP_API}/order`, data);
}

// 取得購買紀錄
function customerBuyHistory(id) {
  return axios.get(`${process.env.VUE_APP_API}/customer/history/${id}`, { withCredentials: true });
}

// 顧客登出
function customerLogout() {
  return axios.post(`${process.env.VUE_APP_API}/customer/logout`, {}, { withCredentials: true });
}

// 管理員登入
function adminLogin(data) {
  return axios.post(`${process.env.VUE_APP_API}/admin/login`, data, { withCredentials: true });
}

// 管理員登出
function adminLogout() {
  // 使用post withCredentials要放第三參數!!!
  return axios.post(`${process.env.VUE_APP_API}/admin/logout`, {}, { withCredentials: true });
}

// 驗證管理員登入狀態
function adminVerify() {
  // 使用post withCredentials要放第三參數!!!
  return axios.post(`${process.env.VUE_APP_API}/admin/verify`, {}, { withCredentials: true });
}

// 取得所有訂單資料
function getAllOrder() {
  return axios.get(`${process.env.VUE_APP_API}/admin/order`, { withCredentials: true });
}

// 刪除訂單
function adminDeleteOrder(id) {
  return axios.delete(`${process.env.VUE_APP_API}/admin/order/${id}`);
}

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
  customerBuyHistory,
  adminVerify,
  getAllOrder,
  adminDeleteOrder,
};
