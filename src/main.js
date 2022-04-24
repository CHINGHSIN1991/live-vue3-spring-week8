import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import $httpMessageState from '@/methods/pushMessageState';
import App from './App.vue';
import router from './router';
import { date, currency } from './methods/filters';

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(router);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.mount('#app');
