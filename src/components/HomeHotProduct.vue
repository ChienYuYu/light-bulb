<template>
  <div class="hot-product">
    <h2 data-aos="fade-up" data-aos-duration="1000">超值熱賣商品</h2>
    <p data-aos="fade-up" data-aos-duration="1500">超省電 高品質</p>
    <div class="container wrap">
      <!-- --------------------------- -->
      <swiper :slides-per-view="slidesPerView" :space-between="20" navigation
      :autoplay="true" :loop="true"
        :modules="modules" data-aos="fade-up" data-aos-duration="1500">
        <swiper-slide v-for="item in hotProduct" :key="item.id">
          <div class="card">
            <img :src="item.picture" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text"> {{ item.description }} </p>
              <p class="price"><i>售價$ <span>{{ item.price }}</span></i></p>
              <a href="#" class="btn">加入購物車</a>
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

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const store = useStore();
    const slidesPerView = ref(4);

    const getProductData = () => {
      store.dispatch('getProductData');
    };
    getProductData();

    const hotProduct = computed(() => store.state.hotProduct);

    onMounted(() => {
      function changeShowNum() {
        if (window.innerWidth < 768) {
          slidesPerView.value = 1;
        }
        if (window.innerWidth >= 768) {
          slidesPerView.value = 3;
        }
        if (window.innerWidth >= 1200) {
          slidesPerView.value = 4;
        }
      }

      window.addEventListener('resize', changeShowNum);
      changeShowNum();
    });

    return {
      slidesPerView,
      modules: [Autoplay, Navigation],
      getProductData,
      hotProduct,
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
  }

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

    a {
      color: #fff;
      border: 1px solid #fff;
      padding: .5rem 2rem;
      width: 100%;
    }

    a:hover {
      background: #fff;
      color: #222;
    }
  }

  .swiper {
    --swiper-navigation-color: rgb(255, 211, 77); // 按鈕顏色
    --swiper-navigation-size: 30px; // 按钮大小
  }

}
</style>
