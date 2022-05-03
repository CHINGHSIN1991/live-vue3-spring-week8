<template>
  <div class="card-item d-flex flex-column align-items-center col-lg-3 col-md-4 col-6">
    <div class="card-upper">
      <img
        class="card-img"
        :src="product.imageUrl"
        :alt="product.title"
      />
      <p class="card-tag" v-if="product.price !== product.origin_price">
        ON SALE
      </p>
      <a class="card-favicon" @click.prevent="toggleFavorite(product)" href="">
        <i class="bi bi-heart-fill" v-if="userFavorite.includes(product.id)"></i>
        <i class="bi bi-heart" v-else></i>
      </a>
      <div class="card-detail pt-4" v-if="product.stock > 0">
        <router-link :to="`/product/${product.id}`" class="card-linkstyle">
          詳細<span class="d-xl-inline-flex d-none">商品</span>資訊
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
      <div class="card-soldout" v-if="product.stock <= 0 || product.stock === ''">
        <h5 class="card-soldouttag">SOLD OUT</h5>
      </div>
    </div>
    <div class="card-info">
      <h6 class="card-title">
        <i v-if="product.recommended" class="bi bi-hand-thumbs-up-fill me-1"></i>{{ product.title }}
      </h6>
      <p class="card-pricetag">NT$ {{ product.price }}
        <span class="card-orgprice ml-2"
          v-if="product.price !== product.origin_price">$ {{ product.origin_price}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    userFavorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // inject: ['emitter'],
  methods: {
    toggleFavorite(product) {
      this.$emit('toggle-favorite', product);
    },
  },
};
</script>
