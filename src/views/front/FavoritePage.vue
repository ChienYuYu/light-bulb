<template>
  <div class="favorite-page">
    <div class="header">
      <h1>收藏清單</h1>
    </div>
    <div class="main">
      <div class="row">
        <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">
          <ul>
            <li v-for="item in favoriteList" :key="item.id">
              <img :src="item.picture" alt="">
              <div class="txt">
                <router-link :to= "{ name: '產品詳細頁', params:{id: item.id}}">
                  {{ item.title }}
                </router-link>
                <p>${{ item.price }}</p>
                <button class="btn add-cart-mobile" @click="addCart(item)">加入購物車</button>
              </div>
              <div class="btn-wrap">
                <button class="btn add-cart-pad"  @click="addCart(item)">加入購物車</button>
                <button class="btn remove" @click="removeFavorite(item)">X</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="noFavoriteItem" v-if="favoriteList.length === 0">
        <h2>尚無收藏</h2>
        <router-link to="/product/全部" class="btn">購物去</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { computed } from 'vue';

export default {
  setup() {
    const favoriteList = computed(() => store.state.myFavorite.myFavorite);

    const removeFavorite = (item) => {
      store.commit('myFavorite/toggleFavorite', item);
    };

    const addCart = (item) => {
      store.commit('shoppingCart/addCart', item);
    };

    return { favoriteList, removeFavorite, addCart };
  },
};
</script>

<style lang="scss" scoped>
.favorite-page {
  height: 100vh;
  overflow: auto;
  background: rgb(18, 18, 29);
}

.header {
  background: url(@/assets/img/favoritePage01.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 30%;

  h1 {
    background: #00000080;
    color: #fff;
    font-weight: 700;
    letter-spacing: .5rem;
    line-height: 300px;
    text-align: center;
    backdrop-filter: blur(2px);
  }
}

// -----------------------------------
.main {
  padding: 3rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #666;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
      width: 100px;
      margin-right: .5rem;
    }

    .txt {
      color: #fff;
      a{
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        &:hover{
          color: rgb(255, 211, 77);
        }
      }

      p {
        margin-bottom: 0;
      }

      button {
        width: 100%;
        background: rgb(255, 211, 77);
        color: #333;
        padding: 0 1.5rem;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    // -----------------------------------

    .btn-wrap {
      display: flex;

      button.add-cart-pad {
        background: rgb(255, 211, 77);
        color: #333;
        padding: 0rem 1.5rem;
        display: none;

        &:hover {
          color: #555;
          background: rgb(255, 216, 100);

        }

        @media (min-width: 768px) {
          display: block;
        }
      }

      button.remove {
        padding: 1rem;
        color: rgb(255, 68, 68);
      }
    }
  }

  // -----------------------------------
  .noFavoriteItem {
    text-align: center;

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
}
</style>
