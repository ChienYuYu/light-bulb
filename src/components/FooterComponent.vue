<template>
  <div class="footer">
    <h3>© {{ year }} by Chen Chien Yu</h3>
  </div>
</template>

<script>
export default {
  setup() {
    const year = new Date().getFullYear();
    return { year };
  },

};
</script>

<style lang="scss" scoped>
.footer{
  text-align: center;
  padding: 2rem;
  background: rgb(8, 8, 11);;
  h3{
    font-size: 1rem;
    color: #aaa;
    font-weight: 300;
  }
}
</style>
