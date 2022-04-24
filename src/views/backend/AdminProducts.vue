<template>
  <h2>產品列表</h2>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal('isNew')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">庫存</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td class="text-end">{{ item.stock }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelProductModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 內層:pages, 外層:pagination -->
    <!-- 內層: get-product, 外層:getData -->
    <Pagination :pages="pagination" @emit-pages="getData"></Pagination>
    <!-- ProductModal -->
    <ProductModal @update-product="updateProduct" :product="tempProduct"
      :isNew="isNew" ref="productModal"/>
    <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import ProductModal from '@/components/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
    DelModal,
    ProductModal,
  },
  data() {
    return {
      tempProduct: {
        imagesUrl: [],
      },
      currentPage: 1,
      products: [],
      isNew: false,
      pagination: {},
      status: {
        fileUploading: false,
      },
    };
  },
  inject: ['emitter'],
  methods: {
    // 驗證是否登入
    logInCheck() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      const url = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(url)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          console.log('login', err);
          alert(err.data.message);
          // 驗證失敗導回index.html
          window.location = 'index.html';
        });
    },
    // 產品列表
    getData(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          // 取出response.data.products到products[]
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log('getData', err);
          alert(err.data.message);
        });
    },
    openModal(status, item) {
      if (status === 'edit') {
        this.tempProduct = { ...item };
        this.isNew = false;
      } else {
        this.tempProduct = {};
        this.isNew = true;
      }
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      this.isLoading = true;
      let httpMethod = 'post';
      let status = '新增產品';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
        status = '更新產品';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, status);
        console.log(response);
        productComponent.hideModal();
        this.getData(this.pagination.current_page);
      }).catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, status);
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '刪除產品');
        console.log(response);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getData(this.pagination.current_page);
      }).catch((error) => {
        this.isLoading = false;
        this.$httpMessageState(error.response, '刪除產品');
      });
    },
  },
  mounted() {
    this.logInCheck();
    this.getData();
  },
};
</script>
