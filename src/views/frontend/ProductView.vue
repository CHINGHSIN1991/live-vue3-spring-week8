<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner" style="height: 300px">
      <div class="carousel-item active">
        <img :src="product.imageUrl" class="d-block w-100" alt="" />
      </div>
      <div
        class="carousel-item"
        v-for="imgUrl in product.imagesUrl"
        :key="imgUrl + 'mobildslider'"
      >
        <img :src="imgUrl" class="d-block w-100" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
    <!-- {{ product }} -->
    <div class="row">
      <div class="col-1">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="imgUrl in product.imagesUrl"
            :key="imgUrl + 'pcslider'"
          >
            <img :src="imgUrl" class="card-img-top" alt="" />
          </li>
        </ul>
      </div>
      <div class="col-5">
        <img :src="product.imageUrl" class="card-img-top" alt="" />
      </div>
      <div class="col-1"></div>
      <div class="col-sm-5">
        <div class="menu-chain d-flex text-center mb-4">
          <router-link to="/products">產品連結</router-link>
          >
          <router-link to="/products">{{ product.category }}</router-link>
        </div>
        <h1 class="mb-4">{{ product.title }}</h1>
        <h2 class="mb-4">{{ product.price }} / {{ product.unit }}</h2>

        <div class="row">
          <div class="col-md-5">
            <div class="input-group mb-3 rounded-3 border mt-3">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-3"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-3"
                  type="button"
                  id="button-addon2"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="input-group mb-3 rounded-3 border mt-3">
                <button
                  class="btn btn-outline-dark border-0 py-3"
                  type="button"
                  id="cart-button"
                >
                  加入購物車
                  <i class="bi bi-cart"></i>
                </button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="input-group mb-3 rounded-3 border mt-3">
                <button
                  class="btn btn-outline-dark border-0 py-3"
                  type="button"
                  id="cart-button"
                >
                  <i class="bi bi-heart"></i>
                  <i class="bi bi-heart-fill"></i>
                </button>
            </div>
          </div>
        </div>

        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProduct() {
      console.log(this.$route);
      const { id } = this.$route.params;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
