<template>
  <div class="send-order">
    <div class="header">
      <h1>送出訂單</h1>
    </div>
    <ProgressBar />
    <div class="order">
      <div class="container">
        <table class="table text-center text-white">
          <thead>
            <tr>
              <th scope="col">名稱</th>
              <th scope="col">價格 / 數量</th>
              <th scope="col">合計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>產品名稱</td>
              <td>$999 / 10</td>
              <td>$9999</td>
            </tr>
            <tr>
              <th colspan="1"></th>
              <th colspan="1" class="">總計 $98237</th>
              <th colspan="1">折扣後: $9999</th>
            </tr>
            <tr>
              <th colspan="4"></th>
            </tr>
            <tr>
              <th scope="col">訂購人 / 電話</th>
              <th scope="col">收件人 / 電話</th>
              <th scope="col">收件地址</th>
            </tr>
            <tr>
              <td>梅川伊芙 / 0911111111</td>
              <td>梅川庫梓 / 0922222222</td>
              <td>苗栗縣台北區台南路200號</td>
            </tr>
          </tbody>
        </table>

        <div class="row justify-content-center">
          <div class="btn-group col-md-6">
            <router-link to='/buyerInfo' class="btn">上一頁</router-link>
            <router-link to='/' class="btn">送出訂單</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer, ProgressBar },
};
</script>

<style lang="scss" scoped>
.send-order {
  background: rgb(18, 18, 29);
}

.header {
  background: url(@/assets/img/shoppingCartPage.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 60%;

  h1 {
    background: #00000080;
    color: #fff;
    font-weight: 700;
    letter-spacing: .5rem;
    line-height: 300px;
    text-align: center;
    backdrop-filter: blur(3px);
  }
}

.order {
  padding: 5rem 0;

  .btn-group {
    padding: 3rem 0;
    display: flex;
    justify-content: center;

    a {
      margin: 0 1rem;
      border: 1px solid rgb(255, 211, 77);
      color: rgb(255, 211, 77);

      &:hover {
        background: rgb(255, 211, 77);
        color: #333;
      }
    }
  }
}
</style>
