<template>
  <div class="wrapper">
    <form class="col-lg-3 login-wrap">
      <input type="text" placeholder="請輸入Email" aria-label="a" class="form-control">
      <input type="password" placeholder="請輸入密碼" aria-label="a" class="form-control">
      <button class="btn">登入</button>
      <div class="register-btn-wrap">
        <router-link to="register">註冊</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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

  input {
    margin: 2rem 0;
    background: #111;
    color: #fff;
    border: 1px solid #333;

    &:focus{
      box-shadow: none;
      border: 1px solid rgb(255, 211, 77);
    }
  }

  button {
    width: 100%;
    background: rgb(255, 211, 77);
    &:hover{
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
