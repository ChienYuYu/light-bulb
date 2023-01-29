<template>
  <div class="icon-wrap">
    <i class="bi bi-cart-fill my-cart"
    @click="showHideList('cart')" @keydown="1" :class="{'active' : cartMenu}">
      <span class="bage bg-danger" v-if="cartNum > 0">
        {{ cartNum }}
      </span>
    </i>
    <i class="bi bi-heart-fill my-favorite" @click="showHideList('favorite')" @keydown="1"
      :class="{ 'active': favoriteMenu }">
      <span class="bage bg-danger" v-if="favoriteNum > 0">
        {{ favoriteNum }}
      </span>
    </i>
    <!-- /////////////////////////////////////////// -->
    <i class="bi bi-person-circle my-menu"
    @click="showHideList('me')" @keydown="1" :class="{ 'active': myMenu }"></i>
    <!-- 個人選項------------------------------------------- -->
    <ul class="my-list" v-show="myMenu">
      <li v-if="isLogin">
        <router-link to="/user/account">我的帳戶</router-link>
      </li>
      <li v-if="isLogin">
        <router-link to="/user/purchase_record">購買紀錄</router-link>
      </li>
      <li v-if="isLogin">
        <a href="#" @click.prevent="logout">登出</a>
      </li>
      <li v-if="isLogin === false">
        <router-link to="/login">登入</router-link>
      </li>
    </ul>
    <!-- /////////////////////////////////////////// -->

    <!-- 購物車清單------------------------------------------- -->
    <ul class="cart-list" v-show="cartMenu">
      <li v-if="cartNum !== 0">
        <router-link to="/cart" @click="showHideList('cart')">【前往購物車】</router-link>
      </li>
      <li v-if="cartNum === 0">
        <router-link to="/product/全部">購物車沒東西</router-link>
      </li>
      <li v-for="item in cartList" :key="item">
        <router-link :to="{ name: 'productItem', params: { id: item.id } }">
          {{ item.title }}
        </router-link>
        <!-- <a href="#">{{ item.title }}</a> -->
        <button class="btn remove-favorite-btn" @click="removeItem('cart', item)">X</button>
      </li>
    </ul>
    <!-- 收藏清單------------------------------------------- -->
    <ul class="favorite-list" v-show="favoriteMenu">
      <li v-if="favoriteNum !== 0">
        <router-link to="/myFavorite" @click="showHideList('favorite')">【前往收藏清單】</router-link>
      </li>
      <li v-if="favoriteNum === 0">
        <router-link to="/product/全部">尚無收藏</router-link>
      </li>
      <li v-for="item in favoriteList" :key="item">
        <router-link :to="{ name: 'productItem', params: { id: item.id } }">
          {{ item.title }}
        </router-link>
        <!-- <a href="#">{{ item.title }}</a> -->
        <button class="btn remove-favorite-btn" @click="removeItem('favorite', item)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const myMenu = ref(false);

    const cartNum = computed(() => store.state.shoppingCart.shoppingCart.length);
    const cartMenu = ref(false);
    const cartList = computed(() => store.state.shoppingCart.shoppingCart);

    const favoriteNum = computed(() => store.state.myFavorite.myFavorite.length);
    const favoriteMenu = ref(false);
    const favoriteList = computed(() => store.state.myFavorite.myFavorite);

    const isLogin = computed(() => store.state.isLogin);

    const goCartPage = () => {
      router.push('/cart');
    };

    const logout = () => {
      axios.post('http://localhost:3000/customer/logout', {}, { withCredentials: true })
        .then(() => {
          store.commit('loginStatus', false);
          store.commit('shoppingCart/resetCartAndUser');
          store.commit('myFavorite/resetFavoriteAndUser');
          localStorage.removeItem('userId');
          router.push('/login');
        })
        .catch((e) => console.log(e));
    };

    // 顯示/隱藏  購物車清單 or 收藏清單 ---------------------
    const showHideList = (menu) => {
      if (menu === 'me') {
        myMenu.value = !myMenu.value;
        cartMenu.value = false;
        favoriteMenu.value = false;
      }

      if (menu === 'cart') {
        cartMenu.value = !cartMenu.value;
        myMenu.value = false;
        favoriteMenu.value = false;
        if (cartNum.value === 0) {
          setTimeout(() => {
            cartMenu.value = false;
          }, 2000);
        }
      }

      if (menu === 'favorite') {
        favoriteMenu.value = !favoriteMenu.value;
        myMenu.value = false;
        cartMenu.value = false;
        if (favoriteNum.value === 0) {
          setTimeout(() => {
            favoriteMenu.value = false;
          }, 2000);
        }
      }
    };

    // 移除 購物車or收藏項目 ---------------------
    const removeItem = (CF, item) => {
      if (CF === 'cart') {
        store.commit('shoppingCart/removeCart', item);
      }

      if (CF === 'favorite') {
        store.commit('myFavorite/toggleFavorite', item);
      }
    };

    // 購物車 / 收藏選單 沒東西的話兩秒後消失
    watch([favoriteNum, cartNum], () => {
      if (cartNum.value === 0) {
        setTimeout(() => {
          cartMenu.value = false;
        }, 2000);
      }
      if (favoriteNum.value === 0) {
        setTimeout(() => {
          favoriteMenu.value = false;
        }, 2000);
      }
    });

    onBeforeRouteUpdate(() => {
      myMenu.value = false;
      cartMenu.value = false;
      favoriteMenu.value = false;
    });

    return {
      goCartPage,
      cartNum,
      cartMenu,
      cartList,
      favoriteMenu,
      favoriteNum,
      favoriteList,
      showHideList,
      removeItem,
      myMenu,
      isLogin,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-wrap {
  position: relative;

  i {
    color: #fff;
    padding: 1rem;
    font-size: 20px;
    position: relative;
  }

  i.active {
    color: rgb(255, 211, 77);
  }

  i.my-menu,
  i.my-favorite,
  i.my-cart {
    cursor: pointer;

    .bage {
      position: absolute;
      top: 20%;
      right: 3%;
      font-size: 10px;
      padding: 0 5px;
      border-radius: 50%;
    }
  }

  ul.my-list,
  ul.cart-list,
  ul.favorite-list {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    padding: 0;
    list-style: none;
    background: #000;
    border-radius: .5rem;
    box-shadow: 0 0 5px #111;
    overflow: hidden;
    border: 2px solid rgb(255, 211, 77);

    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #999;

      a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        color: #333;
        color: #eee;
        display: block;
        padding: 1rem .5rem;

        &:hover {
          background: rgb(18, 18, 29);
          color: rgb(255, 211, 77);
        }
      }

      button.remove-favorite-btn {
        border: none;
        border-radius: 0;
        padding: 1rem;
        color: #fff;

        &:hover {
          background: rgb(255, 68, 68);
        }
      }
    }
  }

}
</style>
