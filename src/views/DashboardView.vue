<template>
  <BackNavbar></BackNavbar>
  <ToastMessages></ToastMessages>
  <!-- v-if="checkSuccess" -->
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
import emitter from '@/methods/eventBus';
import ToastMessages from '@/components/ToastMessages.vue';
import BackNavbar from '@/components/BackNavbar.vue';

export default {
  components: {
    BackNavbar,
    ToastMessages,
  },
  data() {
    return {
      checkSuccess: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;

        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(api, { api_token: this.token })
          .then(() => {
            // console.log(this.checkSuccess);
            this.checkSuccess = true;
            // console.log(this.checkSuccess);
          })
          .catch((err) => {
            alert(err.data.message);
            this.$router.push('/login');
          });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
