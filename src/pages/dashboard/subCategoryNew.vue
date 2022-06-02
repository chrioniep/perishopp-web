<template>
  <Header />
  <!-- ======================= Top Breadcrubms ======================== -->
  <!-- ======================= Top Breadcrubms ======================== -->
  <!-- ======================= Top Breadcrubms ======================== -->
  <div class="gray py-3">
    <div class="container">
      <div class="row">
        <div class="colxl-12 col-lg-12 col-md-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Add New Address
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- ======================= Top Breadcrubms ======================== -->

  <!-- ======================= Dashboard Detail ======================== -->
  <section class="middle">
    <div class="container">
      <div class="row align-items-start justify-content-between">
        <div class="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
          <div class="d-block border rounded mfliud-bot">
            <Navigation :menu="3" />
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-8 col-xl-8">
          <!-- row -->
          <form>
            <div class="row">
              <div class="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
                <h4 class="ft-medium fs-lg">Ajouter une sous categorie</h4>
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Nom*</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Titre de la sous categorie"
                  />
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Categorie</label>
                  <select v-model="category" class="custom-select">
                    <option
                      :value="item.id"
                      v-for="item in categories"
                      :key="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                  <!-- <select v-model="product.category" class="custom-select">
                    <option
                      v-for="item in categories"
                      :key="item.id"
                      :value="item.id"
                      :selected="
                        item.id === product.category && product.category.id
                      "
                    >
                      {{ item.name }}
                    </option>
                  </select> -->
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group text-center">
                  <a
                    href="#"
                    :disabled="loading"
                    @click.prevent="createSubCategoryNew"
                    class="btn btn-dark full-width"
                  >
                    {{ loading ? "En cours..." : null }}
                    {{ !loading ? "Ajouter" : null }}
                  </a>
                </div>
              </div>
            </div>
          </form>
          <!-- row -->
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Dashboard Detail End ======================== -->

  <Footer />

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Navigation from "../../components/dashboard/navigation.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { getCategoryList } from "../../services/category.services";
import { CreateSubCategory } from "@/services/subCategory.services";
import firebase from "../../firebase/config";
export default {
  components: { Header, Footer, Navigation, Loading },
  data() {
    return {
      loading: false,
      name: null,
      category: null,
      categories: null,
      progress: null,
    };
  },
  methods: {
    createSubCategoryNew() {
      this.loading = true;
      CreateSubCategory(this.$data).then((resp) => {
        if (resp.state) {
          this.loading = false;
          this.$swal({
            title: "Creer",
            text: "Sous categorie creer avec succes",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.assign("/dashboard/sub-category");
          });
        } else {
          this.loading = false;
          this.$swal({
            title: "Erreur",
            text: resp.message,
            icon: "error",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.assign("/dashboard/sub-category");
          });
        }
      });
    },
  },
  mounted() {
    getCategoryList().then((resp) => {
      if (resp.state) {
        this.categories = resp.data;
      }
    });
  },
};
</script>

<style></style>
