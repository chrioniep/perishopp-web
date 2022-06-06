<template>
  <div class="single_filter_card mb-2">
    <h5>
      <a
        :href="`#${data.id}`"
        data-toggle="collapse"
        class="collapsed"
        aria-expanded="false"
        role="button"
        >{{ data.name }}<i class="accordion-indicator ti-angle-down"></i
      ></a>
    </h5>
    <div class="collapse" :id="data.id" data-parent="#mens-categories">
      <div class="card-body">
        <div class="inner_widget_link">
          <ul class="m-0 p-0">
            <li v-for="item in subCategoryList" :key="item.id">
              <a :href="`/sub-category/${item.id}`"
                >{{ item.name }}<span>{{ countProduct(item.id) }}</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubCategory } from "@/services/category.services";
import { getProductByCategory } from "@/services/product.services";
export default {
  props: ["data"],
  data() {
    return {
      subCategoryList: [],
      products: [],
    };
  },
  methods: {
    countProduct(item) {
      let count = 0;
      this.products.forEach((product) => {
        if (product.subCategory == item) {
          count++;
        }
      });
      return count;
    },
  },
  mounted() {
    getSubCategory(this.$props.data.id).then((res) => {
      this.subCategoryList = res.data;
      getProductByCategory(this.$props.data.id).then((resp) => {
        this.products = resp.data;
        console.log(resp.data);
      });
    });
  },
};
</script>

<style></style>
