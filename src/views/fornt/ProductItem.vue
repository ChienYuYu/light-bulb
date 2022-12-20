<template>
  <div class="product-item">
    <div class="container">
      <!-- ------------------------------------------- -->
      <div class="row part-1">
        <div class="col-md-6 pic">
          <img src="@/assets/img/sample04.jpg" alt="">
        </div>
        <div class="col-md-6 title-price-qty">
          <div class="txt-group">
            <h2 class="title">標題標題</h2>
            <p class="description">文字文字文字</p>
            <p class="price">$299</p>
          </div>
          <div class="qty-group">
            <button class="sub">-</button>
            <input type="number" aria-label="1" value="1">
            <button class="add">+</button>
          </div>
          <div class="row button-wrap">
            <div class="col">
              <button class="btn add-cart">加入購物車</button>
            </div>
            <div class="col">
              <button class="btn direct-buy">直接購買</button>
            </div>
          </div>
          <div class="inside shopping-notes">
            <h2>購物須知</h2>
            <p>
              訂購與配送：完成訂購流程後，商品將依訂單順序於 3-5 日工作天內出貨，
              出貨後的 3-5 日工作天可送達指定地址。出貨工作日為週一至週五，週末不出貨，
              若遇缺貨、瑕疵等商品狀況，會以電話或 email 聯繫。
            </p>
            <p>
              週末與國定假日訂購及配送：週四晚間 6 點 至週日全天之間完成訂購之訂單，
              我們會在下個星期一起依訂購順序為您處理包裝出貨。 如遇國定假日，則會順延至正常上班日依序出貨，敬請見諒。
            </p>
            <p>
              臺灣配送時程：臺北市地區於出貨後 1-2 日內即會送達；
              臺灣其他地區（不含偏遠與離島）則於出貨後的 1-3 日內送達；
              臺灣本島偏遠地區與離島則需視投遞狀況調整配送時間。
            </p>
          </div>
        </div>
      </div>
      <!-- ------------------------------------------- -->
      <div class="outside shopping-notes">
        <h2 class="text-center">購物須知</h2>
        <p>
          訂購與配送：完成訂購流程後，商品將依訂單順序於 3-5 日工作天內出貨，
          出貨後的 3-5 日工作天可送達指定地址。出貨工作日為週一至週五，週末不出貨，
          若遇缺貨、瑕疵等商品狀況，會以電話或 email 聯繫。
        </p>
        <p>
          週末與國定假日訂購及配送：週四晚間 6 點 至週日全天之間完成訂購之訂單，
          我們會在下個星期一起依訂購順序為您處理包裝出貨。 如遇國定假日，則會順延至正常上班日依序出貨，敬請見諒。
        </p>
        <p>
          臺灣配送時程：臺北市地區於出貨後 1-2 日內即會送達；
          臺灣其他地區（不含偏遠與離島）則於出貨後的 1-3 日內送達；
          臺灣本島偏遠地區與離島則需視投遞狀況調整配送時間。
        </p>
      </div>
      <!-- -------------------------- -->

    </div>
  </div>
  <HotProduct></HotProduct>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import HotProduct from '@/components/HomeHotProduct.vue';

export default {
  components: { Footer, HotProduct },
};
</script>

<style lang="scss" scoped>
.product-item {
  padding: 6rem 0;
  background: rgb(18, 18, 29);
}

// ------------------------------
.part-1 {
  // border: 1px solid #f00;
  color: #fff;

  // col---------
  img {
    width: 100%;
  }

  // col---------
  .title-price-qty {}

  .txt-group {

    h2,
    p {
      @media (max-width:767px) {
        text-align: center;
      }
    }

    h2.title {
      margin: 1rem 0;
    }

    p.description {
      margin-bottom: 0;
    }

    p.price {
      font-size: 2rem;
      color: rgb(255, 57, 57);
      margin-bottom: 1rem;
    }
  }

  .qty-group {
    width: 50%;
    padding-bottom: 2rem;
    // border: 1px solid #f00;
    @media (max-width: 767px) {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    input[type=number] {
      width: 30%;
      text-align: center;
      padding: 0;
      border: 1px solid#aaa;
      background: #111;
      color: #fff;

      @media (max-width: 767px) {
        width: 50%;
      }
    }

    button.sub,
    button.add {
      background: rgb(255, 211, 77);
      border: none;
    }
  }

  .button-wrap {
    padding-bottom: 2rem;

    button {
      width: 100%;
      border: 1px solid rgb(255, 211, 77);
      color: rgb(255, 211, 77);

      &:hover {
        background: rgb(255, 211, 77);
        color: #111;
      }
    }
  }

}

.shopping-notes {
  color: #fff;

  @media (max-width:1199px) {
    display: none;
  }

  h2 {
    margin-bottom: 1rem;
  }
}

.outside.shopping-notes {
  display: none;

  @media (max-width: 1199px) {
    margin-top: 3rem;
    display: block;
  }
}

// input type number 隱藏箭頭
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
