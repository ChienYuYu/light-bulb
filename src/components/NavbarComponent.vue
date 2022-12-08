<template>
  <div class="navbar">
    <img src="@/assets/img/fakelogo2.png" alt="">
    <nav>
      <router-link to="#">首頁</router-link>
      <router-link to="#">商品列表</router-link>
      <router-link to="#">關於我們</router-link>
      <router-link to="#">聯絡我們</router-link>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.navbar{
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 1rem;
  background: rgba(0,0,0, .8);
  img{
    width: 40px;
  }

  nav a::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    // background: #fa0;
    background: rgba(255, 170, 0, 0.8);
    z-index: -1;
    transition: .3s;
  }

  nav a{
    position: relative;
    display: inline-block;
    padding: 1rem 1.5rem;
    color: #fff;
    text-decoration: none;
    z-index: 2;

    &:hover::before{
      height: 100%;
    }
  }
}

</style>
