import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLoading from "vue-loading-overlay";
import VueSocialSharing from "vue-social-sharing";
import VueSweetalert2 from "vue-sweetalert2";
import "vue-loading-overlay/dist/vue-loading.css";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
  .use(store)
  .use(VueSweetalert2)
  .use(VueSocialSharing)
  .use(VueLoading)
  .use(router)
  .mount("#app");
