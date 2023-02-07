<template>
  <LoadingView v-if="showLoadingCircle"/>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import Navbar from '@/components/Navbar/NavbarComponent.vue';
import LoadingView from '@/components/LoadingEffect.vue';
import { verifyLogin, getFavorite, getCart } from '@/apis/api';

export default {
  components: { Navbar, LoadingView },
  setup() {
    const store = useStore();
    const showLoadingCircle = computed(() => store.state.showLoadingCircle);

    async function getMyFavorite() {
      const uid = localStorage.getItem('userId');
      const res = await getFavorite(uid);
      store.commit('myFavorite/initFavorite', res.data.favorite);
    }

    async function getMyCart() {
      const uid = localStorage.getItem('userId');
      const res = await getCart(uid);
      store.commit('shoppingCart/initCart', res.data.cart);
    }

    async function checkLogin() {
      try {
        const res = await verifyLogin();
        if (await res.data.isLogin === true) {
          store.commit('loginStatus', true);
          await getMyFavorite();
          await getMyCart();
          // const uid = localStorage.getItem('userId');
          // const res1 = await getFavorite(uid);
          // store.commit('myFavorite/initFavorite', res1.data.favorite);
          // const res2 = await getCart(uid);
          // store.commit('shoppingCart/initCart', res2.data.cart);
        } else {
          store.commit('loginStatus', false);
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    }

    onMounted(() => {
      checkLogin();
    });

    return { showLoadingCircle };
  },
};
</script>

<style lang="scss" scoped>

</style>
