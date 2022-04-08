<template>
  <div class="card-item col-lg-3 col-md-4 col-6">
    <div class="card-upper">
      <img
        calss="img-fluid"
        :src="product.imageUrl"
        :alt="product.title"
      />
      <p class="card-tag" v-if="product.price !== product.origin_price">
        ON SALE
      </p>
      <a class="card-favicon" href="">
        <i class="bi bi-heart-fill" v-if="myFavorite.includes(product.id)"></i>
        <i class="bi bi-heart" v-else></i>
      </a>
      <div class="card-detail pt-4">
        <router-link :to="`/product/${product.id}`" class="card-linkstyle">
          詳細商品資訊
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
      <div class="card-soldout" v-if="is_enabled == true">
        <h5 class="card-soldouttag">SOLD OUT</h5>
      </div>
    </div>
    <div class="card-info">
      <h6 class="card-title"> {{ product.title}} </h6>
      <h7 class="card-pricetag">NT$ {{ product.price }}
        <span class="card-orgprice ml-2"
          v-if="product.price !== product.origin_price">$ {{ product.origin_price}}
        </span>
      </h7>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    myFavorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
