import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
App.store = store;
App.router = router;

Vue.customElement("widget-loader", App);
