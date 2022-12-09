<template>
  <div class="hot-product">
    <h2 data-aos="fade-up" data-aos-duration="1000">超值熱賣商品</h2>
    <p data-aos="fade-up" data-aos-duration="1500">超省電 高品質</p>
    <div class="container wrap">

      <div class="row">

        <div class="col-md-4 col-lg-3">
          <div class="card">
            <img src="@/assets/img/sample01.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-lg-3">
          <div class="card">
            <img src="@/assets/img/sample01.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-lg-3">
          <div class="card">
            <img src="@/assets/img/sample01.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-lg-3">
          <div class="card">
            <img src="@/assets/img/sample01.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn">加入購物車</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.hot-product {
  background: rgb(8, 8, 11);
  padding: 3rem 0;
  text-align: center;

  h2 {
    color: #fff;
    line-height: 1.5;
  }

  p {
    color: rgb(255, 211, 77);
  }
  .wrap {
    // padding: 3rem 0; // 會出現x軸
    padding-top: 3rem;
  }
  .card {
    border: 1px solid #222;
    background: #222;

    h5 {
      color: #fff;
    }

    a {
      color: #fff;
      border: 1px solid #fff;
      padding: .5rem 2rem;
    }
  }
}
</style>
