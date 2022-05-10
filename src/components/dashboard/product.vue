<template>
  <!-- Single -->
  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <div class="product_grid card b-0">
      <!-- <div
        class="badge bg-success text-white position-absolute ft-regular ab-left text-upper"
      >
        Sale
      </div> -->
      <button class="btn btn_love position-absolute ab-right theme-cl">
        <i class="fas fa-times"></i>
      </button>
      <div class="card-body p-0">
        <div class="shop_thumb position-relative">
          <a
            class="card-img-top d-block overflow-hidden"
            :href="`/dashboard/product/${user.id}/detail`"
            ><img class="card-img-top" :src="user.images[0]" alt="..."
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
        class="card-footers b-0 pt-3 px-2 bg-white d-flex align-items-start justify-content-center"
      >
        <div class="text-left">
          <div class="text-center">
            <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
              <a href="shop-single-v1.html">{{ user.name }}</a>
            </h5>
            <div class="elis_rty">
              <span class="ft-bold fs-md text-dark">${{ user.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style></style>
