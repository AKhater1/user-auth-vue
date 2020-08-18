import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'
import Home from "../views/Home.vue";
import Sign from "../views/Sign.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: Sign
  },
  {
    path: "/register-form",
    name: "Register",
    component: Register
  },
  {
  path: '/home',
  component: Home,
  beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } 
      else {
        next('/signin')
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
