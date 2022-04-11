<template>
  <footer class="bg-warning">
    <div class="container py-4">
      <div class="row">
        <div class="col-xl-9 d-flex flex-column
        align-items-xl-start align-items-center">
          <img
              class="footer-logo top-0 d-block d-md-none w-50"
              src="@/assets/images/kuanLOGObig.png"
              alt="甜點寬治療室LOGO"/>
          <img
              class="footer-logo top-0 d-none d-md-block w-25"
              src="@/assets/images/kuanLOGObig.png"
              alt="甜點寬治療室LOGO"/>
          <div class="footer-information-box d-flex flex-column pt-3 fw-bold fs-8">
            <div class="py-1">
              <i class="bi bi-phone-vibrate pe-2"></i>電話 ｜ 0912345678
            </div>
            <div class="py-1">
              <i class="bi bi-mailbox pe-2"></i>信箱 ｜ chinghsinchen1991@gmail.com
            </div>
            <div class="py-1">
              <i class="bi bi-shop pe-2"></i>地址 ｜ 台北市中正區北平西路3號
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="row">
            <div class="d-xl-none my-2 col-12"></div>
            <div class="d-xl-none col-1"></div>
            <div class="col-7 col-xl-4">
              <h6 class="text-start fw-bold">About</h6>
              <hr class="my-1 d-xl-none border border-2 border-dark">
              <div class="footer-bottom-line d-none d-xl-block"></div>
              <ul class="row mt-3 fs-8">
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">關於我們</router-link>
                </li>
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">品牌故事</router-link>
                </li>
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">優惠活動</router-link>
                </li>
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">最新訊息</router-link>
                </li>
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">服務條款</router-link>
                </li>
                <li class="col-6 col-xl-12 py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">常見問題</router-link>
                </li>
              </ul>
            </div>
            <div class="col-xl-4 col-3 fs-8">
              <h6 class="text-start fw-bold">Service</h6>
              <hr class="my-1 d-xl-none border border-2 border-dark">
              <div class="footer-bottom-line d-none d-xl-block"></div>
              <ul class="mt-3">
                <li class="py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">產品連結</router-link>
                </li>
                <li class="py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">訂購須知</router-link>
                </li>
                <li class="py-1">
                  <router-link to="/products"
                  class="footer-text-link px-2 py-1 rounded-3">運送服務</router-link>
                </li>
              </ul>
            </div>
            <div class="d-xl-none col-1"></div> <!-- 手機平板推擠用 -->
            <div class="d-xl-none my-2 col-12"></div> <!-- 手機平板向上padding -->
            <div class="d-xl-none col-1"></div> <!-- 手機平板推擠用 -->
            <div class="col-10 col-xl-4">
              <h6 class="text-start fw-bold">Media</h6>
              <hr class="my-1 d-xl-none border border-2 border-dark">
              <div class="footer-bottom-line d-none d-xl-block"></div>
              <ul class="mt-3 d-flex justify-content-xl-start justify-content-center">
                <li class="ps-2 py-1 pe-3">
                  <div class="rounded-circle
                  footer-icon d-flex justify-content-center align-items-center">
                    <a class="footer-icon-link" href="https://www.behance.net/chinghsin1991" target="_blank"><i class="bi bi-line"></i></a>
                  </div>
                </li>
                <li class="py-1 pe-3">
                  <div class="rounded-circle
                  footer-icon d-flex justify-content-center align-items-center">
                    <a class="footer-icon-link" href="https://www.behance.net/chinghsin1991" target="_blank"><i class="bi bi-behance"></i></a>
                  </div>
                </li>
                <li class="py-1 pe-3">
                  <div class="rounded-circle
                  footer-icon d-flex justify-content-center align-items-center">
                    <a class="footer-icon-link" href="https://www.behance.net/chinghsin1991" target="_blank"><i class="bi bi-instagram"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="d-xl-none col-1"></div> <!-- 手機平板推擠用 -->
          </div>
        </div>
        <div class="col-12 fs-8 mt-5 text-muted text-center text-lg-start">
          本網站僅供個人作品使用，不提供任何商業用途 / 圖片素材取自Unsplash及甜點寬製療室授權提供
        </div>
      </div>
    </div>
  </footer>
</template>
