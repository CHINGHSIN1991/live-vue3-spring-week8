<template>
  <div class="container mt-5">
    <div class="row mb-5">
      <div class="col-md-2 mt-3">
        <ProductsMenu :nowCategory="nowCategory"
        @get-products="getProducts"
        @go-to-favorite="goToFavorite">
        </ProductsMenu>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-9">
        <div class="row g-3 px-2">
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
import ProductsMenu from '@/components/ProductsMenu.vue';

export default {
  components: {
    Card, ProductsMenu,
  },
  data() {
    return {
      products: [],
      userFavorite: JSON.parse(localStorage.getItem('userFavorite')) || [],
      favoriteProductList: [],
      inFavoritePage: false,
      nowCategory: '',
    };
  },
  inject: ['emitter'],
  methods: {
    getProducts(category) {
      this.inFavoritePage = false;
      if (category) {
        this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`).then((res) => {
          this.products = res.data.products;
          this.nowCategory = category;
        });
      } else {
        this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`).then((res) => {
          this.products = res.data.products;
          this.nowCategory = '';
        });
      }
    },
    toggleFavorite(product) {
      console.log(product);
      console.log(product.id);
      const favoriteIndex = this.userFavorite.findIndex((item) => item === product.id);
      if (favoriteIndex === -1) {
        this.userFavorite.push(product.id);
        this.emitter.emit('push-message', {
          style: 'success',
          title: '加入成功',
          content: `${product.title}已加入最愛清單`,
        });
        console.log('add to favorite', this.userFavorite, product.id);
      } else {
        this.userFavorite.splice(favoriteIndex, 1);
        this.emitter.emit('push-message', {
          style: 'success',
          title: '移除成功',
          content: `${product.title}已從最愛清單移除`,
        });
        console.log('have to remove', product.id);
      }
      console.log(this.userFavorite);
    },
    goToFavorite() {
      this.inFavoritePage = true;
      this.getFavorite();
      this.nowCategory = 'favorite';
    },
    getFavorite() {
      this.favoriteProductList = [];
      if (this.userFavorite.length > 0) {
        this.userFavorite.forEach((item) => {
          this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${item}`)
            .then((res) => {
              this.favoriteProductList.push(res.data.product);
            }).catch((err) => {
              console.log(err);
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
    // nowCategory: {
    //   handler() {
    //     this.getProducts(this.nowCategory);
    //   },
    // },
  },
  mounted() {
    this.getProducts(this.$route.query.category);
  },
};
</script>
