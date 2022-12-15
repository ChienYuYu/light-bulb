<template>
  <div class="article-banner">
    <div class="title">
      <h2  data-aos="fade-up" data-aos-duration="1000">
        你要找的不是最亮的燈<br>而是最合適的燈
      </h2>
      <p  data-aos="fade-up" data-aos-duration="1500">
        只要用對燈光就能點亮與眾不同的生活場景
      </p>
    </div>
    <div class="wrap">
      <router-link to="/product/全部">
        <img src="@/assets/img/p01.jpg" alt="" data-aos="flip-left"
        data-aos-duration="1000" data-aos-delay="400">
      </router-link>
      <router-link to="/product/全部">
        <img src="@/assets/img/p02.jpg" alt="" data-aos="flip-left"
        data-aos-duration="1000" data-aos-delay="400">
      </router-link>
      <router-link to="/product/全部">
        <img src="@/assets/img/p04.jpg" alt="" data-aos="flip-left"
        data-aos-duration="1000" data-aos-delay="400">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.article-banner {
  background: rgb(18, 18, 29);

  .title {
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
  }

  // ----------------------------------
  .wrap {
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    a{
      display: block;
      width: 400px;
      height: 600px;
      overflow: hidden;

      @media (max-width: 1200px) {
        width: 30%;
        height: 480px;
      }

      @media (max-width: 1080px) {
        height: 340px;
      }

      @media (max-width: 500px) {
        width: 90%;
        height: 480px;
        margin-bottom: 1rem;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

}
</style>
