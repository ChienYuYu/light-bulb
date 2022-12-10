<template>
  <div class="coupon-code">
    <div class="wrap" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
      <h2>結帳輸入 {{ couponCode }} 即享9折優惠</h2>
      <button class="btn" @click="copyCouponCode(couponCode)">點我複製優惠碼</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2';
// navigator.clipboard.writeText(); 開發階段在手機瀏覽器上看會沒反應，因為它僅支援https網址。
// 開發階段在電腦用 Chrome 連 http://localhost:8080/ 可以
// 開發階段在電腦用 Chrome 連 http://192.168.72.xxx:8080/ 不行
// https://www.raymondcamden.com/2018/04/19/an-example-of-the-async-clipboard-api-with-vuejs
export default {
  setup() {
    const couponCode = ref('bulb999');
    const copyCouponCode = () => {
      navigator.clipboard
        .writeText(couponCode.value)
        .then(() => {
          Swal.fire({
            title: '代碼已複製!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    };
    return { couponCode, copyCouponCode };
  },
};
</script>

<style lang="scss" scoped>
.coupon-code {
  background: rgb(18, 18, 29);
  padding: 3rem;
  text-align: center;

  .wrap {
    border: 1px solid #777;
    display: inline-block;
    padding: 3rem;
    border-radius: 1rem;
  }

  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }

  button {
    // background: rgb(255, 211, 77);
    border: 1px solid rgb(255, 211, 77);
    color: rgb(255, 211, 77);
    padding: 1rem 1.5rem;

    // transition: .5s;
    &:hover {
      background: rgb(255, 211, 77);
      color: rgb(18, 18, 29);
    }
  }
}
</style>
