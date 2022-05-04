import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import ShopPage from "../pages/shop/Shop.vue";
import ProductDetail from "../pages/product/productDetail.vue";
import DashboardLogin from "../pages/dashboard/login.vue";
import DashboardProduct from "../pages/dashboard/product.vue";
import DashboardProductAdd from "../pages/dashboard/productNew.vue";
import DashboardProductDetail from "../pages/dashboard/productDetail.vue";
import DashboardCategory from "../pages/dashboard/category.vue";
import DashboardCategoryDetail from "../pages/dashboard/categoryDetail.vue";
import DashboardCategoryNew from "../pages/dashboard/categoryNew.vue";
import DasboardGallery from "../pages/dashboard/gallery.vue";
import CategoryShop from "../pages/shop/category.vue";

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
    path: "/shop/category/:id",
    name: "ShopCategory",
    component: CategoryShop,
  },
  {
    path: "/dashboard/category",
    name: "DashboardCategory",
    component: DashboardCategory,
  },
  {
    path: "/dashboard/gallery",
    name: "DasboardGallery",
    component: DasboardGallery,
  },
  {
    path: "/dashboard/category/:id/detail",
    name: "DashboardCategoryDetail",
    component: DashboardCategoryDetail,
  },
  {
    path: "/dashboard/category/new",
    name: "DashboardCategoryNew",
    component: DashboardCategoryNew,
  },
  {
    path: "/dashboard/product/add",
    name: "DashboardProductAdd",
    component: DashboardProductAdd,
  },
  {
    path: "/dashboard/product/:id/detail",
    name: "DashboardProductDetail",
    component: DashboardProductDetail,
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
