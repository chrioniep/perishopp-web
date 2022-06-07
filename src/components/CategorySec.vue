<template>
  <section class="space min">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">{{ data.name }}</h2>
            <h3 class="ft-bold pt-3">Produit {{ data.name }}</h3>
          </div>
        </div>
      </div>

      <div class="row align-items-center rows-products">
        <SingleProduct v-for="item in products" :key="item.id" :data="item" />
      </div>
    </div>
  </section>
</template>

<script>
import SingleProduct from "../components/product/singleProduct.vue";
import { getProductByHaveCategory } from "../services/product.services";
export default {
  props: ["data"],
  components: {
    SingleProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    getProductByHaveCategory(this.$props.data.id).then((res) => {
      if (res.state) {
        this.products = res.data;
      } else {
        this.products = [];
      }
    });
  },
};
</script>

<style></style>
