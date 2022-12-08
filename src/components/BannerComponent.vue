<template>
  <div class="banner">
    <div class="slogan">
      <h2>神說要有光 就有了光</h2>
      <button class="btn">前往購物</button>
    </div>
    <swiper :slides-per-view="1" :space-between="0"
    @swiper="onSwiper" @slideChange="onSlideChange"
      :autoplay="true" :loop="true" :modules="modules">
      <swiper-slide>
        <img src="@/assets/img/banner03.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/banner02.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/banner01.jpg" alt="">
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, EffectFade],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .slogan {
    padding: 2rem;
    text-align: center;
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    background: rgba(145, 49, 49, 0.2);
    backdrop-filter: blur(8px);

    h2 {
      font-weight: 700;
      color: #fff;
      margin-bottom: 1rem;
    }

    button {
      border: 1px solid rgb(255, 186, 49);
      color: rgb(255, 186, 49);
      transition: .3s;
    }

    button:hover {
      background: #fa0;
      color: #fff;
    }
  }
}
</style>
