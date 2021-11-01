import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Market from "../views/Market.vue"
import MyItems from "../views/MyItems.vue"
import Cart from "../views/Cart.vue"
import ProductDetail from "../views/ProductDetail.vue"
import AddItem from "../views/AddItem.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
  {
    path: "/myitems",
    name: "MyItems",
    component: MyItems,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/productdetail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/additem",
    name: "AddItem",
    component: AddItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
