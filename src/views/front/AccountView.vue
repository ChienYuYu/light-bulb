<template>
  <div class="wrapper">
    <form class="col-lg-2">
      <h2>我的帳戶</h2>
      <div>
        <label for="email">
          <p>Email:</p>
          <input type="email" class="form-control">
        </label>
      </div>
      <div>
        <label for="name">
          <p>名字:</p>
          <input type="text" class="form-control">
        </label>
      </div>
      <div>
        <label for="address">
          <p>地址</p>
          <input type="text" class="form-control">
        </label>
      </div>
      <button class="btn">更新資料</button>

    </form>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer },
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
  label{
    width: 100%;
    color: #fff;
    padding-bottom: 1rem;
    p{
      margin-bottom: .3rem;
    }
  }
  input{
    background: #111;
    color: #fff;
    &:focus{
      box-shadow: none;
      border: 1px solid rgb(255, 211, 77) ;
    }
  }
  button{
    margin-top: 1rem;
    width: 100%;
    background: rgb(255, 211, 77);
    &:hover{
      color: #fff;
    }
  }
}
</style>
