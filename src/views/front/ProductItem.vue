<template>
  <div class="product-item">
    <div class="container">
      <!-- ------------------------------------------- -->
      <div class="row part-1" v-for="item in getItem" :key="item.id">
        <div class="col-md-6 pic">
          <img :src="item.picture" alt="">
        </div>
        <div class="col-md-6 title-price-qty">
          <div class="txt-group">
            <h2 class="title">{{ item.title }}</h2>
            <p class="description">{{ item.description }}</p>
            <p class="price">${{ item.price }}</p>
          </div>
          <div class="qty-group">
            <button class="sub" @click="setQty('sub')">-</button>
            <input type="number" aria-label="1" v-model="qty">
            <button class="add" @click="setQty('add')">+</button>
          </div>
          <div class="row button-wrap">
            <div class="col">
              <button class="btn add-cart" @click="addCart2(item)">加入購物車</button>
            </div>
            <div class="col">
              <router-link to='/cart' class="btn direct-buy"
              @click="addCart2(item)">直接購買</router-link>
            </div>
          </div>
          <div class="inside shopping-notes">
            <h2>購物須知</h2>
            <p>
              訂購與配送：完成訂購流程後，商品將依訂單順序於 3-5 日工作天內出貨，
              出貨後的 3-5 日工作天可送達指定地址。出貨工作日為週一至週五，週末不出貨，
              若遇缺貨、瑕疵等商品狀況，會以電話或 email 聯繫。
            </p>
            <p>
              週末與國定假日訂購及配送：週四晚間 6 點 至週日全天之間完成訂購之訂單，
              我們會在下個星期一起依訂購順序為您處理包裝出貨。 如遇國定假日，則會順延至正常上班日依序出貨，敬請見諒。
            </p>
            <p>
              臺灣配送時程：臺北市地區於出貨後 1-2 日內即會送達；
              臺灣其他地區（不含偏遠與離島）則於出貨後的 1-3 日內送達；
              臺灣本島偏遠地區與離島則需視投遞狀況調整配送時間。
            </p>
          </div>
        </div>
      </div>
      <!-- ------------------------------------------- -->
      <div class="outside shopping-notes">
        <h2 class="text-center">購物須知</h2>
        <p>
          訂購與配送：完成訂購流程後，商品將依訂單順序於 3-5 日工作天內出貨，
          出貨後的 3-5 日工作天可送達指定地址。出貨工作日為週一至週五，週末不出貨，
          若遇缺貨、瑕疵等商品狀況，會以電話或 email 聯繫。
        </p>
        <p>
          週末與國定假日訂購及配送：週四晚間 6 點 至週日全天之間完成訂購之訂單，
          我們會在下個星期一起依訂購順序為您處理包裝出貨。 如遇國定假日，則會順延至正常上班日依序出貨，敬請見諒。
        </p>
        <p>
          臺灣配送時程：臺北市地區於出貨後 1-2 日內即會送達；
          臺灣其他地區（不含偏遠與離島）則於出貨後的 1-3 日內送達；
          臺灣本島偏遠地區與離島則需視投遞狀況調整配送時間。
        </p>
      </div>
      <!-- -------------------------- -->

    </div>
  </div>
  <HotProduct>
    <template #title>你可能會喜歡</template>
    <template #slogan>更多熱賣商品</template>
  </HotProduct>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import HotProduct from '@/components/HomeHotProduct.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
  components: { Footer, HotProduct },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const qty = ref(1);

    const getItem = computed(() => store
      .state.products.filter((item) => item.id === route.params.id));

    const setQty = (p) => {
      if (p === 'add') {
        qty.value += 1;
      } else {
        if (qty.value === 1) {
          return;
        }
        qty.value -= 1;
      }
    };

    const addCart2 = (item) => {
      const checkLogin = store.state.isLogin;
      if (checkLogin) {
        store.commit('shoppingCart/addCart2', { item, qty: qty.value });
      } else {
        Swal.fire({
          icon: 'info',
          text: '登入後才能加入購物車',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/login');
      }
    };

    return {
      qty,
      getItem,
      addCart2,
      setQty,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  padding: 6rem 0;
  background: rgb(18, 18, 29);
}

// ------------------------------
.part-1 {
  // border: 1px solid #f00;
  color: #fff;

  // col---------
  img {
    width: 100%;
    border-radius: .5rem;
  }

  // col---------
  .title-price-qty {}

  .txt-group {

    h2,
    p {
      @media (max-width:767px) {
        text-align: center;
      }
    }

    h2.title {
      margin: 1rem 0;
    }

    p.description {
      margin-bottom: 0;
    }

    p.price {
      font-size: 2rem;
      color: rgb(255, 57, 57);
      margin-bottom: 1rem;
    }
  }

  .qty-group {
    width: 50%;
    padding-bottom: 2rem;
    // border: 1px solid #f00;
    @media (max-width: 767px) {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    input[type=number] {
      width: 30%;
      text-align: center;
      padding: 0;
      border: 1px solid#aaa;
      background: #111;
      color: #fff;

      @media (max-width: 767px) {
        width: 50%;
      }
    }

    button.sub,
    button.add {
      background: rgb(255, 211, 77);
      border: none;
    }
  }

  .button-wrap {
    padding-bottom: 2rem;

    button, .direct-buy {
      width: 100%;
      border: 1px solid rgb(255, 211, 77);
      color: rgb(255, 211, 77);

      &:hover {
        background: rgb(255, 211, 77);
        color: #111;
      }
    }
  }

}

.shopping-notes {
  color: #fff;

  @media (max-width:1199px) {
    display: none;
  }

  h2 {
    margin-bottom: 1rem;
  }
}

.outside.shopping-notes {
  display: none;

  @media (max-width: 1199px) {
    margin-top: 3rem;
    display: block;
  }
}

// input type number 隱藏箭頭
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
