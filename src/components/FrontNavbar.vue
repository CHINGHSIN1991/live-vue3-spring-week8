<template>
  <div class="bg-white sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">前台</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入後台</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >產品連結</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary">
          結帳
          <span class="badge rounded-pill bg-danger">{{
            cart?.carts?.length
          }}</span>
        </button>
      </div>
    </nav>
  </div>
<!--
  <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <a
          class="navbar-brand position-absolute"
          href="./index.html"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
        >
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link ps-0" href="./product.html">Lorem ipsum</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./detail.html">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <a href="#"><i class="fas fa-heart me-5"></i></a>
          <a href="./cart-2.html"><i class="fas fa-shopping-cart"></i></a>
        </div>
      </nav>
    </div>
  </div> -->
</template>

<script>
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
