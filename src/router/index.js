import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import ShopPage from "../pages/shop/Shop.vue";
import ProductDetail from "../pages/product/productDetail.vue";
import DashboardLogin from "../pages/dashboard/login.vue";
import DashboardProduct from "../pages/dashboard/product.vue";
import DashboardProductAdd from "../pages/dashboard/productNew.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/shop",
    name: "ShopHome",
    component: ShopPage,
  },
  {
    path: "/dashboard",
    name: "DashboardLogin",
    component: DashboardLogin,
  },
  {
    path: "/dashboard/product",
    name: "DashboardProduct",
    component: DashboardProduct,
  },
  {
    path: "/dashboard/product/add",
    name: "DashboardProductAdd",
    component: DashboardProductAdd,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
