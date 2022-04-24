<template>
  <div class="offcanvas offcanvas-end" tabindex="-1"
  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">我的購物車</h5>
      <button type="button" class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        <h5 class="fw-bold text-center pb-4 border-bottom">訂單細項</h5>
        <ul>
          <li v-for="item in cart"
          class="row my-4 d-flex align-items-center justify-content-between" :key="item.id">
            <div class="col-2 px-md-2 p-0 cart-img">
              <img class="ms-1 w-100 border-0 rounded-2"
              :src="item.product.imageUrl"
              :alt="item.product.title">
            </div>
            <div class="col-6 row ps-1 py-0">
              <h6 class="px-1 text-start fs-7 mt-1">{{ item.product.title }}</h6>
              <div class="px-1 text-start d-flex justify-content-start cart-litext p-0">
                <span class="text-nowrap fs-7">
                  NT$ {{ (item.product.price).toLocaleString('en-US') }}
                </span>
                <span class="mx-lg-4 mx-2 fs-7">×</span>
                <span>
                  <div class="text-nowrap cart_qty d-inline-flex justify-content-center fs-7">
                    {{ item.qty + item.product.unit}}
                  </div>
                </span>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-end px-md-2 px-0">
              <button
                class="cart_btn mx-1"
                type="button"
                id="button-addon1"
                @click="qtyEdit('minus', item.id, item)"
                :disabled="item.qty <= 1"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
              <button
                class="cart_btn mx-1"
                type="button"
                id="button-addon2"
                @click="qtyEdit('add', item.id, item)"
                :disabled="item.qty >= item.product.stock"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
              <button
                class="cart_btn mx-1"
                @click="delItem(item.id)">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </li>
        </ul>
        <router-link type="button" class="mt-3 w-100 btn btn-outline-secondary"
          :to="`/cart`">
          <div data-bs-dismiss="offcanvas">
            前往結帳<i class="mx-2 bi bi-cart-plus"></i>
          </div>
        </router-link>
        <button type="button" class="mt-2 w-100 btn btn-outline-secondary"
          @click.prevent="delCarts">清空購物車<i class="mx-2 bi bi-cart-x"></i></button>
        <router-link type="button" class="mt-2 w-100 btn btn-outline-secondary"
          :to="`/products`">
          <div data-bs-dismiss="offcanvas">
            繼續購物<i class="mx-2 bi bi-cart-plus"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="bg-white sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            class="frontbar-logo top-0"
            src="@/assets/images/kuanLOGO.png"
            alt="甜點寬治療室LOGO"/>
        </router-link>
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
              <router-link class="nav-link" to="/">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">產品連結</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
          </ul>
        </div>
        <button class="btn rounded-circle" to="/login">
          <i class="bi bi-heart"></i>
        </button>
        <button class="btn rounded-circle"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute
          top-0 end-0 translate-middle badge rounded-pill bg-danger">
            {{cart?.length}}
          </span>
        </button>
        <router-link class="nav-link" to="/login">
          <i class="bi bi-gear"></i>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      products: [],
      cart: [],
      total: 0,
      final_total: 0,
      nowStatus: '購物清單',
      isLoadingItem: '',
      coupon_value: '',
      coupon_applied: '',
      delivery_way: '',
      delivery_charge: 0,
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('res', res);
          this.cart = res.data.data.carts;
          this.final_total = Math.round(res.data.data.final_total);
          this.total = res.data.data.total;
          this.coupon_applied = res.data.data.carts[0].coupon.code || '';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getCart() {
    //   this.$http
    //     .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
    //     .then((res) => {
    //       this.cart = res.data.data;
    //     });
    // },
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
