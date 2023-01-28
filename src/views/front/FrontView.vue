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

    // 驗證是否登入 //////////////////
    const verifyLogin = () => {
      store.dispatch('verifyLogin');
    }; verifyLogin();
  },
};
</script>

<style lang="scss" scoped>

</style>
