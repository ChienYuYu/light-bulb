<template>
  <div class="favorite-page-mobile">
    <div class="header">
      <h1>收藏清單</h1>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .header {
  background: url(@/assets/img/favoritePage01.jpg);
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center 30%;

  h1 {
    background: #00000080;
    color: #fff;
    font-weight: 700;
    letter-spacing: .5rem;
    line-height: 200px;
    text-align: center;
    backdrop-filter: blur(2px);
  }
}
</style>
