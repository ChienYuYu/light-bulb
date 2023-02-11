<template>
  <div class="shopping-cart">
    <div class="header">
      <h1>購物車</h1>
    </div>

    <!-- ----------------- -->
    <div class="main" v-if="carts.length > 0">
      <div class="row">
        <div class="col-md-12 col-lg-10 col-xl-6 mx-auto">
          <ul class="cart-list">
            <li v-for="item in carts" :key="item.id">
              <div class="img-title-group col-12 col-md-6">
                <img :src="item.picture" alt="">
                <router-link :to="{ name: '產品詳細頁', params: { id: item.id } }">
                  <h3 class="title">{{ item.title }}</h3>
                </router-link>
              </div>
              <!-- ------------------- -->
              <div class="price-qty-wrap col-12 col-md-5">
                <!-- ------------------- -->
                <div class="price-group">
                  <p class="price">售價: ${{ item.price }}</p>
                  <p class="price">總價: ${{ item.totalPrice }}</p>
                </div>

                <div class="qty">
                  <button class="sub" @click="setQty(item.id, 'sub')">-</button>
                  <input type="number" class="qty" aria-label="1" v-model="item.qty">
                  <button class="add" @click="setQty(item.id, 'add')">+</button>
                </div>
                <!-- ------------------- -->
              </div>
              <div class="qty2-remove-wrap">
                <div class="qty2">
                  <button class="sub" @click="setQty(item.id, 'sub')">-</button>
                  <input type="number" class="qty" aria-label="1" v-model="item.qty">
                  <button class="add" @click="setQty(item.id, 'add')">+</button>
                </div>
                <button class="btn remove" @click="removeCart(item)">X</button>
              </div>
            </li>
          </ul>
          <!-- 總金額 -->
          <p class="text-end sum text-white">合計： ${{ sum }}</p>
          <div class="pay-btn-wrap">
            <router-link to="/product/全部" class="btn">繼續購物</router-link>
            <router-link to="/checkout" class="btn">前往結帳</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-if="carts.length === 0">
      <h2>購物車空空的</h2>
      <router-link to="/product/全部" class="btn">購物去</router-link>
    </div>
    <!-- ----------------- -->
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const carts = computed(() => store.state.shoppingCart.shoppingCart);

    const removeCart = (item) => {
      store.commit('shoppingCart/removeCart', item);
    };

    const setQty = (id, addOrSub) => {
      store.commit('shoppingCart/setQty', { id, addOrSub });
    };

    const sum = computed(() => store.getters['shoppingCart/sum']);

    return {
      carts,
      removeCart,
      setQty,
      sum,
    };
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  background: rgb(18, 18, 29);
  height: 100vh;
  overflow: auto;
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

.main {
  padding: 3rem 2rem;
}

ul.cart-list {
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #666;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 1rem;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    .img-title-group {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
      }

      @media (max-width: 767px) {
        border-bottom: 1px solid #666;
      }

      img {
        width: 100px;
        margin-right: .5rem;
      }

      h3.title {
        color: #fff;
        font-size: 1.3rem;

        &:hover {
          color: rgb(255, 211, 77);
        }
      }

    }

    .price-qty-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 767px) {
        border-bottom: 1px solid #666;
        // justify-content: space-between;
      }

      .price-group {
        padding: 1rem;

        @media (max-width: 513px) {
          margin: 0 auto;
        }

        @media (max-width: 767px) {
          display: flex;
        }

        p.price {
          color: #fff;
          margin-bottom: 0;
          padding: 0 .5rem;
        }
      }

      .qty {
        width: 50%;

        // border: 1px solid #f00;
        @media (max-width: 513px) {
          display: none;
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
    }

    .qty2-remove-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .qty2 {
        width: 50%;
        display: none;

        // border: 1px solid #f00;
        @media (max-width: 513px) {
          display: block;
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

      button.remove {
        color: rgb(255, 68, 68);
        padding: .5rem 1rem;
        margin: .6rem;
        border: 1px solid rgb(255, 68, 68);

        &:hover {
          background: rgb(255, 68, 68);
          color: #fff;
        }
      }
    }

  }
}

.pay-btn-wrap {
  padding: 3rem 0;
  display: flex;
  justify-content: center;

  a {
    margin: 0 1rem;
    background: rgb(255, 211, 77);
    color: #333;

    &:hover {
      color: #fff;
    }
  }
}

// --------------------------
.empty-cart {
  text-align: center;
  padding: 3rem;

  h2 {
    color: #fff;
    margin-bottom: 3rem;
  }

  a {
    width: 90%;
    background: rgb(255, 211, 77);
    color: #333;

    @media (min-width: 768px) {
      width: 40%;
    }
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
