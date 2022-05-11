<template>
  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
    <div class="cats_caption_wrap">
      <div class="cats_caption_thumb mb-2">
        <a href="#" class="d-block"
          ><img :src="data.image" class="img-fluid rounded" alt=""
        /></a>
      </div>
      <div class="cats_caption text-center">
        <h4 class="m-0">{{ data.name }}</h4>
        <span class="text-muted">{{ count }} Articles</span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/config";

const db = firebase.firestore();
export default {
  props: ["data"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getCount() {
      db.collection("Product")
        .where("category", "==", this.$props.data.id)
        .get()
        .then((query) => {
          this.count = query.size;
        });
    },
  },
  mounted() {
    this.getCount();
  },
};
</script>

<style></style>
