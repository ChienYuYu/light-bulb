<template>
  <div class="row g-3">
    <div class="col-lg-3 col-md-6" v-for="item in renderData" :key="item">
      <div class="card">
        <img :src="item.picture" class="card-img-top" alt="">
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
          <a href="#" class="btn add-cart-btn">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['category'],
  setup(props) {
    const store = useStore();

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

    return {
      products,
      renderData,
      toggleFavorite,
      iconSwitch,
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
