<template>
  <div class="hot-product">
    <h2 data-aos="fade-up" data-aos-duration="1000">超值熱賣商品</h2>
    <p data-aos="fade-up" data-aos-duration="1500">超省電 高品質</p>
    <div class="container wrap">
      <!-- --------------------------- -->
    <swiper :slides-per-view="slidesPerView" :space-between="20"
    navigation :autoplay="true" :loop="true" :modules="modules">
        <swiper-slide>
          <div class="card">
            <img src="@/assets/img/sample06.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img src="@/assets/img/sample06.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img src="@/assets/img/sample06.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img src="@/assets/img/sample06.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img src="@/assets/img/sample06.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
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
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slidesPerView = ref(4);

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

    a {
      color: #fff;
      border: 1px solid #fff;
      padding: .5rem 2rem;
      width: 100%;
    }
    a:hover{
      background: #fff;
      color: #222;
    }
  }

  .swiper{
    --swiper-navigation-color: rgb(255, 211, 77); // 按鈕顏色
    --swiper-navigation-size: 30px;  // 按钮大小
  }

}
</style>
