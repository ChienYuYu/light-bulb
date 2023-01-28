<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar/NavbarComponent.vue';

export default {
  components: { Navbar },
  setup() {
    const store = useStore();

    // 執行初始收藏清單localStorage
    const initLocalStorage = () => {
      store.commit('myFavorite/initFavoriteLocalStorage');
    }; initLocalStorage();

    // 驗證是否登入 //////////////////
    const verifyLogin = () => {
      store.dispatch('verifyLogin');
    }; verifyLogin();
  },
};
</script>

<style lang="scss" scoped>

</style>
