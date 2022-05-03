<template>
  <div class="p-4 d-flex justify-content-between mx-md-5 px-md-5 my-3 text-secondary">
    <div class="d-flex flex-column align-items-center">
      <div class="cart-icon text-center fs-5 pt-1
      border border-secondary
      rounded-circle"
      :class="{ 'bg-secondary text-light': nowStatus === '購物清單' }">
        1
      </div>
      <p class="text-nowrap mt-2">購物清單</p>
    </div>
    <hr class="w-100">
    <div class="d-flex flex-column align-items-center">
      <div class="cart-icon text-center fs-5 pt-1
      border border-secondary
      rounded-circle"
      :class="{ 'bg-secondary text-light': nowStatus === '填寫資料' }">
        2
      </div>
      <p class="text-nowrap mt-2">填寫資料</p>
    </div>
    <hr class="w-100">
    <div class="d-flex flex-column align-items-center">
      <div class="cart-icon text-center fs-5 pt-1
      border border-secondary
      rounded-circle"
      :class="{ 'bg-secondary text-light': nowStatus === '確認付款' }">
        3
      </div>
      <p class="text-nowrap mt-2">確認付款</p>
    </div>
    <hr class="w-100">
    <div class="d-flex flex-column align-items-center">
      <div class="cart-icon text-center fs-5 pt-1
      border border-secondary
      rounded-circle"
      :class="{ 'bg-secondary text-light': nowStatus === '完成購物' }">
        4
      </div>
      <p class="text-nowrap mt-2">完成購物</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nowStatus'],
};
</script>
