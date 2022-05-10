<template>
  <Header />
  <!-- ======================= Top Breadcrubms ======================== -->
  <!-- ======================= Top Breadcrubms ======================== -->

  <!-- ======================= Login Detail ======================== -->
  <section class="middle">
    <div class="container">
      <div class="row align-items-start justify-content-center">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <form class="border p-3 rounded">
            <div class="row justify-content-center mb-2">
              <span style="color: #ee1c47">{{ error }}</span>
            </div>
            <div class="form-group">
              <label>User Name *</label>
              <input
                required
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Username*"
              />
            </div>

            <div class="form-group">
              <label>Password *</label>
              <input
                required
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password*"
              />
            </div>

            <!-- <div class="form-group">
              <div class="d-flex align-items-center justify-content-between">
                <div class="flex-1">
                  <input
                    id="dd"
                    class="checkbox-custom"
                    name="dd"
                    type="checkbox"
                  />
                  <label for="dd" class="checkbox-custom-label"
                    >Remember Me</label
                  >
                </div>
                <div class="eltio_k2">
                  <a href="#">Lost Your Password?</a>
                </div>
              </div>
            </div> -->

            <div class="form-group">
              <button
                :disabled="loading"
                @click.prevent="validateForm"
                class="btn btn-md full-width bg-dark text-light fs-md ft-medium"
              >
                {{ !loading ? "Login" : null }}
                {{ loading ? "Loading..." : null }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Login End ======================== -->

  <Footer />
  <!-- Product View Modal -->
  <!-- Search -->
  <div
    class="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
    style="display: none; right: 0"
    id="Search"
  >
    <div class="rightMenu-scroll">
      <div
        class="d-flex align-items-center justify-content-between slide-head py-3 px-3"
      >
        <h4 class="cart_heading fs-md ft-medium mb-0">Search Products</h4>
        <button onclick="closeSearch()" class="close_slide">
          <i class="ti-close"></i>
        </button>
      </div>

      <div class="cart_action px-3 py-4">
        <form class="form m-0 p-0">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Product Keyword.."
            />
          </div>

          <div class="form-group">
            <select class="custom-select">
              <option value="1" selected="">Choose Category</option>
              <option value="2">Men's Store</option>
              <option value="3">Women's Store</option>
              <option value="4">Kid's Fashion</option>
              <option value="5">Inner Wear</option>
            </select>
          </div>

          <div class="form-group mb-0">
            <button type="button" class="btn d-block full-width btn-dark">
              Search Product
            </button>
          </div>
        </form>
      </div>

      <div
        class="d-flex align-items-center justify-content-center br-top br-bottom py-2 px-3"
      >
        <h4 class="cart_heading fs-md mb-0">Hot Categories</h4>
      </div>

      <div class="cart_action px-3 py-3">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/tshirt.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">T-Shirts</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/pant.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Pants</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/fashion.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Women's</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/sneakers.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Shoes</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/television.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Television</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/accessories.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Accessories</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { login, logout } from "../../services/auth.services";

export default {
  components: { Header, Footer },
  data() {
    return {
      user: null,
      username: "",
      password: "",
      collection: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    validateForm() {
      this.error = "";
      if (this.username == "") {
        this.error = "veuillez remplir le nom d'utilisateur";
      } else if (this.password == "") {
        this.error = "veuillez remplir le mot de passe";
      } else if (this.username == "" && this.password == "") {
        this.error = "veuillez remplir le nom d'utilisateur et le mot de passe";
      } else if (this.username != "" && this.password != "") {
        this.loginAdmin();
      }
    },
    loginAdmin() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.loading = true;
      login(data).then((resp) => {
        if (resp.state) {
          this.user = resp.data;
          this.loading = false;
          this.$router.push("/dashboard/product");
        } else {
          this.error = resp.message;
          this.loading = false;
        }
      });
    },
  },
  mounted() {
    if (localStorage.getItem("user-perish-auth")) {
      this.user = JSON.parse(localStorage.getItem("user-perish-auth"));
      this.$router.push("/dashboard/product");
    } else {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style></style>
