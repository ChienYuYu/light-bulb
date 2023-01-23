<template>
  <div class="wrapper">
    <form>
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
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: rgb(18, 18, 29);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }
  label{
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
