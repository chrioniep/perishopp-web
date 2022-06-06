<template>
  <li @mouseover="subMenuDisplay" @mouseout="subMenuHide" :class="tab">
    <a href="#">{{ data.name }}</a>
    <ul
      :style="`${tab != null ? 'display: block' : null}`"
      class="nav-dropdown nav-submenu"
    >
      <li v-for="item in subCategoryList" :key="item.id">
        <a :href="`/sub-category/${item.id}`">{{ item.name }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
import { getSubCategory } from "@/services/category.services";
export default {
  props: ["data"],
  data() {
    return {
      subCategoryList: [],
      tab: null,
    };
  },
  methods: {
    subMenuDisplay() {
      this.tab = "nav-submenu-open";
    },
    subMenuHide() {
      this.tab = null;
    },
  },
  mounted() {
    getSubCategory(this.$props.data.id).then((res) => {
      this.subCategoryList = res.data;
    });
  },
};
</script>

<style></style>
