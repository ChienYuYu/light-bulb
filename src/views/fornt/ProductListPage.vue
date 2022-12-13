<template>
  <div class="productListPage">
    <div class="header">
      <h1>所有商品</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <ul class="category-menu">
            <li>
              <a href="#" @click.prevent="getCategory('全部')"
              :class="{'this-category': category === '全部'}">
                全部</a>
            </li>
            <li>
              <a href="#" @click.prevent="getCategory('LED燈泡')"
              :class="{'this-category': category === 'LED燈泡'}">
                LED燈泡</a>
            </li>
            <li>
              <a href="#" @click.prevent="getCategory('吊燈')"
              :class="{'this-category': category === '吊燈'}">
                吊燈</a>
            </li>
            <li>
              <a href="#" @click.prevent="getCategory('檯燈')"
              :class="{'this-category': category === '檯燈'}">
                檯燈</a>
            </li>
            <li>
              <a href="#" @click.prevent="getCategory('落地燈')"
              :class="{'this-category': category === '落地燈'}">
                落地燈</a>
            </li>
            <li>
              <a href="#" @click.prevent="getCategory('壁燈')"
              :class="{'this-category': category === '壁燈'}">
                壁燈</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-10">
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  components: { ProductCard, Footer },
  setup() {
    const category = ref('');
    const route = useRoute();
    const router = useRouter();

    const getCategory = (c) => {
      router.push(`${c}`);
    };

    watchEffect(() => {
      category.value = route.params.category;
    });

    return { category, getCategory };
  },

};
</script>

<style lang="scss" scoped>
.productListPage {
  background: rgb(18, 18, 29);
}

.header {
  background: url(@/assets/img/productPage02.jpg);
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

.container {
  padding-top: 3rem;
  padding-bottom: 3rem;

  .category-menu {
    list-style: none;
    padding: 0;
    @media (max-width: 1200px) {
      display: flex;
      justify-content: center;
      overflow: scroll;
      border-bottom: 1px solid #666;
    }

    li:not(:last-child) {
      border-bottom: 1px solid #666;
      @media (max-width: 1200px){
        border: none;
      }
    }

    a {
      display: block;
      text-decoration: none;
      color: #fff;
      padding: 1.5rem 0;
      text-align: center;
      @media (max-width: 1200px){
        padding: 1rem 2rem;
        white-space: nowrap;
      }
    }

    a.this-category{
      background: rgb(255, 211, 77);
      color: rgb(18, 18, 29);
    }
  }
}
</style>
