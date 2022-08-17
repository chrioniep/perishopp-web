<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-6">
    <div class="product_grid card b-0">
      <button class="snackbar-wishlist btn btn_love position-absolute ab-right">
        <i class="far fa-heart"></i>
      </button>
      <div class="card-body p-0">
        <div class="shop_thumb position-relative">
          <a
            class="card-img-top d-block overflow-hidden"
            :href="`/product/${data.id}`"
            ><img class="card-img-top" :src="data.images[0]" alt="..."
          /></a>
          <!-- <div
            class="product-hover-overlay bg-dark d-flex align-items-center justify-content-center"
          >
            <div class="edlio">
              <a
                href="#"
                data-toggle="modal"
                data-target="#quickview"
                class="text-white fs-sm ft-medium"
                ><i class="fas fa-eye mr-1"></i>Quick View</a
              >
            </div>
          </div> -->
        </div>
      </div>
      <div
        class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
      >
        <div class="text-left">
          <div class="text-center">
            <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
              <a :href="`/product/${data.id}`">{{ data.name }}</a>
            </h5>
            <div class="elis_rty">
              <span class="ft-bold fs-md text-dark">${{ data.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>
