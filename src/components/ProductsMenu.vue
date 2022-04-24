<template>
  <h4>商品分類</h4>
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
  <div class="accordion accordion-flush d-md-none mx-2" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button"
        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
        aria-expanded="false" aria-controls="flush-collapseOne">
          我的選單
        </button>
      </h2>
      <div id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul class="d-flex flex-column d-xl-block justify-content-md-center">
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
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo">
          各類蛋糕
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse px-2"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree">
          手作甜點
        </button>
      </h2>
      <div id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour">
          優惠商品
        </button>
      </h2>
      <div id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingFour"
      data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul>
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
        </div>
      </div>
    </div>
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
