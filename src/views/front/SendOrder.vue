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
            <tr v-for="item in itemInfo" :key="item.id">
              <td>{{ item.title }}</td>
              <td>${{ item.price }} / {{ item.qty }}</td>
              <td>${{ item.totalPrice }}</td>
            </tr>
            <tr>
              <th colspan="1"></th>
              <th colspan="1" class="">總計 ${{ orderInfo.sum }}</th>
              <th colspan="1">折扣後: ${{ orderInfo.couponPrice }}</th>
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
              <td>{{ orderInfo.buyerName }} / {{ orderInfo.buyerPhone }}</td>
              <td>{{ orderInfo.recipientName }} / {{ orderInfo.recipientPhone }}</td>
              <td>{{ orderInfo.recipientAddress }}</td>
            </tr>
          </tbody>
        </table>

        <div class="row justify-content-center">
          <div class="btn-group col-md-6">
            <router-link to='/buyerInfo' class="btn">上一頁</router-link>
            <router-link to='/' class="btn" @click="sendOrder">送出訂單</router-link>
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
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  components: { Footer, ProgressBar },
  setup() {
    const store = useStore();
    const orderInfo = computed(() => store.state.checkout.orderInfo);
    const itemInfo = computed(() => store.state.checkout.orderInfo.buyItem);
    onMounted(() => {
      store.commit('checkout/initSessionStorage');
    });

    const sendOrder = async () => {
      const time = new Date().toLocaleString();
      try {
        store.commit('showLoadingCircle', true);
        // 透過API將資料傳至後端(訂單api)
        const data = await JSON.parse(sessionStorage.getItem('orderInfo'));
        // http://localhost:3000/order
        await axios.post(`${process.env.VUE_APP_API}/order`, { ...data, date: time });

        // 清空vuex && firebase購物車
        store.commit('shoppingCart/resetCartAndUser');
        await store.dispatch('shoppingCart/saveOnFirebase');
        sessionStorage.removeItem('orderInfo');
        store.commit('showLoadingCircle', false);

        Swal.fire({
          icon: 'success',
          title: '訂單已送出',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
        console.log(e);
      }
    };

    return {
      orderInfo, itemInfo, sendOrder,
    };
  },
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
