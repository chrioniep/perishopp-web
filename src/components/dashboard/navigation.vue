<template>
  <div class="dashboard_author">
    <h4
      class="px-3 py-2 mb-0 lh-2 gray fs-sm ft-medium text-muted text-uppercase text-left"
    >
      Dashboard Navigation
    </h4>
    <ul class="dahs_navbar">
      <li>
        <a href="/dashboard/product" :class="`${menu == 1 ? 'active' : ''}`">
          <i class="lni lni-producthunt mr-2"></i>Produits</a
        >
      </li>
      <li>
        <a href="/dashboard/category" :class="`${menu == 2 ? 'active' : ''}`"
          ><i class="lni lni-briefcase mr-2"></i>Categories</a
        >
      </li>
      <li>
        <a href="/dashboard/gallery" :class="`${menu == 3 ? 'active' : ''}`"
          ><i class="lni lni-gallery mr-2"></i>Gallery</a
        >
      </li>
      <!-- <li>
        <a href="payment-methode.html"
          ><i class="lni lni-mastercard mr-2"></i>Payment Methode</a
        >
      </li>
      <li>
        <a href="login.html"
          ><i class="lni lni-power-switch mr-2"></i>Log Out</a
        >
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

<style></style>
