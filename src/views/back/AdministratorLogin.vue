<template>
  <div class="wrapper">
    <form class="col-12 col-md-6 col-lg-3 login-wrap">
      <h2>管理員登入</h2>
      <input type="text" aria-label="a" class="form-control"
      placeholder="請輸入帳號" v-model.trim="admin.account" />
      <input type="password" aria-label="a" class="form-control"
      placeholder="請輸入密碼" v-model.trim="admin.password" />
      <div>
        <button class="btn" @click.prevent="login">登入</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {

  setup() {
    const router = useRouter();
    const admin = ref({});

    const login = () => {
      axios.post(`${process.env.VUE_APP_API}/admin/login`, admin.value, { withCredentials: true })
        .then((res) => {
          if (res.data.success) {
            router.push('/management/order');
          }
        })
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
    };

    return { admin, login };
  },
};
</script>

<style lang="scss" scoped>

.wrapper {
  background: rgb(18, 18, 29);
  background-image: url('@/assets/img/admin-login-bg.jpg');
  background-size: cover;
  background-position: center center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 14rem .5rem 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  form {
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px #555;
    h2 {
      text-align: center;
      color: #fff;
      margin-bottom: 2rem;
    }
    input{
      margin-bottom: 3rem;
      background: #111;
      color: #fff;
      border: 1px solid #aaa;
      &:focus{
        box-shadow: none;
        border: 1px solid rgb(255, 211, 77);
      }
    }

    button{
      width: 100%;
      background: rgb(255, 211, 77);
    }
  }
}
</style>
