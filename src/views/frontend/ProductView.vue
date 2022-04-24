<template>
  <div
    id="carouselExampleControls"
    class="carousel slide d-sm-none"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner" style="height: 300px">
      <div class="carousel-item active">
        <div :style="{backgroundImage: `url(${product.imageUrl})`}"
        style="height: 300px; background-size: cover; background-position: center center"></div>
        <!-- <img :src="product.imageUrl" class="d-block w-100" alt=""/> -->
      </div>
      <div
        class="carousel-item"
        v-for="imgUrl in product.imagesUrl"
        :key="imgUrl + 'mobildslider'"
      >
         <div :style="{backgroundImage: `url(${imgUrl})`}"
        style="height: 300px; background-size: cover; background-position: center center"></div>
        <!-- <img :src="imgUrl" class="d-block w-100" alt="" /> -->
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
      <div class="col-1 d-sm-flex d-none">
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
            <div class="input-group mb-3 rounded-3 border border-2 border-dark mt-3">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                  @click="minusQty"
                  :disabled="qty <= 1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input
                class="form-control border-0 text-center my-auto shadow-none"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                type="number"
                min="1"
                :max="product.stock"
                v-model="qty"
                readonly
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                  :disabled="qty >= product.stock"
                  @click="addQty"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-9">
            <div class="input-group mb-3 rounded-3 border border-2 border-dark mt-3">
                <button
                  class="btn btn-outline-dark border-0 w-100 py-2"
                  type="button"
                  id="cart-button"
                  @click.prevent="addToCart(this.product.id)"
                >
                  加入購物車
                  <i class="bi bi-cart"></i>
                </button>
            </div>
          </div>
          <div class="col-md-2 col-3">
            <div class="input-group mb-3 rounded-3 border border-2 border-dark mt-3">
                <button
                  class="btn btn-outline-dark border-0 w-100 py-2"
                  type="button"
                  id="cart-button"
                  @click="toggleFavorite(product)"
                >
                  <i class="bi bi-heart-fill" v-if="userFavorite.includes(product.id)"></i>
                  <i class="bi bi-heart" v-else></i>
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
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      product: [],
      userFavorite: JSON.parse(localStorage.getItem('userFavorite')) || [],
      qty: 1,
    };
  },
  inject: ['emitter'],
  methods: {
    getProduct() {
      console.log(this.$route);
      console.log('getProduct');
      console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`).then((res) => {
        console.log('print if success');
        this.product = res.data.product;
      });
    },
    toggleFavorite(product) {
      console.log(product);
      // console.log(this.product);
      const favoriteIndex = this.userFavorite.findIndex((item) => item === product.id);
      console.log(this.userFavorite);
      if (favoriteIndex === -1) {
        this.userFavorite.push(product.id);
        this.emitter.emit('push-message', {
          style: 'success',
          title: '加入成功',
          content: `${this.product.title}已加入最愛清單`,
        });
        console.log('add to favorite', this.userFavorite, product.id);
      } else {
        this.userFavorite.splice(favoriteIndex, 1);
        this.emitter.emit('push-message', {
          style: 'success',
          title: '移除成功',
          content: `${this.product.title}已移除最愛清單`,
        });
        console.log('have to remove', product.id);
      }
      console.log(this.userFavorite);
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: this.qty,
      };
      const status = '購物車新增';
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.$httpMessageState(res, status);
          emitter.emit('get-cart');
          console.log(res);
        });
    },
    addQty() {
      this.qty += 1;
    },
    minusQty() {
      this.qty -= 1;
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
    this.getProduct();
  },
};
</script>
