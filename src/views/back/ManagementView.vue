<template>
  <div class="wrapper">
    <div class="side-menu">
      <div class="wrap">
        <h2>後臺管理</h2>
        <router-link to="/management/order">訂單管理</router-link>
        <a href="#">預留欄位</a>
        <a href="#">預留欄位</a>
        <a href="#">預留欄位</a>
        <a href="#">預留欄位</a>
      </div>
      <a href="#" class="logout">登出</a>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.wrapper{
  background: rgb(18, 18, 29);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  .side-menu{
    width: 20%;
    border-right: 1px solid #aaa;
    padding: 2rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2{
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
    }
    .wrap{
      width: 100%;
    }
    a{
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: #fff;
      padding: 1.5rem;
      display: block;
      &:hover{
        background: rgb(255, 211, 77);
        color: #333;
      }
    }
    a.logout{
      border-top: 1px solid #aaa;
    }
  }
  .main{
    width: 80%;
    // border: 1px solid #fa0;
  }
}
</style>
