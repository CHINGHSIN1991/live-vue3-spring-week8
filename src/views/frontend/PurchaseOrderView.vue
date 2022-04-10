<template>
  <h2>填寫資料</h2>
  <div class="container">
    <div class="row d-flex flex-row-reverse">
      <div class="col-sm-4">
        <div class="border border-dark rounded-3 p-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">訂單摘要</h5>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">商品總計</p><p>{{ total }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">運費</p><p>60</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">使用優惠券</p><input type="text">
          </div>
          <div class="d-flex justify-content-between mt-3 border-top pt-3">
            <p class="fw-bold">結帳總金額</p><p>{{ final_total+60 }}</p>
          </div>
          <button type="button" class="w-100 text-center">
            前往結帳<i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="col-sm-8">
        <div
          v-if="cart.length <= 0"
          class="p-4 border border-white border-bottom-0 bg-table text-dark"
        >
          <p class="text-center text-xl mb-6">購物車目前沒有商品</p>
          <div
            class="
              d-block
              w-25
              mx-auto
              btn btn-secondary
              text-white
              secondary-hover
              mb-5
            "
          >
            <router-link class="white-hover" :to="`/shop`">
              前往商店</router-link
            >
          </div>
        </div>
        <div class="cartlist border border-dark rounded-3 p-4">
          <table class="w-100">
            <thead>
              <th class="text-center pb-4 border-bottom" colspan="6">
                <h5 class="fw-bold">訂單細項</h5>
              </th>
            </thead>
            <tbody>
              <tr class="row">
                <td class="col-2">
                  商品圖案
                </td>
                <td class="col-3">名稱</td>
                <td class="col-2">單價</td>
                <td class="col-2">數量</td>
                <td class="col-2">總價</td>
                <td class="col-1">刪除</td>
              </tr>
              <tr v-for="item in cart" class="row my-2 d-flex align-items-center" :key="item.id">
                <td class="col-2">
                  <img class="w-75 border-0 rounded-2"
                  :src="item.product.imageUrl" :alt="item.product.title">
                </td>
                <td class="col-3 fw-bold">{{ item.product.title }}</td>
                <td class="col-2">{{ item.product.price }}</td>
                <td class="col-2">{{ item.qty }}</td>
                <td class="col-2">{{ item.total }}</td>
                <td class="col-1">
                  <button type="button" @click.prevent="delItem(item.product.id)">X</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" @click.prevent="delCarts">清空購物車 X</button>
        </div>
        132113
      </div>
    </div>
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
      isLoadingItem: '',
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products;
        });
    },
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log(res);
          this.cart = res.data.data.carts;
          this.final_total = Math.round(res.data.data.final_total);
          this.total = res.data.data.total;
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          this.isLoadingItem = '';
          emitter.emit('get-cart');
        });
    },
    delItem(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then((res) => {
        console.log('delItem', res);
        this.getCart();
      }).catch((err) => {
        console.log(err);
      });
    },
    delCarts() {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`).then((res) => {
        console.log('delItems', res);
        this.getCart();
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>
