<template>
  <div class="buyer-info">
    <div class="header">
      <h1>填寫資料</h1>
    </div>
    <ProgressBar />
    <div class="info container">
      <div class="col-10 col-md-6 mx-auto">
        <form class="row g-3">
          <div class="col-md-6">
            <input type="text" class="form-control" id="buyer-name"
              aria-label="1" placeholder="訂購人姓名"
              v-model="buyerInfo.buyerName">
          </div>
          <div class="col-md-6">
            <input type="tel" class="form-control" id="buyer-phone"
            aria-label="1" placeholder="訂購人電話"
            v-model="buyerInfo.buyerPhone">
          </div>
          <!-- -------------------------------- -->
          <div class="col-md-6">
            <input type="text" class="form-control" id="recipient-name"
              aria-label="1" placeholder="收件人姓名"
              v-model="buyerInfo.recipientName">
          </div>
          <div class="col-md-6">
            <input type="tel" class="form-control" id="recipient-phone"
            aria-label="1" placeholder="收件人電話"
            v-model="buyerInfo.recipientPhone">
          </div>
          <div class="col-lg-12">
            <button class="btn same w-100" @click.prevent="sameAsBuyer">收件人同訂購人</button>
          </div>
          <!-- -------------------------------- -->
          <div class="col-12">
            <input type="mail" class="form-control" id="email"
            placeholder="訂購人Email" aria-label="1"
            v-model="buyerInfo.email">
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="inputAddress"
            placeholder="收件地址" aria-label="1"
            v-model="buyerInfo.address">
          </div>
          <div class="col btn-group">
            <RouterLink to="/checkout" class="btn">返回</RouterLink>
            <RouterLink to="/sendOrder" class="btn" @click="writeBuyerInfo">下一步</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import Footer from '@/components/FooterComponent.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { Footer, ProgressBar },
  setup() {
    const store = useStore();
    const buyerInfo = ref({
      buyerName: '',
      buyerPhone: '',
      recipientName: '',
      recipientPhone: '',
      email: '',
      address: '',
    });

    const sameAsBuyer = () => {
      buyerInfo.value.recipientName = buyerInfo.value.buyerName;
      buyerInfo.value.recipientPhone = buyerInfo.value.buyerPhone;
    };

    const writeBuyerInfo = () => {
      store.commit('checkout/writeBuyerInfo', buyerInfo.value);
    };

    return { buyerInfo, sameAsBuyer, writeBuyerInfo };
  },
};
</script>

<style lang="scss" scoped>
.buyer-info {
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

.info {
  padding: 5rem 0;
  button.same{
    border: 1px solid rgb(255, 211, 77);
    color: rgb(255, 211, 77);
    padding: .2rem .3rem;
    &:hover{
      background: rgb(255, 211, 77);
      color: #333;
    }
  }

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
