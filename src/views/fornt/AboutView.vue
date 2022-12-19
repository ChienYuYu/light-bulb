<template>
  <div class="about">
    <div class="header">
      <h1>關於我們</h1>
    </div>
    <div class="container">
      <div class="col-10 part1 mx-auto">
        <img src="@/assets/img/aboutPage02.jpg" alt="">
        <div class="text-group">
          <div class="txt">
            <h2>創辦人 <span>伊厄參寺吾</span></h2>
            <p>伊先生是冕光集團創辦人、冕光公司榮譽董事長、
              冕光基金會董事長，也是冕光、冕光人壽董事，並曾任台積電董事。
              他長期推廣再生，積極推動台灣產業轉型升級，提升台灣永續競爭力，
              並站在「環境」與「科技」的天平兩端，扮演「環境科技整合的推動者」，
              跨域創造價值。</p>
          </div>
          <!-- <div class="txt">
            <h2>企業理念</h2>
              <p>
              秉持著「品質、服務、踏實、創新」四大經營理念，
              冕光科技從草創時的五位員工經過四十餘年的成長茁壯，
              今日已於海內外五個據點擁有超過一百位員工。從今而後，
              冕光全體同仁自我期許能將全球最新的流行元素化作源源不絕的創新動力，
              搭配公司多年來累積的生產管理及運籌經驗，不斷地將最新穎且富有市場價值的照明產品推向全世界各個角落。
            </p>
          </div> -->
        </div>
      </div>

      <div class="col-10 col-md-8 part2 mx-auto">
        <h2>企業理念</h2>
        <p>
          秉持著「品質、服務、踏實、創新」四大經營理念，
          冕光科技從草創時的五位員工經過四十餘年的成長茁壯，
          今日已於海內外五個據點擁有超過一百位員工。從今而後，
          冕光全體同仁自我期許能將全球最新的流行元素化作源源不絕的創新動力，
          搭配公司多年來累積的生產管理及運籌經驗，不斷地將最新穎且富有市場價值的照明產品推向全世界各個角落。
        </p>
      </div>

    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped>
.about {
  background: rgb(18, 18, 29);
  height: 100vh;
}

.header {
  background: url(@/assets/img/aboutPage01.jpg);
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

// ----------------

.part1 {
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    height: 400px;
    margin: 1rem 2rem;
    border-radius: 1rem;
  }

  .txt {
    color: #eee;
    h2{
      margin-bottom: 1rem;
    }

    h2 span {
      color: rgb(255, 211, 77);
    }
  }
}

.part2 {
  padding-bottom: 5rem;
  color: #eee;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
