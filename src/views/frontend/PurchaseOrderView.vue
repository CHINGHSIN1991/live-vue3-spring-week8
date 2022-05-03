<template>
  <h2>填寫資料</h2>
  <div class="container">
    <OrderStatus :nowStatus="nowStatus"></OrderStatus>
    <div class="row d-flex flex-row-reverse">
      <div class="col-xl-7 mb-4">
        <Form v-slot="{ errors }" class="border border-dark rounded-3 p-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">填寫訂購資料</h5>
          <div class="row">
            <div class="mb-2 col-sm-6">
              <label for="userName" class="col-form-label">訂購人姓名</label>
              <Field
                type="text"
                placeholder="姓名"
                class="form-control"
                id="userName"
                v-model="form.user.name"
                name="姓名"
                rules="required"
                :class="{ 'is-invalid': errors['姓名'] }"
              />
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="mb-2 col-sm-6">
              <label for="userEmail" class="col-form-label">信箱</label>
              <Field
                type="text"
                placeholder="訂購資訊信箱"
                class="form-control"
                id="userEmail"
                v-model="form.user.email"
                name="電子信箱"
                rules="email|required"
                :class="{ 'is-invalid': errors['電子信箱'] }"
              />
              <ErrorMessage name="電子信箱" class="invalid-feedback" />
            </div>
            <div class="mb-2 col-sm-4">
              <label for="userPhone" class="col-form-label">聯絡電話</label>
              <Field
                type="tel"
                placeholder="連絡電話"
                class="form-control"
                id="userPhone"
                v-model="form.user.tel"
                name="連絡電話"
                :rules="isPhone"
                :class="{ 'is-invalid': errors['連絡電話'] }"
              />
              <ErrorMessage name="連絡電話" class="invalid-feedback" />
            </div>
            <div class="mb-2 col-sm-8">
              <label for="userAddress" class="col-form-label">寄送地址</label>
              <Field
                type="text"
                placeholder="請輸入寄送地址"
                class="form-control"
                id="userAddress"
                v-model="form.user.address"
                name="地址"
                rules="required"
                :class="{ 'is-invalid': errors['地址'] }"
              />
              <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
            <div class="mb-2">
              <label for="userMessage" class="form-label">備註</label>
              <textarea
                class="form-control"
                id="userMessage"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="m-3 form-check">
              <Field
                class="form-check-input"
                type="checkbox"
                value="checked"
                id="userTerms"
                name="check"
                :class="{ 'is-invalid': errors['check'] }"
                :rules="termsCheck"
              />
              <label class="form-check-label text-dark" for="userTerms">
                我已閱讀並確認網站的訂購條款
              </label>
              <ErrorMessage name="check" class="invalid-feedback" />
            </div>
          </div>
          <button
            type="button"
            class="btn btn-warning w-100 text-center"
            @click="onSubmit"
          >
            送出訂單<i class="bi bi-arrow-right"></i>
          </button>
        </Form>
      </div>
      <div class="col-xl-5 mb-4">
        <div class="cartlist border border-dark rounded-3 p-4">
          <h5 class="fw-bold text-center pb-4 border-bottom">訂單細項</h5>
          <div class="row fs-8 py-2 mx-0 border-bottom">
            <div class="col-2 text-start ps-2">商品圖片</div>
            <div class="col-10 row">
              <div class="col-8 text-start ps-5">產品及訂購數量</div>
              <div class="col-4 text-end pe-1">小計</div>
            </div>
          </div>
          <ul>
            <li
              v-for="item in cart"
              class="row my-4 d-flex align-items-center justify-content-between"
              :key="item.id"
            >
              <div class="col-2 px-md-2 p-0 cart-img">
                <img
                  class="w-100 border-0 rounded-2"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                />
              </div>
              <div class="col-10 row d-flex align-items-end justify-content-between">
                <div class="col-8 row px-sm-2 px-0">
                  <h6 class="px-1 text-start cart-litext">
                    {{ item.product.title }}
                  </h6>
                  <div
                    class="
                      px-1
                      text-start
                      d-flex
                      justify-content-start
                      cart-litext
                    "
                  >
                    <span class="text-nowrap">
                      NT$ {{ item.product.price.toLocaleString("en-US") }}
                    </span>
                    <span class="mx-lg-4 mx-2">×</span>
                    <span>
                      <div
                        class="
                          text-nowrap
                          cart_qty
                          d-inline-flex
                          justify-content-center
                        "
                      >
                        {{ item.qty + item.product.unit }}
                      </div>
                    </span>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <span class="text-end"
                    >NT$ {{ item.total.toLocaleString("en-US") }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div class="info border-top">
            <div class="d-flex justify-content-between align-items-center py-3">
              <p class="fw-bold">商品總計</p>
              <p>NT$ {{ total.toLocaleString("en-US") }}</p>
            </div>
            <div
              class="d-flex justify-content-between align-items-center pb-3"
              v-if="total - final_total > 0"
            >
              <p class="fw-bold">商品折抵</p>
              <p class="text-danger">
                - NT$
                {{ Math.round(total - final_total).toLocaleString("en-US") }}
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center pb-3">
              <p class="fw-bold">運費</p>
              <p>NT$ {{ delivery_charge.toLocaleString("en-US") }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between border-top py-3">
            <p class="fw-bold">結帳總金額</p>
            <p class="fw-bold fs-5">
              NT$
              {{
                Math.round(final_total + delivery_charge).toLocaleString(
                  "en-US"
                )
              }}
            </p>
          </div>
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
      isLoadingItem: '',
      nowStatus: '填寫資料',
      delivery_charge: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          delivery_way: '',
        },
        message: '',
      },
    };
  },
  inject: ['emitter'],
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
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          console.log('delItem', res);
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delCarts() {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          console.log('delItems', res);
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    termsCheck(value) {
      if (value && value.length) {
        return true;
      }
      return '請勾選同意網站的條款與條件';
    },
    onSubmit() {
      const data = {
        data: this.form,
      };
      // this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.success);
            this.emitter.emit('push-message', {
              style: 'success',
              title: '訂單成立',
              content: '訂單已成立，付款後將立即為您出貨',
            });
            // this.emitter.emit('update-cart');
            // this.$refs.form.resetForm();
            // this.$router.push({ name: 'check', params: { order: res.data.orderId } });
            // this.isLoading = false;
          } else {
            // this.isLoading = false;
            // this.emitter.emit('push-message', {
            //   type: 'error',
            //   message: res.data.message,
            // });
          }
        })
        .catch((err) => {
          console.log(err);
          // this.emitter.emit('push-message', {
          //   type: 'error',
          //   message: '發生錯誤，請重新整理頁面',
          // });
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>
