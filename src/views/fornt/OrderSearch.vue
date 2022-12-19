<template>
  <div class="order-seaarch">
    <div class="header">
      <h1>訂單查詢</h1>
    </div>

    <div class="container col-12 col-md-6 col-lg-4">
      <div class="search-bar">
          <label for="order-id" class="form-label w-100 mb-0">
            <input type="text" class="form-control order-id" id="order-id" placeholder="請輸入訂單編號">
          </label>
          <input type="submit" value="查詢" class="btn">
        </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped>
.order-seaarch{
  background: rgb(18, 18, 29);
  height: calc(100vh - 91.2px);
}
.header {
  background: url(@/assets/img/orderSearchPage.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center 45%;

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

.search-bar{
  padding: 5rem 0;
  display: flex;
  align-items: center;

  input{
    border-radius: 0;
  }

  input[type=text] {
    background: rgb(18, 18, 29);
    color: #eee;
  }

  input[type=submit] {
    background: rgb(255, 211, 77);
    &:hover{
      color: #fff;
    }
  }
}
</style>
