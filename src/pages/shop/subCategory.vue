<template>
  <Header />
  <loading
    color="#6618CE"
    v-model:active="loading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="true"
  />
  <!-- ======================= Shop Style 1 ======================== -->
  <section
    class="bg-cover"
    style="background: url(/BANNIERE-mo-b-VRAI.jpg) no-repeat"
  >
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="text-center py-5 mt-3 mb-3">
            <h1 class="ft-medium mb-3 text-white">{{ categoryDetail.name }}</h1>
            <h3 class="ft-small mb-3 text-white">{{ subCatDetail.name }}</h3>
            <!-- <ul class="shop_categories_list m-0 p-0">
              <li><a href="#">Men</a></li>
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Accessories</a></li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Shop Style 1 ======================== -->

  <!-- ======================= Filter Wrap Style 1 ======================== -->
  <section class="py-2 br-bottom br-top">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
          <!-- <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Shop</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Women's
              </li>
            </ol>
          </nav> -->
        </div>

        <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
          <!-- <div
            class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end"
          >
            <div class="single_fitres elspo_filter mr-2 br-right">
              <a
                href="#filterBox"
                class="simple-button px-2"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filterBox"
                ><i class="lni lni-text-align-right mr-2"></i
                ><span class="hide_mob">Filters</span></a
              >
            </div>
            <div class="single_fitres mr-2 br-right">
              <select class="custom-select simple">
                <option value="1" selected="">Default Sorting</option>
                <option value="2">Sort by price: Low price</option>
                <option value="3">Sort by price: Hight price</option>
                <option value="4">Sort by rating</option>
                <option value="5">Sort by trending</option>
              </select>
            </div>
            <div class="single_fitres">
              <a href="shop-style-4.html" class="simple-button mr-1"
                ><i class="ti-layout-grid3"></i
              ></a>
              <a href="shop-grid-3.html" class="simple-button mr-1"
                ><i class="ti-layout-grid2"></i
              ></a>
              <a href="shop-list-view.html" class="simple-button active"
                ><i class="ti-view-list"></i
              ></a>
            </div>
          </div> -->
        </div>
      </div>

      <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="collapse" id="filterBox">
            <div class="card py-3 b-0">
              <div class="row">
                <!-- Choose Category -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div class="single_filter_title mb-2">
                    <h6 class="mb-0 fs-sm ft-medium text-muted">
                      Choose Categories
                    </h6>
                  </div>
                  <div class="single_filter_card mb-2">
                    <h5>
                      <a
                        href="#mens"
                        data-toggle="collapse"
                        class="collapsed"
                        aria-expanded="false"
                        role="button"
                        >Men's<i class="accordion-indicator ti-angle-down"></i
                      ></a>
                    </h5>
                    <div
                      class="collapse"
                      id="mens"
                      data-parent="#mens-categories"
                    >
                      <div class="card-body">
                        <div class="inner_widget_link">
                          <ul class="m-0 p-0">
                            <li>
                              <a href="#">Pumps & high Heals<span>112</span></a>
                            </li>
                            <li>
                              <a href="#">Sandels<span>82</span></a>
                            </li>
                            <li>
                              <a href="#">Sneakers<span>56</span></a>
                            </li>
                            <li>
                              <a href="#">Boots<span>101</span></a>
                            </li>
                            <li>
                              <a href="#">Casual Shoes<span>212</span></a>
                            </li>
                            <li>
                              <a href="#">Flats Sandel<span>92</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="single_filter_card">
                    <h5>
                      <a
                        href="#womens"
                        data-toggle="collapse"
                        class="collapsed"
                        aria-expanded="false"
                        role="button"
                        >Women's<i class="accordion-indicator ti-angle-down"></i
                      ></a>
                    </h5>
                    <div
                      class="collapse"
                      id="womens"
                      data-parent="#womens-categories"
                    >
                      <div class="card-body">
                        <div class="inner_widget_link">
                          <ul class="p-0 m-0">
                            <li>
                              <a href="#">Pumps & high Heals<span>112</span></a>
                            </li>
                            <li>
                              <a href="#">Sandels<span>82</span></a>
                            </li>
                            <li>
                              <a href="#">Sneakers<span>56</span></a>
                            </li>
                            <li>
                              <a href="#">Boots<span>101</span></a>
                            </li>
                            <li>
                              <a href="#">Casual Shoes<span>212</span></a>
                            </li>
                            <li>
                              <a href="#">Flats Sandel<span>92</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Choose Category -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div class="single_filter_title mb-2">
                    <h6 class="mb-0 fs-sm ft-medium text-muted">Choose Size</h6>
                  </div>
                  <div class="text-left pb-0 pt-2">
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="a26"
                      />
                      <label class="form-option-label" for="a26">26</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="a28"
                      />
                      <label class="form-option-label" for="a28">28</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a30"
                        checked
                      />
                      <label class="form-option-label" for="a30">30</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a32"
                      />
                      <label class="form-option-label" for="a32">32</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a34"
                      />
                      <label class="form-option-label" for="a34">34</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a36"
                      />
                      <label class="form-option-label" for="a36">36</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a38"
                      />
                      <label class="form-option-label" for="a38">38</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a40"
                      />
                      <label class="form-option-label" for="a40">40</label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="sizes"
                        id="a42"
                      />
                      <label class="form-option-label" for="a42">42</label>
                    </div>
                  </div>
                </div>

                <!-- Choose Category -->
                <!-- <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div class="single_filter_title mb-2">
                    <h6 class="mb-0 fs-sm ft-medium text-muted">
                      Choose Colors
                    </h6>
                  </div>
                  <div class="text-left">
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="whitea8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="whitea8"
                        ><span
                          class="form-option-color rounded-circle blc7"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="bluea8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="bluea8"
                        ><span
                          class="form-option-color rounded-circle blc2"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="yellowa8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="yellowa8"
                        ><span
                          class="form-option-color rounded-circle blc5"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="pinka8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="pink8"
                        ><span
                          class="form-option-color rounded-circle blc3"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="ared"
                      />
                      <label class="form-option-label rounded-circle" for="red"
                        ><span
                          class="form-option-color rounded-circle blc4"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="agreen"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="agreen"
                        ><span
                          class="form-option-color rounded-circle blc6"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="askypet"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="askypet"
                        ><span
                          class="form-option-color rounded-circle blc9"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="aphilips"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="aphilips"
                        ><span
                          class="form-option-color rounded-circle blc8"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="colora8"
                        id="aelio"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="aelio"
                        ><span
                          class="form-option-color rounded-circle blc1"
                        ></span
                      ></label>
                    </div>
                  </div>
                </div> -->

                <!-- Choose Category -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div class="single_filter_title mb-2">
                    <h6 class="mb-0 fs-sm ft-medium text-muted">
                      Filter By Price
                    </h6>
                  </div>
                  <div class="side-list mb-2">
                    <div class="rg-slider">
                      <input
                        type="text"
                        class="js-range-slider"
                        name="my_range"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ============================= Filter Wrap ============================== -->

  <!-- ======================= All Product List ======================== -->
  <section class="middle">
    <div class="container">
      <!-- row -->
      <div class="row align-items-center rows-products">
        <!-- Single -->
        <SingleProduct
          v-for="item in productList"
          :key="item.id"
          :data="item"
        />
      </div>
      <!-- row -->

      <!-- <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#"
                  ><i class="fas fa-caret-left"></i
                ></a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#"
                  ><i class="fas fa-caret-right"></i
                ></a>
              </li>
            </ul>
          </nav>
        </div>
      </div> -->
    </div>
  </section>
  <!-- ======================= All Product List ======================== -->

  <!-- ======================= Customer Features ======================== -->
  <ShipDetailVue />
  <!-- ======================= Customer Features ======================== -->

  <Footer />

  <SearchModal />

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import ShipDetailVue from "@/components/product/ShipDetail.vue";
import SingleProduct from "../../components/product/singleProduct.vue";
import SearchModal from "../../components/searchModal.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {
  getSubCategoryDetail,
  getSubCategoryProduct,
} from "@/services/subCategory.services";
import { getCategoryDetail } from "@/services/category.services";

export default {
  components: {
    Footer,
    Header,
    SingleProduct,
    SearchModal,
    Loading,
    ShipDetailVue,
  },
  data() {
    return {
      loading: false,
      productList: [],
      categoryDetail: {},
      subCatDetail: {},
    };
  },
  mounted() {
    this.loading = true;
    getSubCategoryDetail(this.$route.params.id).then((res) => {
      this.subCatDetail = res.data;
      getCategoryDetail(res.data.category.id).then((respc) => {
        this.categoryDetail = respc.data;
        getSubCategoryProduct(this.$route.params.id).then((resp) => {
          if (resp.state) {
            this.productList = resp.data;
            this.loading = false;
          } else {
            this.productList = [];
            this.loading = false;
          }
        });
      });
    });
  },
};
</script>

<style></style>
