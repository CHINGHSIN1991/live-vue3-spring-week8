<template>
  <h2>產品列表</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <ul class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center">
          <li><button type="button" @click="getProducts('')">全部商品</button></li>
          <li><button type="button" @click="goToFavorite">我的收藏</button></li>
          <hr>
          <li><button type="button" @click="getProducts('乳酪蛋糕')">乳酪蛋糕</button></li>
          <li>鮮奶油蛋糕</li>
          <li><button type="button" @click="getProducts('磅蛋糕')">磅蛋糕</button></li>
          <hr>
          <li><button type="button" @click="getProducts('餅乾')">手作餅乾</button></li>
          <li>司康</li>
          <li>其他產品</li>
          <hr>
          <li>優惠組合</li>
          <li>加購商品</li>
        </ul>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-9">
        <div class="row g-4 px-2">
          <template v-for="item in products" :key="item.id + 'card'">
            <Card :product="item"
            :userFavorite="userFavorite"
            @toggle-favorite="toggleFavorite"></Card>
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
      userFavorite: JSON.parse(localStorage.getItem('userFavorite')) || [],
      favoriteProductList: [],
      inFavoritePage: false,
    };
  },
  methods: {
    getProducts(category) {
      this.inFavoritePage = false;
      if (category) {
        this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`).then((res) => {
          this.products = res.data.products;
        });
      } else {
        this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`).then((res) => {
          this.products = res.data.products;
        });
      }
    },
    toggleFavorite(id) {
      console.log(id);
      const favoriteIndex = this.userFavorite.findIndex((item) => item === id);
      console.log(this.userFavorite);
      if (favoriteIndex === -1) {
        this.userFavorite.push(id);
        console.log('add to favorite', this.userFavorite, id);
      } else {
        this.userFavorite.splice(favoriteIndex, 1);
        console.log('have to remove', id);
      }
      console.log(this.userFavorite);
    },
    goToFavorite() {
      this.inFavoritePage = true;
      this.getFavorite();
    },
    getFavorite() {
      this.favoriteProductList = [];
      if (this.userFavorite.length > 0) {
        this.userFavorite.forEach((item) => {
          this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`)
            .then((res) => {
              this.favoriteProductList.push(res.data.product);
            }).catch(() => {
              this.emitter.emit('push-message', {
                type: 'error',
                message: '發生錯誤，請重新整理頁面',
              });
            });
        });
        this.products = this.favoriteProductList;
      } else {
        this.products = [];
      }
    },
  },
  watch: {
    userFavorite: {
      handler() {
        localStorage.setItem('userFavorite', JSON.stringify(this.userFavorite));
        if (this.inFavoritePage === true) {
          this.getFavorite();
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
