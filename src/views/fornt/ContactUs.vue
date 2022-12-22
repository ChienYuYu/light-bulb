<template>
  <div class="contact-us">
    <div class="header">
      <h1>聯絡我們</h1>
    </div>

    <div class="container send-message">
      <form class="info-group col-10 col-md-8 col-lg-6" @submit="sendMsg">
        <div class="col-12 mb-3">
          <label for="phone-number" class="form-label w-100">
            <input type="tel" class="form-control phone" id="phone-number"
            placeholder="請輸入手機" v-model="contactData.phone" >
          </label>
        </div>
        <div class="col-12 mb-3">
          <label for="email" class="form-label w-100">
            <input type="email" class="form-control email" id="email"
            placeholder="請輸入Email" v-model="contactData.email">
          </label>
        </div>
        <div class="col-12 mb-3">
          <textarea name="" id="message" rows="3" class="form-control msg" aria-label="1"
            placeholder="請輸入訊息" v-model="contactData.message"></textarea>
        </div>
        <div class="col-12">
          <input type="submit" class="btn submit-btn col-12">
        </div>
      </form>
    </div>

    <!-- ------------------------------ -->
    <iframe title="This is a unique title"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8253926713064!2d121.5105315309981!3d25.03999898303486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90a8d497325%3A0x2876dc1b4d647f9!2z5Lit6I-v5rCR5ZyL57i957Wx5bqc!5e0!3m2!1szh-TW!2stw!4v1653186517168!5m2!1szh-TW!2stw"
      width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!-- ------------------------------ -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';

export default {
  components: { Footer },
  setup() {
    const contactData = ref({
      phone: '',
      email: '',
      message: '',
    });

    const sendMsg = () => {
      const x = Object.values(contactData.value);
      console.log(x);
      if (x.includes('')) {
        Swal.fire({
          icon: 'error',
          title: '欄位不能為空',
          text: '所有欄位都必須填寫',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '訊息已送出',
          showConfirmButton: false,
          timer: 1200,
        });
        contactData.value = {};
      }
    };

    return { contactData, sendMsg };
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  height: 100vh;
  background: rgb(18, 18, 29);
}

.header {
  background: url(@/assets/img/contactPage.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 30%;

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

.send-message {
  padding: 3rem 0;

  .info-group {
    margin: 0 auto;
    padding: 3rem;
    border: 1px solid rgb(255, 211, 77);
    border-radius: 1rem;

    @media (max-width:830px) {
      padding: 2rem;
    }

    input,
    textarea {}

    .phone,
    .email,
    .msg {
      background: rgb(18, 18, 29);
      border: 1px solid #666;
      color: #fff;
    }

    .submit-btn {
      background: rgb(255, 211, 77);
    }
  }
}
</style>
