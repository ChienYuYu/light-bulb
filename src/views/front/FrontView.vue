<template>
  <LoadingView v-if="showLoadingCircle"/>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Navbar from '@/components/Navbar/NavbarComponent.vue';
import LoadingView from '@/components/LoadingEffect.vue';

export default {
  components: { Navbar, LoadingView },
  setup() {
    const store = useStore();
    const showLoadingCircle = computed(() => store.state.showLoadingCircle);
    const verifyLogin = () => {
      store.dispatch('verifyLogin');
    }; verifyLogin();

    return { showLoadingCircle };
  },
};
</script>

<style lang="scss" scoped>

</style>
