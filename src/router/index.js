import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import ShopPage from "../pages/shop/Shop.vue";
import ProductDetail from "../pages/product/productDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/shop",
    name: "ShopHome",
    component: ShopPage,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
