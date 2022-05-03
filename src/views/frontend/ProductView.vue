<template>
  <div
    id="carouselExampleControls"
    class="carousel slide d-md-none"
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
  <div class="container mt-6">
    <!-- {{ product }} -->
    <div class="row">
      <div class="col-1 d-xl-flex d-none">
        <ul class="list-group list-group-flush">
          <li
            v-for="imgUrl in product.imagesUrl"
            :key="imgUrl + 'pcslider'"
          >
            <a href="#" @click.prevent="changeImage(imgUrl)">
              <img :src="imgUrl"
              class="product-transition card-img-top rounded-2 m-1 w-75"
              :class="{ 'border border-warning border-3': this.currentImage === imgUrl }"
              alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="col-xl-5 col-6 border-2 d-md-block d-none">
        <img :src="currentImage" class="m-1 card-img-top rounded-2" alt="" />
        <ul class="d-xl-none d-sm-inline-flex d-none mt-2">
          <li
            v-for="imgUrl in product.imagesUrl"
            :key="imgUrl + 'pcslider'"
            class="product-pcitem"
          >
            <a href="#" @click.prevent="changeImage(imgUrl)">
              <img :src="imgUrl"
              class="card-img-top rounded-2 m-1 w-75"
              :class="{ 'border border-warning border-3': this.currentImage === imgUrl }"
              alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="col-1 d-md-block d-none"></div>
      <div class="col-md-5 px-md-0 px-4">
        <div class="menu-chain d-flex text-center mb-4">
          <a href="#" @click.prevent="goToCategory()" class="home-category-link">
            全部商品
          </a>
          <span class="mx-3">></span>
          <a href="#" @click.prevent="goToCategory(product.category)" class="home-category-link">
            {{ product.category }}
          </a>
        </div>
        <h1 class="mb-3 fs-3 fw-bold">{{ product.title }}</h1>
        <div class="d-flex mb-3">
          <div v-if="product.refrigeration"
          class="px-3 py-1 me-3
          border border-info border-2
          d-inline-block rounded-pill text-info
          fs-8 fw-bold">
            <i class="bi bi-snow3 me-1"></i>產品需冷藏
          </div>
          <div v-else
          class="px-3 py-1 me-3
          border border-success border-2
          d-inline-block rounded-pill text-success
          fs-8 fw-bold">
            <i class="bi bi-thermometer-half me-1"></i>常溫商品
          </div>
          <div v-if="product.pick_in_person"
          class="px-3 py-1 me-3
          border border-danger border-2
          d-inline-block rounded-pill text-danger
          fs-8 fw-bold">
            <i class="bi bi-shop me-1"></i>商品限店取
          </div>
        </div>
        <h4 class="mb-3 fs-4">
          NT$ {{ product.price }} <span class="fs-6">/ {{ product.unit }}</span>
          <!-- (product.price).toLocaleString('en-US') -->
        </h4>
        <hr>
        <p class="pt-3 mb-3">商品規格 ： {{ product.product_content }}</p>
        <div class="mb-3 d-flex align-items-start">
          <p class="text-nowrap">
            <span v-if="product.category === '加購商品'">商品材質 ： </span>
            <span v-else>使用食材 ：</span>
          </p>
          <p class="ps-1">{{ product.content }}</p>
        </div>
        <p class="mb-3">
          商品尚有 ： {{ product.stock }} {{ product.unit }}
          <span v-if="qty >= product.stock"
            class="text-danger fs-8 m-0 p-0 fw-bold mx-2">＊訂購數量已達庫存上限
          </span>
        </p>
        <div class="row mb-3">
          <div class="col-xl-5">
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
              <div class="form-control border-0 text-center my-auto">{{ qty }}</div>
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
          <div class="col-xl-5 col-9">
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
          <div class="col-xl-2 col-3">
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
  <div class="container mt-6 px-4">
    <ProductNotes :category="nowCategory"></ProductNotes>
  </div>
  <div class="container my-6">
    <h4 class="text-center fs-4 my-4">你可能也會喜歡</h4>
    <Swiper
      class="px-4 mx-0"
      :modules="modules"
      navigation
      :slides-per-view="1"
      :space-between="16"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        '1200': {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      }"
    >
      <template v-for="item in products" :key="item.id + 'card'">
        <swiper-slide v-if="(item.category === nowCategory || item.recommended) && item.stock > 0">
          <div class="card-item d-flex flex-column align-items-center">
            <div class="card-upper">
              <img
                class="card-img"
                :src="item.imageUrl"
                :alt="item.title"
              />
              <p class="card-tag" v-if="item.price !== item.origin_price">
                ON SALE
              </p>
              <a class="card-favicon" @click.prevent="toggleFavorite(item)" href="">
                <i class="bi bi-heart-fill" v-if="userFavorite.includes(item.id)"></i>
                <i class="bi bi-heart" v-else></i>
              </a>
              <div class="card-detail pt-4" v-if="item.stock > 0">
                <router-link :to="`/product/${item.id}`" class="card-linkstyle">
                  詳細<span class="d-xl-inline-flex d-none">商品</span>資訊
                  <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
              <div class="card-soldout" v-if="item.stock <= 0 || item.stock === ''">
                <h5 class="card-soldouttag">SOLD OUT</h5>
              </div>
            </div>
            <div class="card-info">
              <h6 class="card-title text-nowrap">
                <i v-if="item.recommended" class="bi bi-hand-thumbs-up-fill me-1"></i>
                {{ item.title }}
              </h6>
              <p class="card-pricetag">NT$ {{ item.price }}
                <span class="card-orgprice ml-2"
                  v-if="item.price !== item.origin_price">$ {{ item.origin_price}}
                </span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </template>
    </Swiper>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.min.css';

import ProductNotes from '@/components/ProductNotes.vue';

export default {
  components: {
    Swiper, SwiperSlide, ProductNotes,
  },
  data() {
    return {
      products: [],
      nowCategory: '',
      product: [],
      relatedProducts: [],
      currentImage: '',
      userFavorite: JSON.parse(localStorage.getItem('userFavorite')) || [],
      qty: 1,
      modules: [Navigation],
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
      console.log('nowCategory', this.nowCategory);
    },
    getProduct() {
      console.log(this.$route);
      console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`).then((res) => {
        this.product = res.data.product;
        this.currentImage = res.data.product.imageUrl;
        this.nowCategory = res.data.product.category;
      });
    },
    changeImage(url) {
      this.currentImage = url;
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
    goToCategory(category) {
      this.$router.push({ path: '/products', query: { category } });
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
    getRelated() {
      console.log('getRelated');
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
    this.getProducts(this.$route.query.category);
    this.getRelated();
  },
};
</script>
