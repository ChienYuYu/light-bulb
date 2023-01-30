<template>
  <div class="wrapper">
    <form class="col-lg-2">
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
import axios from 'axios';
import Footer from '@/components/FooterComponent.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
  components: { Footer },
  setup() {
    const store = useStore();
    const verifyID = ref('');
    const router = useRouter();
    const userInfo = ref({});

    async function getUserData() {
      try {
        const res = await axios
          // 用get 這裡的Credentials要放第二參數
          .get(`http://localhost:3000/customer/user/${verifyID.value}`, { withCredentials: true });
        const {
          name, email, address, tel,
        } = res.data;

        userInfo.value = {
          name,
          email,
          address,
          tel,
        };
      } catch (e) {
        console.log(e);
      }
    }

    async function verifyLogin() {
      try {
        // 注意第二參數，這裡使用空物件佔位，因為post Credentials要放第三參數 !!!
        const res = await axios.post('http://localhost:3000/customer/verify', {}, { withCredentials: true });
        if (!res.data.isLogin) {
          router.push('/login');
        } else {
          // console.log(res);
          verifyID.value = await res.data.user;
          store.commit('loginStatus', true);
          getUserData();
        }
      } catch (e) {
        console.log(e);
      }
    }

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
        const res = await axios
          .put(`http://localhost:3000/customer/user/${verifyID.value}`, userInfo.value, { withCredentials: true });
        Swal.fire({
          title: res.data.msg,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (e) {
        console.log(e);
      }
    }

    verifyLogin();

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
