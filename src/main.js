import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store/store";
import Axios from "axios";

Axios.defaults.baseURL = "https://urun-islemleri-be023.firebaseio.com";

/* global filter */
Vue.filter("currency", value => {
  return (
    parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) +
    " USD"
  );
});

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
