<!-- eslint-disable no-alert -->
<template>
  <div>
    <h3 class="title">訂單管理</h3>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">日期</th>
          <th scope="col">購買人</th>
          <th scope="col">品項</th>
          <th scope="col">金額</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order" :key="item.d_id">
          <td>{{ item.date }}</td>
          <td>{{ item.buyerName }}</td>
          <td>
            <p v-for="(p,i) in item.buyItem" :key="i">{{ p.title }}</p>
          </td>
          <td>{{ item.couponPrice }}</td>
          <td><button class="delete btn" @click="deleteOrder(item.d_id)">刪除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getAllOrder, adminDeleteOrder } from '@/apis/api';

export default {
  setup() {
    const order = ref([]);
    const router = useRouter();
    const store = useStore();

    const getOrderData = async () => {
      try {
        store.commit('showLoadingCircle', true);
        const res = await getAllOrder();
        order.value = await res.data.order;
        store.commit('showLoadingCircle', false);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    };

    const deleteOrder = async (id) => {
      try {
        store.commit('showLoadingCircle', true);
        await adminDeleteOrder(id);
        router.go(0);
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e);
      }
    };

    onMounted(() => {
      getOrderData();
    });

    return { order, getOrderData, deleteOrder };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 2rem;
  color: #fff;
}

table {
  width: 80%;
  margin: 2rem;
  color: #fff;

  button.delete{
    background: rgb(249, 85, 85);
    color: #fff;
  }
}
</style>
