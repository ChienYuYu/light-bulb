<template>
  <div class="navbar">
    <img src="@/assets/img/fakelogo2.png" alt="">
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/product/全部">商品列表</router-link>
      <router-link to="#">關於我們</router-link>
      <router-link to="#">聯絡我們</router-link>
      <router-link to="#">訂單查詢</router-link>
    </nav>
    <div class="icon-wrap">
      <i class="bi bi-cart-fill my-cart"></i>
      <i class="bi bi-heart-fill my-favorite" @click="showHideFavorite" @keydown="1">
        <span class="bage bg-danger" v-if="favoriteNum > 0">
          {{ favoriteNum }}
        </span>

      </i>
      <ul class="favorite-list" v-show="favoriteMenu">
        <li v-if="favoriteNum !== 0">
          <router-link to="/myFavorite" @click="showHideFavorite">【收藏清單】</router-link>
        </li>
        <li v-if="favoriteNum === 0">
          <a href="#">尚無收藏</a>
        </li>
        <li v-for="item in favoriteList" :key="item">
          <a href="#">{{ item.title }}</a>
          <button class="btn" @click="removeFavorite(item)">X</button>
        </li>
      </ul>
    </div>
  </div>
  <!-- --------------桌機↑ / 平板&手機↓--------------------- -->
  <div class="mobile-navbar">
    <div class="wrap">
      <img src="@/assets/img/fakelogo2.png" alt="">
      <div class="burger" ref="burger" @click.prevent="changeBtn" @keydown="c"></div>
    </div>
    <ul class="menu-list" ref="menuList">
      <li><a href="#" @click.prevent="goPage('/')">首頁</a></li>
      <li><a href="#" @click.prevent="goPage('/product/全部')">商品列表</a></li>
      <li><a href="#" @click.prevent="goPage('/')">關於我們</a></li>
      <li><a href="#" @click.prevent="goPage('/')">聯絡我們</a></li>
      <li><a href="#" @click.prevent="goPage('/')">訂單查詢</a></li>
      <li><a href="#">購物車(0)</a></li>
      <li>
        <a href="#" @click.prevent="goPage('/myFavorite')">收藏清單({{ favoriteNum }})</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store';
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const burger = ref(null);
    const menuList = ref(null);
    const favoriteMenu = ref(false);
    const favoriteList = computed(() => store.state.myFavorite.myFavorite);
    const favoriteNum = computed(() => store.state.myFavorite.myFavorite.length);

    const changeBtn = () => {
      burger.value.classList.toggle('change-btn');
      menuList.value.classList.toggle('show-hide');
      console.log(burger);
    };

    const goPage = (p) => {
      router.push(`${p}`);
      changeBtn();
    };

    // 顯示/隱藏 收藏清單
    const showHideFavorite = () => {
      favoriteMenu.value = !favoriteMenu.value;
      if (favoriteNum.value === 0) {
        setTimeout(() => {
          favoriteMenu.value = false;
        }, 2000);
      }
    };

    // 移除收藏
    const removeFavorite = (item) => {
      store.commit('myFavorite/toggleFavorite', item);
    };

    watch(favoriteNum, () => {
      if (favoriteNum.value === 0) {
        setTimeout(() => {
          favoriteMenu.value = false;
        }, 2000);
      }
    });

    return {
      changeBtn,
      burger,
      menuList,
      goPage,
      showHideFavorite,
      favoriteMenu,
      favoriteList,
      favoriteNum,
      removeFavorite,
    };
  },
};
</script>

<style lang="scss" scoped>
// 桌機------------------
.navbar {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 1rem;
  background: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    display: none;
  }

  img {
    width: 40px;
  }

  nav {
    padding-left: 40px;

    a::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: rgb(255, 211, 77);
      z-index: -1;
      transition: .3s;
    }

    a {
      position: relative;
      display: inline-block;
      padding: 1rem 1.5rem;
      color: #fff;
      text-decoration: none;
      z-index: 2;
      transition: .3s;

      &:hover::before {
        height: 100%;
      }

      &:hover {
        color: #333;
      }
    }
  }

  .icon-wrap {
    position: relative;

    i {
      color: #fff;
      padding: 1rem;
      font-size: 20px;
    }

    i.my-favorite {
      cursor: pointer;

      .bage {
        position: absolute;
        top: -15%;
        right: 3%;
        font-size: 10px;
        padding: 0 5px;
        border-radius: 50%;
      }
    }

    ul.favorite-list {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      padding: 0;
      list-style: none;
      background: #eee;
      border-radius: .5rem;
      box-shadow: 0 0 5px #111;
      overflow: hidden;

      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #999;

        a {
          width: 100%;
          text-align: center;
          text-decoration: none;
          color: #333;
          display: block;
          padding: 1rem .5rem;

          &:hover {
            background: rgb(18, 18, 29);
            color: rgb(255, 211, 77);
          }
        }

        button {
          border: none;
          border-radius: 0;
          padding: 1rem;
          &:hover{
            color: #fff;
            background: rgb(255, 68, 68);
          }
        }
      }
    }

  }
}

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
