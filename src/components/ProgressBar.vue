<template>
  <ul class="progress-bar">
    <li class="left" :class="{'active': step ===1}">1.確認訂單</li>
    <li :class="{'active': step ===2}">2.填寫資料</li>
    <li class="right" :class="{'active': step ===3}">3.送出訂單</li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const step = ref(1);

    onMounted(() => {
      if (route.path === '/checkout') {
        step.value = 1;
      }
      if (route.path === '/buyerInfo') {
        step.value = 2;
      }
      if (route.path === '/sendOrder') {
        step.value = 3;
      }
    });

    return { step };
  },
};
</script>

<style lang="scss" scoped>
ul.progress-bar {
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  color: rgb(255, 211, 77);

  li {
    padding: 1.5rem 3rem;
    border: 1px solid rgb(255, 211, 77);

    @media (max-width: 767px) {
      padding: .5rem 1rem;
      font-size: 14px;
    }
  }

  li.left {
    border-radius: .5rem 0 0 .5rem;
  }

  li.right {
    border-radius: 0 .5rem .5rem 0;
  }
}

.active{
  background: rgb(255, 211, 77);
  color: #111;
}
</style>
