<template>
  <div class="hot-product">
    <h2 data-aos="fade-up" data-aos-duration="1000">
      <slot name="title">超值熱賣商品</slot>
    </h2>
    <p data-aos="fade-up" data-aos-duration="1500">
      <slot name="slogan">超省電 高品質</slot>
    </p>
    <!-- --------------------------- -->
    <div class="container wrap">
      <swiper :slides-per-view="slidesPerView"
      :space-between="20" navigation :autoplay="true" :loop="true"
        :modules="modules" data-aos="fade-up" data-aos-duration="1500">
        <swiper-slide v-for="item in hotProduct" :key="item">
          <div class="card">
            <router-link :to="{ name: 'productItem', params: { id: item.id } }">
              <img :src="item.picture" class="card-img-top" alt="">
            </router-link>
            <!-- <img :src="item.picture" class="card-img-top" alt=""> -->
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text"> {{ item.description }} </p>
              <p class="price"><i>售價$ <span>{{ item.price }}</span></i></p>

              <div class="btn-wrap">
                <button class="btn favorite-btn" @click="toggleFavorite(item)">
                  收藏
                  <i class="bi bi-heart" v-if="iconSwitch(item.id) === false"></i>
                  <i class="bi bi-heart-fill" v-if="iconSwitch(item.id) === true"></i>
                </button>
                <a href="#" class="btn add-cart-btn" @click.prevent="addCart(item)">加入購物車</a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- --------------------------- -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const store = useStore();
    const router = useRouter();
    const slidesPerView = ref(4);

    const getProductData = () => {
      store.dispatch('getProductData');
    }; getProductData();

    const hotProduct = computed(() => store.state.hotProduct);

    // 切換是否收藏(新增/移除收藏)
    const toggleFavorite = (item) => {
      const checkLogin = store.state.isLogin;
      if (checkLogin) {
        store.commit('myFavorite/toggleFavorite', item);
      } else {
        Swal.fire({
          icon: 'info',
          text: '登入後才能加入收藏清單',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/login');
      }
    };

    // 判斷是否收藏切換icon
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

    // 不同螢幕尺寸要顯示的張數
    onMounted(() => {
      function changeShowNum() {
        if (window.innerWidth < 670) {
          slidesPerView.value = 1;
        }
        if (window.innerWidth > 670) {
          slidesPerView.value = 2;
        }
        if (window.innerWidth > 1000) {
          slidesPerView.value = 3;
        }
        if (window.innerWidth >= 1200) {
          slidesPerView.value = 4;
        }
      }

      window.addEventListener('resize', changeShowNum);
      changeShowNum();
    });
    // ---------------------------------------

    return {
      slidesPerView,
      modules: [Autoplay, Navigation],
      getProductData,
      hotProduct,
      toggleFavorite,
      iconSwitch,
      addCart,
    };
  },

};
</script>

<style lang="scss" scoped>
.hot-product {
  background: rgb(8, 8, 11);
  padding: 3rem 0;
  text-align: center;

  h2 {
    color: #fff;
    line-height: 1.5;
  }

  p {
    color: rgb(255, 211, 77);
    margin-bottom: 0;
  }

  // -----------------------------------
  .wrap {
    // padding: 3rem 0; // 會出現x軸
    padding-top: 3rem;
  }

  .card {
    border: 1px solid #222;
    background: #222;

    h5 {
      color: #fff;
    }

    p.price {
      font-weight: 500;
      color: rgb(255, 57, 57);

      span {
        font-size: 28px;
      }
    }

    // -----------------------------------
    .btn-wrap {
      display: flex;
      padding: 1rem 0;

      button.favorite-btn {
        white-space: nowrap;
        color: #333;
        background: rgb(255, 211, 77);
        border-radius: 0;

        &:hover {
          background: rgb(255, 220, 113);
          color: #555;
        }
      }

      a.add-cart-btn {
        border-radius: 0;
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
  }

  // ------------------------------------------

  .swiper {
    --swiper-navigation-color: rgb(255, 211, 77); // 按鈕顏色
    --swiper-navigation-size: 30px; // 按钮大小
  }

}
</style>
