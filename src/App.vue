<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap');

* {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
