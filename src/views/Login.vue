<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="logIn">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              v-model="user.username"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    logIn() {
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(url, this.user)
        .then((res) => {
          // 取出res.data裡面的token跟expired
          const { token, expired } = res.data;
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
          // 成功登入後導到products.html產品列表
          this.$router.push('/admin/products');
        })
        .catch((error) => {
          alert(error.data.message);
          // handle error
        })
        .then(() => {
          // always executed
        });
    },
    checkIfLoginAlready() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$router.push('/admin/products');
      }
    },
  },
  mounted() {
    this.checkIfLoginAlready();
  },
};
</script>
