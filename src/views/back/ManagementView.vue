<!-- eslint-disable no-alert -->
<template>
  <LoadingView v-if="showLoadingCircle"/>
  <div class="wrapper">
    <div class="side-menu">
      <div class="wrap">
        <h2>後臺管理</h2>
        <router-link to="/management/order" class="temp">訂單管理</router-link>
        <router-link to="/management">預留欄位</router-link>
        <router-link to="/management">預留欄位</router-link>
        <router-link to="/management">預留欄位</router-link>
        <router-link to="/management">預留欄位</router-link>
      </div>
      <a href="#" class="logout" @click.prevent="logout">登出</a>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import LoadingView from '@/components/LoadingEffect.vue';
import { adminLogout, adminVerify } from '@/apis/api';

export default {
  components: { LoadingView },
  setup() {
    const router = useRouter();
    const store = useStore();
    const showLoadingCircle = computed(() => store.state.showLoadingCircle);

    async function logout() {
      try {
        store.commit('showLoadingCircle', true);
        const res = await adminLogout();
        if (await res.data.success) {
          router.push('/admin-login');
        }
        store.commit('showLoadingCircle', false);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    }

    onMounted(async () => {
      try {
        store.commit('showLoadingCircle', true);
        const res = await adminVerify();
        if (!res.data.isLogin) {
          router.push('/admin-login');
        }
        store.commit('showLoadingCircle', false);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    });

    return { logout, showLoadingCircle };
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  background: rgb(18, 18, 29);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  .side-menu{
    width: 20%;
    border-right: 1px solid #aaa;
    padding: 2rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2{
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
    }
    .wrap{
      width: 100%;
    }
    .temp{
      color: rgb(255, 211, 77);
    }
    a{
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: #fff;
      padding: 1.5rem;
      display: block;
      &:hover{
        background: rgb(255, 211, 77);
        color: #333;
      }
    }
    a.logout{
      border-top: 1px solid #aaa;
    }
  }
  .main{
    width: 80%;
    // border: 1px solid #fa0;
  }
}
</style>
