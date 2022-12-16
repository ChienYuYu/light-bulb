<template>
  <div class="contact-us">
    <div class="header">
      <h1>聯絡我們</h1>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .header{
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
</style>
