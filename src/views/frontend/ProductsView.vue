<template>
  <h2>產品列表</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center">
          <li class="category-link mb-xl-4">全部商品</li>
          <li>我的收藏</li>
          <hr>
          <li>乳酪蛋糕</li>
          <li>鮮奶油蛋糕</li>
          <li>磅蛋糕</li>
          <hr>
          <li>手作餅乾</li>
          <li>司康</li>
          <li>其他產品</li>
          <hr>
          <li>優惠組合</li>
          <li>加購商品</li>
        </ul>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-9">
        <div class="row gx-5 gy-3">
          <template v-for="item in products" :key="item.id + 'card'">
            <Card :product="item"></Card>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`).then((res) => {
        this.products = res.data.products;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
