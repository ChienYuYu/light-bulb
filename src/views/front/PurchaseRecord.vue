<template>
  <div class="wrapper">
    <div class="box">
      <div class="wrap">
        <h2>購買紀錄</h2>
        <h3 v-if="noRecord">- 尚無購買紀錄 -</h3>
        <div class="history" v-for="(item, i) in order" :key="i">
          <p class="date">{{ item.date }}</p>
          <div>
            <p class="m-date">{{ item.date }}</p>
            <ul>
              <li v-for="(p, i) in item.buyItem" :key="i">{{ p.title }}</li>
            </ul>
          </div>
          <p>${{ item.couponPrice }}</p>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { Footer },
  setup() {
    const store = useStore();
    const order = ref([]);
    const noRecord = ref(true);

    onMounted(async () => {
      const id = localStorage.getItem('userId');
      store.commit('showLoadingCircle', true);
      try {
        // http://localhost:3000/customer/history/${id}
        const res = await axios.get(`${process.env.VUE_APP_API}/customer/history/${id}`, { withCredentials: true });
        if (await res.data.order.length !== 0) {
          noRecord.value = false;
        } else {
          noRecord.value = true;
        }
        order.value = res.data.order;
        store.commit('showLoadingCircle', false);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    });
    return { noRecord, order };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -999;
  background: rgb(18, 18, 29);
  overflow: auto;

  .box {
    padding-top: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: #fff;
      margin-bottom: 2rem;
      text-align: center;
    }

    h3 {
      color: #888;
      margin-top: 6rem;
      text-align: center;
    }

    div.history {
      width: 33%;
      margin: 0 auto 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #eee;
      border: 1px solid #aaa;
      border-radius: .5rem;
      padding: 1rem;

      @media (max-width: 1600px) {
        width: 50%;
      }

      @media (max-width: 1000px) {
        width: 80%;
      }

      @media (max-width: 500px) {
        width: 95%;
        padding: .25rem;
      }

      p.date {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }

      p.m-date {
        @media (min-width: 768px) {
          display: none;
        }
      }

      p,
      ul {
        margin: 1rem;
      }
    }
  }
}
</style>
