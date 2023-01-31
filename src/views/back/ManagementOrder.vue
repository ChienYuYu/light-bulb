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
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const order = ref([]);
    const router = useRouter();

    const getOrderData = () => {
      axios.get('http://localhost:3000/admin/order', { withCredentials: true })
        .then((res) => {
          console.log(res);
          order.value = res.data.order;
        })
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
    };

    const deleteOrder = (id) => {
      axios.delete(`http://localhost:3000/admin/order/${id}`)
        .then(() => {
          router.go(0);
        })
        // eslint-disable-next-line no-alert
        .catch((e) => alert(e));
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
