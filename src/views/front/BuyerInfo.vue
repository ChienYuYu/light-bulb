<template>
  <div class="buyer-info">
    <div class="header">
      <h1>填寫資料</h1>
    </div>
    <ProgressBar />
    <div class="info container">
      <div class="col-10 col-md-6 mx-auto">
        <form class="row g-3">
          <div class="col-md-6">
            <input type="text" class="form-control" id="recipient-name"
            aria-label="1" placeholder="收件人姓名"
              v-model="recipientInfo.recipientName">
          </div>
          <div class="col-md-6">
            <input type="tel" class="form-control" id="recipient-phone"
            aria-label="1" placeholder="收件人電話"
              v-model="recipientInfo.recipientPhone">
          </div>
          <div class="col-lg-12">
            <button class="btn same w-100" @click.prevent="sameAsBuyer">收件人就是我</button>
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="inputAddress" placeholder="收件地址"
            aria-label="1"
              v-model="recipientInfo.recipientAddress">
          </div>
          <div class="col btn-group">
            <RouterLink to="/checkout" class="btn">返回</RouterLink>
            <RouterLink to="" class="btn" @click.prevent="writeBuyerInfo">下一步</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Swal from 'sweetalert2';
import ProgressBar from '@/components/ProgressBar.vue';
import Footer from '@/components/FooterComponent.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getCustomer } from '@/apis/api';

export default {
  components: { Footer, ProgressBar },
  setup() {
    const store = useStore();
    const router = useRouter();
    const buyerInfo = ref({
      buyerName: '',
      buyerPhone: '',
      buyerAddress: '',
    });
    const recipientInfo = ref({
      recipientName: '',
      recipientPhone: '',
      recipientAddress: '',
    });

    // 確保路由切換後再切回欄位資料還在
    const keepInputShow = () => {
      const x = JSON.parse(sessionStorage.getItem('orderInfo'));
      if (x.recipientName !== undefined) {
        recipientInfo.value.recipientName = x.recipientName;
        recipientInfo.value.recipientPhone = x.recipientPhone;
        recipientInfo.value.recipientAddress = x.recipientAddress;
      }
    };

    // 取得帳號資訊(購買者(自己))
    const getBuyerInfo = async () => {
      store.commit('showLoadingCircle', true);
      try {
        const id = localStorage.getItem('userId');
        const res = await getCustomer(id);
        const x = buyerInfo.value;
        x.buyerName = await res.data.name;
        x.buyerPhone = await res.data.tel;
        x.buyerAddress = await res.data.address;
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
      store.commit('showLoadingCircle', false);
    };

    onMounted(() => {
      store.commit('checkout/initSessionStorage');
      keepInputShow();
      getBuyerInfo();
    });

    // 收件人就是我按鈕事件
    const sameAsBuyer = () => {
      const x = recipientInfo.value;
      const y = buyerInfo.value;
      x.recipientName = y.buyerName;
      x.recipientPhone = y.buyerPhone;
      x.recipientAddress = y.buyerAddress;
    };

    // 寫入收件資料 && 驗證欄位是否為空
    const writeBuyerInfo = () => {
      const x = Object.values(recipientInfo.value);
      if (x.includes('') || x.includes(undefined)) {
        Swal.fire({
          icon: 'error',
          title: '欄位不能為空',
          text: '所有欄位都必須填寫',
        });
      } else {
        const data = { ...buyerInfo.value, ...recipientInfo.value };
        store.commit('checkout/writeBuyerInfo', data);
        router.push('/sendOrder');
      }
    };

    return {
      buyerInfo,
      sameAsBuyer,
      writeBuyerInfo,
      keepInputShow,
      recipientInfo,
      getBuyerInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.buyer-info {
  background: rgb(18, 18, 29);
}

.header {
  background: url(@/assets/img/shoppingCartPage.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 60%;

  h1 {
    background: #00000080;
    color: #fff;
    font-weight: 700;
    letter-spacing: .5rem;
    line-height: 300px;
    text-align: center;
    backdrop-filter: blur(3px);
  }
}

.info {
  padding: 5rem 0;

  input {
    background: #111;
    color: #fff;
  }

  button.same {
    border: 1px solid rgb(255, 211, 77);
    color: rgb(255, 211, 77);
    padding: .2rem .3rem;

    &:hover {
      background: rgb(255, 211, 77);
      color: #333;
    }
  }

  .btn-group {
    padding: 3rem 0;
    display: flex;
    justify-content: center;

    a {
      margin: 0 1rem;
      border: 1px solid rgb(255, 211, 77);
      color: rgb(255, 211, 77);

      &:hover {
        background: rgb(255, 211, 77);
        color: #333;
      }
    }
  }
}
</style>
