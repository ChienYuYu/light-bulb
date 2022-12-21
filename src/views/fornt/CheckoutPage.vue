<template>
  <div class="checkout">
    <div class="header">
      <h1>確認訂單</h1>
    </div>
    <ProgressBar />
    <div class="shopping-details">
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
            <tr v-for="item in shoppingCart" :key="item.id">
              <td>{{ item.title }}</td>
              <td>${{ item.price }} / {{ item.qty }}</td>
              <td>${{ item.totalPrice }}</td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="d-flex justify-content-center">
                  <input type="text" aria-label="1" placeholder="輸入優惠碼"
                  class="form-control rounded-0 w-50"  v-model.trim="couponCode">
                  <button class="btn rounded-0 use" @click="useCoupon">使用</button>
                </div>
              </td>
            </tr>
            <tr>
              <th colspan="1"></th>
              <th colspan="1" class="text-end">總計 ${{ sum }}</th>
              <th colspan="1">折扣後: ${{ couponPrice }}</th>
            </tr>
          </tbody>
        </table>
        <div class="row justify-content-center">
          <div class="btn-group col-md-6">
            <router-link to='/cart' class="btn">返回修改</router-link>
            <router-link to='/buyerInfo' class="btn" @click="writeItemInfo">下一步</router-link>
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
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { Footer, ProgressBar },
  setup() {
    const store = useStore();
    const couponCode = ref('');
    const shoppingCart = computed(() => store.state.shoppingCart.shoppingCart);
    const sum = computed(() => store.getters['shoppingCart/sum']);

    onMounted(() => {
      store.commit('checkout/initSum', sum.value);
    });

    const useCoupon = () => {
      store.commit('checkout/useCoupon', { couponCode: couponCode.value, sum: sum.value });
    };

    const couponPrice = computed(() => store.getters['checkout/couponPrice']);

    const writeItemInfo = () => {
      store.commit('checkout/writeItemInfo', shoppingCart.value);
    };

    return {
      shoppingCart,
      couponCode,
      sum,
      couponPrice,
      useCoupon,
      writeItemInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkout {
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

.shopping-details {
  padding: 5rem 0;

  input[type=text] {
    background: #111;
    color: #fff;
    border-right: none;
  }

  button.use {
    background: rgb(255, 211, 77);

    &:hover {
      color: #eee;
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
