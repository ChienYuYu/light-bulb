<template>
  <div class="wrapper">
    <form class="col-lg-3 register-wrap">
      <h2>註冊</h2>
      <input type="email" placeholder="請輸入Email"
      aria-label="a" class="form-control" v-model.trim="inputData.email">
      <input type="password" placeholder="請輸入密碼"
      aria-label="a" class="form-control" v-model.trim="inputData.password1">
      <input type="password" placeholder="再次輸入密碼"
      aria-label="a" class="form-control"
        v-model.trim="inputData.password2">
      <input type="text" placeholder="請輸入姓名"
      aria-label="a" class="form-control" v-model.trim="inputData.name">

      <button class="btn" @click.prevent="register">註冊</button>
      <div class="login-btn-wrap">
        <router-link to="/login">返回登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  setup() {
    const router = useRouter();
    const inputData = ref({});

    async function register() {
      if (!inputData.value.name || !inputData.value.email
        || !inputData.value.password1 || !inputData.value.password2) {
        Swal.fire({
          title: '所有欄位為必填',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      if (inputData.value.password1 !== inputData.value.password2) {
        Swal.fire({
          title: '兩次密碼輸入不同!',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const sendData = {
        email: inputData.value.email,
        password: inputData.value.password1,
        name: inputData.value.name,
      };

      try {
        // http://localhost:3000/customer/register
        const res = await axios.post(`${process.env.VUE_APP_API}/customer/register`, sendData);
        if (res.data.success === true) {
          await Swal.fire({
            title: res.data.msg,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
          router.push('/login');
        } else {
          await Swal.fire({
            title: res.data.msg,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }

    return {
      inputData,
      register,
    };
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

form.register-wrap {
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

  .login-btn-wrap {
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
