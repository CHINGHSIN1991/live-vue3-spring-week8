<template>
  <h2>產品列表</h2>
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-4 g-3">
      <!-- row決定內層的數量-->
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.imageUrl" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.discription }}</p>
            <router-link :to="`/product/${product.id}`" class="btn btn-primary"
              >詳細內容</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">1233211234567</div>
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-6"
            v-for="product in products"
            :key="product.id + 'product'"
          >
            <div class="card border-0 mb-4 position-relative position-relative">
              <a
                href="#"
                class="btn btn-sm btn-secondary text-white secondary-hover me-2"
              >
                <i class="bi bi-heart"></i>
              </a>
              <a
                href="#"
                class="
                  btn btn-sm btn-outline-secondary
                  white-hover
                  cartCard-btn
                  me-2
                "
              >
                <i class="bi bi-heart-fill"></i>
              </a>
              <img :src="product.imageUrl" class="card-img-top" alt="..." />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0 text-center">
                <h5 class="mb-0 mt-3">
                  <a href="#">{{ product.title }}</a>
                </h5>
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet
                </p>
                <p class="text-muted mt-3">NT${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
