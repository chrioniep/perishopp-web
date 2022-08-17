<template>
  <!-- ============================================================== -->
  <!-- Main wrapper - style you can find in pages.scss -->
  <!-- ============================================================== -->
  <loading
    color="#6618CE"
    v-model:active="loading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="true"
  />
  <Header />

  <!-- ============================ Hero Banner  Start================================== -->
  <div class="home-slider hide-navigation margin-bottom-0">
    <!-- Slide -->
    <!-- Slide -->
    <div
      data-background-image="/BANNIERE-SITE-VRAI.jpg"
      class="item"
      data-overlay="3"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-slider-container">
              <!-- Slide Title -->
              <div class="home-slider-desc text-center">
                <div class="home-slider-title mb-4">
                  <h5 class="text-light fs-lg ft-medium mb-0">
                    Get Summer Styles
                  </h5>
                  <h1 class="mb-1 ft-bold lg-heading">UP TO 40% OFF</h1>
                  <span class="trending text-light"
                    >There's nothing like trend</span
                  >
                </div>

                <a href="/shop" class="btn btn-white stretched-link"
                  >Shop Now<i class="lni lni-arrow-right ml-2"></i
                ></a>
              </div>
              <!-- Slide Title / End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============================ Hero Banner End ================================== -->

  <!-- ======================= Category Style ======================== -->
  <section class="p-0">
    <div class="container">
      <div class="row overlio">
        <CategoryCard v-for="cat in categories" :key="cat.id" :data="cat" />
      </div>
    </div>
  </section>
  <!-- ======================= Category Style 1 ======================== -->

  <!-- ======================= Product List ======================== -->
  <section class="middle">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Tendances</h2>
            <h3 class="ft-bold pt-3">Nos produits tendances</h3>
          </div>
        </div>
      </div>

      <!-- row -->
      <div class="row align-items-center rows-products">
        <SingleProduct
          v-for="trend in trendingProducts.data"
          :key="trend.id"
          :data="trend"
        />
      </div>
      <!-- row -->

      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="position-relative text-center">
            <a href="/shop" class="btn stretched-link borders"
              >Explore More<i class="lni lni-arrow-right ml-2"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Product List ======================== -->

  <!-- ======================= Deals of The Day ====================== -->
  <section
    class="bg-cover"
    style="background: url(/BANNIERE-SITE-VRAI.jpg) no-repeat"
    data-overlay="5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
          <div class="deals_wrap text-center">
            <h2 class="ft-bold text-light">Only Summer Collections</h2>
            <p class="text-light">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
            </p>
            <div class="mt-5">
              <a href="/shop" class="btn btn-white stretched-link"
                >Start Shopping <i class="lni lni-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Deals of The Day ====================== -->

  <CategorySecVue v-for="item in trendingCat" :key="item.id" :data="item" />

  <!-- ======================= Instagram Start ============================ -->
  <section class="p-0">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Instagram Gallery</h2>
            <span class="fs-lg ft-bold theme-cl pt-3"
              >@prix_dimi_perishopp</span
            >
            <h3 class="ft-bold lh-1">Instagram</h3>
          </div>
        </div>
      </div>

      <div class="row no-gutters">
        <div v-for="item in gelleryPhoto.data" :key="item.id" class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a
                href="https://www.instagram.com/prix_dimi_perishopp/"
                class="d-block"
                target="_blank"
                ><img :src="item.url" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Instagram Start ============================ -->

  <Footer />
  <SearchModal />

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>

  <!-- ============================================================== -->
  <!-- End Wrapper -->
  <!-- ============================================================== -->
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SingleProduct from "../components/product/singleProduct.vue";
import SingleQuickView from "../components/product/singleQuickView.vue";
import CategoryCard from "../components/categoryCard.vue";
import CategorySecVue from "@/components/CategorySec.vue";
import SearchModal from "../components/searchModal.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {
  getCategoryList,
  getCategoryHaveProductsInCat,
} from "../services/category.services";
import { getGalleryList } from "@/services/gallery.services";
import {
  getTrendingProducts,
  getWomanProductCat,
  getMenProductCat,
} from "../services/product.services";

export default {
  components: {
    Header,
    Footer,
    SingleProduct,
    SingleQuickView,
    SearchModal,
    CategoryCard,
    CategorySecVue,
    Loading,
  },
  name: "HomePage",
  data() {
    return {
      loading: false,
      categories: [],
      trendingCat: [],
      trendingProducts: {
        data: [],
        no_datas: false,
      },
      gelleryPhoto: {
        data: [],
        no_datas: false,
      },
      menCatProducts: {
        data: [],
        no_datas: false,
      },
      girlCatProducts: {
        data: [],
        no_datas: false,
      },
    };
  },
  methods: {
    // categoryList() {
    //   this.loading = true;
    //   getCategoryList().then((resp) => {
    //     if (resp.state) {
    //       this.categories = resp.data;
    //       this.loading = false;
    //     } else {
    //       this.loading = false;
    //     }
    //   });
    // },
    async HomeData() {
      this.loading = true;
      const cats = await getCategoryList();
      if (cats.state) {
        this.categories = cats.data;
      } else {
        this.categories = [];
      }

      const trendCat = await getCategoryHaveProductsInCat();
      if (trendCat.state) {
        this.trendingCat = trendCat.data;
      } else {
        this.trendingCat = [];
      }

      const trending = await getTrendingProducts();
      if (trending.state) {
        this.trendingProducts.data = trending.data;
      } else {
        this.trendingProducts.no_datas = true;
      }

      const menCat = await getMenProductCat();
      if (menCat.state) {
        this.menCatProducts.data = menCat.data;
      } else {
        this.menCatProducts.no_datas = true;
      }

      const girlCat = await getWomanProductCat();
      if (girlCat.state) {
        this.girlCatProducts.data = girlCat.data;
        console.log(this.girlCatProducts.data);
      } else {
        this.girlCatProducts.no_datas = true;
      }

      const gallery = await getGalleryList();
      if (gallery.state) {
        this.gelleryPhoto.data = gallery.data;
        this.loading = false;
      } else {
        this.gelleryPhoto.no_datas = true;
        this.loading = false;
      }
    },
  },
  mounted() {
    this.HomeData();
  },
};
</script>

<style></style>
