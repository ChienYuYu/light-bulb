<template>
  <div class="order-seaarch">
    <div class="header">
      <h1>訂單查詢</h1>
    </div>

    <div class="container col-12 col-md-6 col-lg-4">
      <div class="search-bar">
        <label for="order-id" class="form-label w-100 mb-0">
          <input type="text" class="form-control order-id" id="order-id"
          placeholder="請輸入購買人手機號碼" v-model.trim="inputPhone">
        </label>
        <input type="submit" value="查詢" class="btn" @click="searchData">
      </div>
      <div class="my-order" v-if="showData">
        <table class="table text-center text-white">
          <thead>
            <tr>
              <th scope="col">名稱</th>
              <th scope="col">價格 / 數量</th>
              <th scope="col">合計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderData.buyItem" :key="item.id">
              <td>{{ item.title }}</td>
              <td>${{ item.price }} / {{ item.qty }}</td>
              <td>${{ item.totalPrice }}</td>
            </tr>
            <tr>
              <th colspan="1"></th>
              <th colspan="1" class="">總計 ${{ orderData.sum }}</th>
              <th colspan="1">折扣後: ${{ orderData.couponPrice }}</th>
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
              <td>{{ orderData.buyerName }} / {{ orderData.buyerPhone }}</td>
              <td>{{ orderData.recipientName }} / {{ orderData.recipientPhone }}</td>
              <td>{{ orderData.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import { ref } from 'vue';
import Swal from 'sweetalert2';

export default {
  components: { Footer },
  setup() {
    const orderData = ref(JSON.parse(sessionStorage.getItem('orderSearch')));
    const inputPhone = ref('');
    const showData = ref(false);

    const searchData = () => {
      if (inputPhone.value === orderData.value.buyerPhone) {
        showData.value = true;
      } else {
        showData.value = false;
        Swal.fire({
          icon: 'error',
          title: '查無結果',
          text: '請確認資料是否輸入正確',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    };

    return {
      orderData, inputPhone, showData, searchData,
    };
  },
};
</script>

<style lang="scss" scoped>
.order-seaarch{
  background: rgb(18, 18, 29);
  // height: calc(100vh - 91.2px);
  height: 100vh;
  overflow: auto;
}
.header {
  background: url(@/assets/img/orderSearchPage.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 45%;

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

.search-bar{
  padding: 5rem 0;
  display: flex;
  align-items: center;

  input{
    border-radius: 0;
  }

  input[type=text] {
    background: rgb(18, 18, 29);
    color: #eee;
  }

  input[type=submit] {
    background: rgb(255, 211, 77);
    &:hover{
      color: #fff;
    }
  }
}

.my-order{
  padding-bottom: 5rem;
}
</style>
