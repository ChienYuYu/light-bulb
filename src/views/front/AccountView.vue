<template>
  <div class="wrapper">
    <form class="col-10 col-md-5 col-lg-2">
      <h2>我的帳戶</h2>
      <div>
        <label for="email">
          <p>Email</p>
          <input type="email" class="form-control"
          v-model.trim="userInfo.email" disabled>
        </label>
      </div>
      <div>
        <label for="name">
          <p>姓名</p>
          <input type="text" class="form-control"
          v-model.trim="userInfo.name">
        </label>
      </div>
      <div>
        <label for="address">
          <p>地址</p>
          <input type="text" class="form-control"
          v-model.trim="userInfo.address">
        </label>
      </div>
      <div>
        <label for="tel">
          <p>電話</p>
          <input type="tel" class="form-control"
          v-model.trim="userInfo.tel">
        </label>
      </div>
      <button class="btn" @click.prevent="updateUserData">更新資料</button>

    </form>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue';
import Footer from '@/components/FooterComponent.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { verifyLogin, getCustomer, customerUpdate } from '@/apis/api';

export default {
  components: { Footer },
  setup() {
    const store = useStore();
    const verifyID = ref('');
    const router = useRouter();
    const userInfo = ref({});

    // 取得顧客資料
    async function getUserData() {
      store.commit('showLoadingCircle', true);
      try {
        const res = await getCustomer(verifyID.value);
        const {
          name, email, address, tel,
        } = await res.data;

        userInfo.value = {
          name,
          email,
          address,
          tel,
        };
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
      store.commit('showLoadingCircle', false);
    }

    // 驗證是否登入
    async function checkLogin() {
      store.commit('showLoadingCircle', true);
      try {
        const res = await verifyLogin();
        if (!res.data.isLogin) {
          await router.push('/login');
        } else {
          verifyID.value = res.data.user;
          store.commit('loginStatus', true);
          await getUserData();
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
      store.commit('showLoadingCircle', false);
    }

    // 顧客更新資料
    async function updateUserData() {
      if (userInfo.value.name === '') {
        Swal.fire({
          title: '姓名欄位不得為空',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      try {
        const res = await customerUpdate(verifyID.value, userInfo.value);
        await Swal.fire({
          title: res.data.msg,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    }

    checkLogin();

    return {
      verifyLogin, getUserData, verifyID, userInfo, updateUserData,
    };
  },
};
</script>

<style lang="scss" scoped>

.wrapper {
  background: rgb(18, 18, 29);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  form {
    margin: 0 auto;
  }

  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }

  label {
    width: 100%;
    color: #fff;
    padding-bottom: 1rem;

    p {
      margin-bottom: .3rem;
    }
  }

  input {
    background: #111;
    color: #fff;

    &:focus {
      box-shadow: none;
      border: 1px solid rgb(255, 211, 77);
    }
  }

  input[type = email] {
    color: #aaa;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    background: rgb(255, 211, 77);

    &:hover {
      color: #fff;
    }
  }
}
</style>
