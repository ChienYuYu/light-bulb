<template>
  <div class="home">
    <BannerCarousel></BannerCarousel>
    <ArticleBanner></ArticleBanner>
    <HomeHotProduct></HomeHotProduct>
    <CouponCode></CouponCode>
    <Footer></Footer>
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
import Footer from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    BannerCarousel,
    ArticleBanner,
    HomeHotProduct,
    CouponCode,
    Footer,
  },
  setup() {
    onMounted(() => {
      AOS.init({
        once: true,
      });
    });
  },
};
</script>
