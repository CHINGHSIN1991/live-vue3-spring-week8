<template>
  <h4 class="fs-4 fw-bold pb-2 d-md-block d-none">商品分類</h4>
  <h4 class="fs-4 fw-bold pb-4 text-center d-md-none">{{ nowCategory }}
    <span v-if="nowCategory === ''">全部商品</span>
  </h4>
  <ul class="d-flex flex-column d-xl-block justify-content-md-center d-md-block d-none">
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '' }"></div>
        <div>全部商品</div>
      </a>
    </li>
    <li class="menu-listitem d-block">
      <a class="menu-link my-2" href="#" @click.prevent="goToFavorite">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === 'favorite' }"></div>
        <div>我的收藏</div>
      </a>
    </li>
    <hr class="w-75">
    <li class="menu-listitem d-block">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('乳酪蛋糕')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '乳酪蛋糕' }"></div>
        <div>乳酪蛋糕</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('鮮奶油蛋糕')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '鮮奶油蛋糕' }"></div>
        <div>鮮奶油蛋糕</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('磅蛋糕')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '磅蛋糕' }"></div>
        <div>磅蛋糕</div>
      </a>
    </li>
    <hr class="w-75">
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('餅乾')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '餅乾' }"></div>
        <div>手作餅乾</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('法式塔')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '法式塔' }"></div>
        <div>法式塔</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('司康')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '司康' }"></div>
        <div>英式司康</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('其他')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '其他' }"></div>
        <div>其他產品</div>
      </a>
    </li>
    <hr class="w-75">
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('優惠組合')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '優惠組合' }"></div>
        <div>優惠組合</div>
      </a>
    </li>
    <li class="menu-listitem">
      <a class="menu-link my-2" href="#" @click.prevent="getProducts('加購商品')">
        <div class="menu-bar rounded"
        :class="{ 'menu-bar-active': nowCategory === '加購商品' }"></div>
        <div>加購商品</div>
      </a>
    </li>
  </ul>
  <div class="dropdown mx-5 mb-4 d-md-none">
    <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton2"
    data-bs-toggle="dropdown" aria-expanded="false">
      選擇商品分類
    </button>
    <ul class="dropdown-menu dropdown-menu-dark w-100" aria-labelledby="dropdownMenuButton2">
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '' }"
        @click.prevent="getProducts('')">
          全部商品
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === 'favorite' }"
        @click.prevent="goToFavorite">
          我的收藏
        </a>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '乳酪蛋糕' }"
        @click.prevent="getProducts('乳酪蛋糕')">
          乳酪蛋糕
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '鮮奶油蛋糕' }"
        @click.prevent="getProducts('鮮奶油蛋糕')">
          鮮奶油蛋糕
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '磅蛋糕' }"
        @click.prevent="getProducts('磅蛋糕')">
          磅蛋糕
        </a>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '餅乾' }"
        @click.prevent="getProducts('餅乾')">
          手作餅乾
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '法式塔' }"
        @click.prevent="getProducts('法式塔')">
          法式塔
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '司康' }"
        @click.prevent="getProducts('司康')">
          英式司康
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '其他' }"
        @click.prevent="getProducts('其他')">
          其他產品
        </a>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '優惠商品' }"
        @click.prevent="getProducts('優惠商品')">
          優惠商品
        </a>
      </li>
      <li>
        <a class="dropdown-item text-center" href="#"
        :class="{ 'active': nowCategory === '加購商品' }"
        @click.prevent="getProducts('加購商品')">
          加購商品
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['nowCategory'],
  data() {

  },
  methods: {
    getProducts(category) {
      this.$emit('get-products', category);
    },
    goToFavorite() {
      this.$emit('go-to-favorite');
    },
  },
};
</script>
