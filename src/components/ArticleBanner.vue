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
      <img src="@/assets/img/p01.jpg" alt="" data-aos="flip-left"
      data-aos-duration="1000" data-aos-delay="400">
      <img src="@/assets/img/p02.jpg" alt="" data-aos="flip-left"
      data-aos-duration="1000" data-aos-delay="400">
      <img src="@/assets/img/p04.jpg" alt="" data-aos="flip-left"
      data-aos-duration="1000" data-aos-delay="400">
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

  .wrap {
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    img {
      width: 400px;
      height: 600px;
      object-fit: cover;

      @media (max-width: 900px) {
        width: 30%;
        height: auto;
      }

      @media (max-width: 500px) {
        width: 90%;
        margin-bottom: 1rem;
      }
    }
  }

}
</style>
