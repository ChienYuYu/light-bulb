<template>
  <div class="navbar">
    <div class="logo-wrap">
      <router-link to="/">
        <img src="@/assets/img/fakelogo2.png" alt="">
      </router-link>
    </div>
    <!-- <router-link to="/">
      <img src="@/assets/img/fakelogo2.png" alt="">
    </router-link> -->
    <nav>
      <router-link to="/" class="nav-item">首頁</router-link>
      <router-link to="/product/全部" class="nav-item"
        :class="{ 'router-link-exact-active': activeProductItem }">商品列表</router-link>
      <router-link to="/about" class="nav-item">關於我們</router-link>
      <router-link to="/contact" class="nav-item">聯絡我們</router-link>
      <!-- <router-link to="/order-search" class="nav-item">訂單查詢</router-link> -->
    </nav>
    <IconWrap /> <!-- component -->
  </div>
  <!-- --------------桌機↑ / 平板&手機↓--------------------- -->
  <NavbarMobile /> <!-- component -->
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import IconWrap from './NavIcon.vue';
import NavbarMobile from './NavbarMobile.vue';

export default {
  components: { IconWrap, NavbarMobile },
  setup() {
    const route = useRoute();

    // 路徑包含/product就套用 .router-link-exact-active css樣式
    const activeProductItem = computed(() => {
      if (route.path.includes('/product')) {
        return true;
      }
      return false;
    });

    return {
      activeProductItem,
    };
  },
};
</script>

<style lang="scss" scoped>
// 桌機------------------
.navbar {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 1rem;
  background: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    display: none;
  }

  div.logo-wrap {
    // border: 1px solid #fff;
    width: 158px;

    img {
      width: 40px;
    }
  }

  nav {

    a.nav-item::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: rgb(255, 211, 77);
      z-index: -1;
      transition: .3s;
    }

    a.nav-item {
      position: relative;
      display: inline-block;
      padding: 1rem 1.5rem;
      color: #fff;
      text-decoration: none;
      z-index: 2;
      transition: .3s;

      &:hover::before {
        height: 100%;
      }

      &:hover {
        color: #333;
      }
    }

    // ----------------------------
    a.nav-item.router-link-exact-active {
      color: rgb(255, 211, 77);

      &:hover {
        color: #333;
      }
    }

    // ----------------------------
  }

}
</style>
