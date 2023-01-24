<template>
  <div class="wrapper">
    <div class="box">
      <div class="wrap">
        <h2>購買紀錄</h2>
        <div class="history">
          <p class="date">2023/2/1</p>
          <div>
            <p class="m-date">2023/2/1</p>
            <ul>
              <li>8w led燈泡 x3 / $59</li>
              <li>ooxx質感檯燈 x1 / $1299</li>
              <li>asdfse浮誇落地燈 x1 / $3380</li>
              <li>8w 愛迪生可調光燈泡 x3 / $249</li>
            </ul>
          </div>
          <p>$2500</p>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer },
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
