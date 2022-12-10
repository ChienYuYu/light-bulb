<template>
  <div class="home">
    <BannerCarousel></BannerCarousel>
    <ArticleBanner></ArticleBanner>
    <HomeHotProduct></HomeHotProduct>
    <CouponCode></CouponCode>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannerCarousel from '@/components/BannerCarousel.vue';
import ArticleBanner from '@/components/ArticleBanner.vue';
import HomeHotProduct from '@/components/HomeHotProduct.vue';
import CouponCode from '@/components/HomeCouponCode.vue';

export default {
  name: 'HomeView',
  components: {
    BannerCarousel,
    ArticleBanner,
    HomeHotProduct,
    CouponCode,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
