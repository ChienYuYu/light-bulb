<template>
  <div class="wrapper">
    <form class="col-lg-3 login-wrap">
      <h2>登入</h2>
      <input type="email" placeholder="請輸入Email"
      aria-label="a" class="form-control" v-model.trim="inputData.email">
      <input type="password" placeholder="請輸入密碼"
      aria-label="a" class="form-control" v-model.trim="inputData.password">
      <!-- form裡click記得prevent -->
      <button class="btn" @click.prevent="login">登入</button>
      <div class="register-btn-wrap">
        <router-link to="register">註冊</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useStore } from 'vuex';

export default {
  setup() {
    const inputData = ref({});
    const router = useRouter();
    const store = useStore();

    async function login() {
      try {
        const res = await axios.post('http://localhost:3000/customer/login', inputData.value, { withCredentials: true });
        if (res.data.success) {
          // store.commit('saveUserId', res.data.user);
          store.commit('shoppingCart/saveUserId', res.data.user);
          store.commit('loginStatus', true);
          router.push('/user/account');
        } else {
          Swal.fire({
            title: res.data.msg,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log(res);
      } catch (e) {
        console.log('error', e);
      }
    }

    return { inputData, login };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-image: url('@/assets/img/loginBG.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

form.login-wrap {
  border: 1px solid #999;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 5px #111111d0;
  backdrop-filter: blur(10px);
  background: #222222a0;

  h2 {
    color: #fff;
    text-align: center;
  }

  input {
    margin: 2rem 0;
    background: #111;
    color: #fff;
    border: 1px solid #333;

    &:focus {
      box-shadow: none;
      border: 1px solid rgb(255, 211, 77);
    }
  }

  button {
    width: 100%;
    background: rgb(255, 211, 77);

    &:hover {
      color: #fff;
    }
  }

  .register-btn-wrap {
    display: flex;
    justify-content: center;
    padding: 2rem 0;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
