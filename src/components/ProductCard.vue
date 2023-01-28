<template>
  <div class="row g-3">
    <div class="col-lg-3 col-md-6" v-for="item in renderData" :key="item">
      <div class="card">
        <router-link :to= "{ name: 'productItem', params:{id: item.id}}">
          <img :src="item.picture" class="card-img-top" alt="">
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text"> {{ item.description }} </p>
          <div class="favorite-price-wrap">
            <button class="btn favorite-btn" @click="toggleFavorite(item)">
              收藏
              <i class="bi bi-heart" v-if="iconSwitch(item.id) === false"></i>
              <i class="bi bi-heart-fill" v-if="iconSwitch(item.id) === true"></i>
            </button>
            <p class="price"><i>售價$ <span>{{ item.price }}</span></i></p>
          </div>
          <a href="#" class="btn add-cart-btn" @click.prevent="addCart(item)">
            加入購物車
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
  props: ['category'],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const products = computed(() => store.state.products);

    const renderData = computed(() => {
      if (props.category !== '全部') {
        return products.value.filter((item) => item.category === props.category);
      }
      return products.value;
    });

    // 切換是否收藏(新增/移除收藏)
    const toggleFavorite = (item) => {
      store.commit('myFavorite/toggleFavorite', item);
    };

    // 判斷是否收藏 切換icon
    const iconSwitch = computed(() => (id) => {
      const tempResult = store.state.myFavorite.myFavorite.some((item) => item.id === id);
      return tempResult;
    });

    // 加入購物車
    const addCart = (item) => {
      const checkLogin = store.state.isLogin;
      if (checkLogin) {
        store.commit('shoppingCart/addCart', item);
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
      products,
      renderData,
      toggleFavorite,
      iconSwitch,
      addCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #222;
  background: #222;
  text-align: center;

  h5 {
    color: #fff;
  }

  p {
    color: rgb(255, 211, 77);
  }

  .favorite-price-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button.favorite-btn{
      color: #333;
      background: rgb(255, 211, 77);
      &:hover{
      background: rgb(255, 220, 113);
      color: #555;
      }
    }

    p.price {
      font-weight: 500;
      color: rgb(255, 57, 57);

      span {
        font-size: 28px;
      }
    }
  }

  a.add-cart-btn {
    color: #fff;
    border: 1px solid #fff;
    padding: .5rem 2rem;
    width: 100%;
  }

  a.add-cart-btn:hover {
    background: #fff;
    color: #222;
  }
}
</style>
