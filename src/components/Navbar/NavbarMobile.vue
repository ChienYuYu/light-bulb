<template>
  <!-- --------------桌機↑ / 平板&手機↓--------------------- -->
  <div class="mobile-navbar">
    <div class="wrap">
      <router-link to="/">
        <img src="@/assets/img/fakelogo2.png" alt="">
      </router-link>
      <div class="burger" ref="burger" @click.prevent="changeBtn" @keydown="c"></div>
    </div>
    <ul class="menu-list" ref="menuList">
      <li><a href="#" @click.prevent="goPage('/')">首頁</a></li>
      <li><a href="#" @click.prevent="goPage('/product/全部')">商品列表</a></li>
      <li><a href="#" @click.prevent="goPage('/about')">關於我們</a></li>
      <li><a href="#" @click.prevent="goPage('/contact')">聯絡我們</a></li>
      <!-- <li><a href="#" @click.prevent="goPage('/order-search')">訂單查詢</a></li> -->
      <li><a href="#" @click.prevent="goPage('/user/account')">我的帳戶</a></li>
      <li><a href="#" @click.prevent="goPage('/user/purchase_record')">購買紀錄</a></li>
      <li><a href="#" @click.prevent="goPage('/cart')">購物車({{ cartNum }})</a></li>
      <li>
        <a href="#" @click.prevent="goPage('/myFavorite')">收藏清單({{ favoriteNum }})</a>
      </li>
      <li><a href="#" @click.prevent="goPage('/')">登出</a></li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const burger = ref(null);
    const menuList = ref(null);
    const favoriteNum = computed(() => store.state.myFavorite.myFavorite.length);
    const cartNum = computed(() => store.state.shoppingCart.shoppingCart.length);

    // 套用css / 切換漢堡 && 切換選單顯示隱藏
    const changeBtn = () => {
      burger.value.classList.toggle('change-btn');
      menuList.value.classList.toggle('show-hide');
      // console.log(burger);
    };

    // 手機選單切換頁面 & 觸發漢堡切換 / 選單收闔
    const goPage = (p) => {
      router.push(`${p}`);
      changeBtn();
    };

    return {
      favoriteNum,
      cartNum,
      changeBtn,
      burger,
      menuList,
      goPage,
    };
  },
};
</script>

<style lang="scss" scoped>
// 平板 手機----------------------
.mobile-navbar {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 50px;
  background: #00000095;

  @media (min-width: 900px) {
    display: none;
  }

  .wrap {
    img {
      width: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 3%;
    }

    .burger {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 3%;
      width: 40px;
      height: 4px;
      background: #fff;
      box-shadow: 0 12px 0 #fff, 0 -12px 0 #fff;
      border-radius: 5px;
      transition: .5s;
    }

    .change-btn.burger {
      rotate: 135deg;
      box-shadow: none;
      background: rgb(255, 89, 89);
    }

    .burger::after {
      content: '';
      display: block;
      width: 40px;
      height: 4px;
      background: rgba(255, 89, 89, 0);
      border-radius: 5px;
      transition: .5s;
    }

    .change-btn.burger::after {
      rotate: 270deg;
      background: rgb(255, 89, 89);
    }
  }

  ul {
    padding: 0;
    list-style: none;
    text-align: center;
    background: #290f0f99;
    backdrop-filter: blur(30px);
    height: 100vh;
    position: absolute;
    top: 50px;
    width: 100%;
    left: -100%;
    transition: .5s;

    a {
      text-decoration: none;
      color: #fff;
      border-bottom: 1px dashed #cccccc90;
      display: block;
      padding: 1.5rem;

      &:hover {
        background: rgb(255, 211, 77);
        color: #333;
      }
    }
  }

  ul.show-hide {
    left: 0;
  }
}
</style>
