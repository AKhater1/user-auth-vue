import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 

Vue.use(VueAxios, axios)

library.add(faFacebookF)
library.add(faTwitter)
library.add(faYoutube)
library.add(faInstagram)
library.add(faLinkedin)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
