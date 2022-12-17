<template>
  <div class="icon-wrap">
      <i class="bi bi-cart-fill my-cart" @click="goCartPage" @keydown="1">
        <span class="bage bg-danger" v-if="cartNum > 0">
          {{ cartNum }}
        </span>
      </i>
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
          <button class="btn remove-favorite-btn" @click="removeFavorite(item)">X</button>
        </li>
      </ul>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const cartNum = computed(() => store.state.shoppingCart.shoppingCart.length);
    const favoriteNum = computed(() => store.state.myFavorite.myFavorite.length);
    const favoriteMenu = ref(false);
    const favoriteList = computed(() => store.state.myFavorite.myFavorite);

    const goCartPage = () => {
      router.push('/cart');
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

    // 收藏選單沒東西的話兩秒後消失
    watch(favoriteNum, () => {
      if (favoriteNum.value === 0) {
        setTimeout(() => {
          favoriteMenu.value = false;
        }, 2000);
      }
    });

    return {
      goCartPage,
      cartNum,
      favoriteMenu,
      showHideFavorite,
      favoriteNum,
      favoriteList,
      removeFavorite,
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

        button.remove-favorite-btn {
          border: none;
          border-radius: 0;
          padding: 1rem;

          &:hover {
            color: #fff;
            background: rgb(255, 68, 68);
          }
        }
      }
    }

  }
</style>
