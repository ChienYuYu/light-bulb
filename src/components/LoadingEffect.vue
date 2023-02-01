<template>
  <div class="run-loading">
    <div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.run-loading{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: #ffffffe8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
