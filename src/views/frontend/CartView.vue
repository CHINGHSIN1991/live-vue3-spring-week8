<template>
  <h2>購物車</h2>
  <div class="container">
    <OrderStatus :nowStatus="nowStatus"></OrderStatus>
    <div
      v-if="cart.length <= 0"
      class="p-4 border border-white border-bottom-0 bg-table text-dark"
    >
      <p class="text-center text-xl mb-6">購物車目前沒有商品</p>
      <div class="d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5">
        <router-link class="white-hover" :to="`/products`">
          前往商店
        </router-link>
      </div>
    </div>
    <div class="row d-flex flex-row-reverse" v-if="cart.length > 0">
      <div class="col-xl-4">
        <div class="border border-dark rounded-3 p-4 mb-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">訂單摘要</h5>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">商品總計</p><p>NT$ {{ (total).toLocaleString('en-US') }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center"
          v-if="(total-final_total)>0">
            <p class="fw-bold">商品折抵</p><p class="text-danger">
              - NT$ {{ (Math.round(total-final_total)).toLocaleString('en-US') }}
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">運費</p><p>NT$ {{ (delivery_charge).toLocaleString('en-US') }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold">使用優惠券</p>
            <p></p>
            <p v-if="coupon_applied !== '' && coupon_applied !== 'Org'">
              優惠券<span class="fw-bold">{{ coupon_applied }}</span>已套用
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="input-group mb-3">
              <input type="text" class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              v-model="coupon_value"
              >
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="applyCoupon">
                  <span v-if="coupon_applied !== ''">套用其他優惠券</span>
                  <span v-else>套用優惠券</span>
                </button>
              </div>
            </div>
          </div>
          <div class="form-floating">
            <select  id="delivery_way"
            class="form-select mb-2" aria-label="select example" v-model="delivery_way">
              <option selected value="" disabled>請選擇配送方式</option>
              <option value="0來店自取">來店自取</option>
              <option value="60常溫配送">常溫配送</option>
              <option value="80常溫超商取貨">常溫超商取貨</option>
              <option value="220低溫配送">低溫配送</option>
              <option value="240冷凍超商取貨">冷凍超商取貨</option>
            </select>
            <label for="form-floating">配送方式</label>
          </div>
          <div class="d-flex justify-content-between mt-3 border-top pt-3">
            <p class="fw-bold">結帳總金額</p><p class="fw-bold fs-5">
              NT$ {{ (Math.round(final_total+delivery_charge)).toLocaleString('en-US') }}
            </p>
          </div>
          <router-link :to="`/purchase`">
            <button type="button" class="btn btn-warning w-100 text-center">
              前往結帳<i class="bi bi-arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="cartlist border border-dark rounded-3 p-4 mb-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">訂單細項</h5>
          <ul>
            <li v-for="item in cart"
            class="row my-3 d-flex align-items-center justify-content-between" :key="item.id">
              <div class="col-2 px-md-2 p-0 cart-img">
                <img class="ms-1 w-75 border-0 rounded-2 d-sm-block d-none"
                :src="item.product.imageUrl"
                :alt="item.product.title">
                <img class="ms-1 w-100 border-0 rounded-2 d-sm-none d-block"
                :src="item.product.imageUrl"
                :alt="item.product.title">
              </div>
              <div class="col-md-6 col-7 row">
                <h6 class="px-1 text-start col-lg-5 cart-litext">{{ item.product.title }}</h6>
                <div class="px-1 text-start col-lg-7 d-flex justify-content-start cart-litext">
                  <span class="text-nowrap">
                    NT$ {{ (item.product.price).toLocaleString('en-US') }}
                  </span>
                  <span class="mx-lg-4 mx-2">×</span>
                  <span>
                    <div class="text-nowrap cart_qty d-inline-flex justify-content-center">
                      {{ item.qty + item.product.unit}}
                    </div>
                  </span>
                </div>
                <p v-if="item.qty >= item.product.stock"
                  class="text-danger fs-8 m-0 p-0 fw-bold">＊商品已達庫存上限</p>
              </div>
              <div class="col-md-2 d-md-flex d-none justify-content-end pe-md-3">
                NT$  {{ (item.total).toLocaleString('en-US') }}
              </div>
              <div class="col-md-2 col-3 d-flex justify-content-end px-md-2 px-0">
                <button
                  class="cart_btn mx-md-2 mx-1 me-md-1"
                  type="button"
                  id="button-addon1"
                  @click="qtyEdit('minus', item.id, item)"
                  :disabled="item.qty <= 1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <button
                  class="cart_btn mx-md-2 mx-1 me-md-1"
                  type="button"
                  id="button-addon2"
                  @click="qtyEdit('add', item.id, item)"
                  :disabled="item.qty >= item.product.stock"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
                <button
                  class="cart_btn ms-md-2 mx-1 me-md-1"
                  @click="delItem(item.id)">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </li>
          </ul>
          <button type="button" class="mt-2 w-100 btn btn-outline-secondary"
            @click.prevent="delCarts">清空購物車<i class="mx-2 bi bi-cart-x"></i></button>
          <router-link type="button" class="mt-3 w-100 btn btn-outline-secondary"
            :to="`/products`">繼續購物<i class="mx-2 bi bi-cart-plus"></i></router-link>
        </div>
        <div class="cartlist border border-dark rounded-3 p-4 mb-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">購物須知</h5>
          <ul class="mt-4">
            <li class="mt-4">
              <h6 class="text-start">1.運費計算</h6>
              <p>常溫配送可選擇郵局60元及超商取貨80元。<br>
              低溫配送運費220元。<br>
              冷凍超商取貨運費240元。<br>
              常溫商品消費滿500元免運費。<br>
              冷凍及冷藏商品消費滿1500元免運費。
              </p>
            </li>
            <li class="mt-4">
              <h6 class="text-start">2.店取注意事項</h6>
              <p>門市取貨日期：週五、六、日、一、二（特休日另公告）。請提早一週前完成預訂。<br>
                一週內的訂單請私訊預訂，不可直接下單避免無法取貨。<br>
                但，特定取貨日商品（門市自取預約甜點、聯名開單商品）以商品頁面標示取貨日為主。<br>
                日期選擇錯誤，恐影響取件或延遲到貨，請務必務必多多留意，非常感謝各位的細心。
              </p>
            </li>
            <li class="mt-4">
              <h6 class="text-start">3.宅配注意事項</h6>
              <p>宅配可出貨日：為每週一、週二。<br>
                寄出後，將提供【物流單號】方便您查詢，實際到貨日期依當地物流為主。<br>
                凡貨運繁盛期，無法保證隔日抵達（以黑貓官網公告日期為主）務必安排提前寄貨，我們會依照您選擇的日期準時寄出，所以我們不接受訂單延遲產生的退款申請！
              </p>
            </li>
            <li class="mt-4">
              <h6 class="text-start">4.商品換貨</h6>
              <p>宅配蛋糕一定有風險，可能會蛋糕位移、變形損傷、裝飾掉落是正常現象，風險自行承擔，無法申請賠償。<br>
              若是嚴重受損（蛋糕爛掉糊掉）明顯人為造成，請於配達日2天內與我們聯繫，盡快為您處理，逾期無法受理。<br>
              請保持蛋糕收到的樣貌，不要丟掉或吃掉蛋糕，第一時間拍照，拍下蛋糕毀損盒內的樣子、外盒包裝並準備訂購資訊、聯繫電話、宅配單號，與我們聯繫。
              我們會盡快為您處理，在貨故申請尚未結束前，請保留蛋糕的原狀。</p>
            </li>
            <li class="mt-4">
              <h6 class="text-start">5.退款條件</h6>
              <p>變更訂單請2～3天前與我們聯繫，甜點新鮮製作，賞味期內未取貨，將進行報廢，
                代表您放棄此筆訂單，無法《 全額退款 》或 《 變更訂單》。<br>
                若您的訂單下單選擇錯誤，因系統金流設定，僅能退購物金，無法刷退信用卡或退款現金，請多多留意。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';
import OrderStatus from '@/components/OrderStatus.vue';

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
  components: {
    OrderStatus,
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
          this.coupon_applied = res.data.data.carts[0].coupon.code || '';
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '載入錯誤',
            content: '發生錯誤，請重新整理頁面',
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
      console.log(id);
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
    applyCoupon() {
      const data = {
        code: this.coupon_value,
      };
      console.log(data);
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`, { data })
        .then((res) => {
          console.log(res);
          this.final_total = res.data.data.final_total;
          this.coupon_applied = this.coupon_value;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    qtyEdit(operator, id, item) {
      let tempqty = 0;
      if (operator === 'add') {
        tempqty = item.qty + 1;
      } else {
        tempqty = item.qty - 1;
      }
      const data = {
        product_id: item.product_id,
        qty: tempqty,
      };
      console.log(data);
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, { data }).then((res) => {
        console.log('editItem', res);
        this.getCart();
      }).catch((err) => {
        console.log(err);
      });
    },
    chargeCount() {
      this.delivery_charge = parseInt(this.delivery_way, 10);
      if (this.final_total >= 1200) {
        this.delivery_charge = 0;
      } else if (this.final_total >= 500 && this.delivery_charge <= 100) {
        this.delivery_charge = 0;
      }
    },
  },
  // computed: {
  //   delivery_charge() {
  //     this.delivery_charge = parseInt(this.delivery_way, 10);
  //     if (this.final_total >= 1200) {
  //       this.delivery_charge = 0;
  //     } else if (this.final_total >= 500 && this.delivery_charge <= 100) {
  //       this.delivery_charge = 0;
  //     }
  //   }
  // },
  watch: {
    delivery_way() {
      this.chargeCount();
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>
