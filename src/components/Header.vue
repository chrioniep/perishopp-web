<template>
  <!-- ============================================================== -->
  <!-- Top header  -->
  <!-- ============================================================== -->
  <!-- Start Navigation -->
  <!-- Top Header -->

  <div class="header header-light dark-text">
    <div class="container">
      <nav id="navigation" class="navigation navigation-landscape">
        <div class="nav-header">
          <a class="nav-brand" href="/">
            <img src="/assets/img/logo-header.png" class="logo" alt="" />
          </a>
          <div class="nav-toggle"></div>
          <div class="mobile_nav">
            <ul>
              <li>
                <a href="#" onclick="openSearch()">
                  <i class="lni lni-search-alt"></i>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#login">
                  <i class="lni lni-user"></i>
                </a>
              </li>
              <li>
                <a href="#" onclick="openWishlist()">
                  <i class="lni lni-heart"></i><span class="dn-counter">2</span>
                </a>
              </li>
              <li>
                <a href="#" onclick="openCart()">
                  <i class="lni lni-shopping-basket"></i
                  ><span class="dn-counter">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-menus-wrapper" style="transition-property: none">
          <ul class="nav-menu">
            <li>
              <a href="#">Homme</a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="/shop/category/1">Pantalons</a></li>
                <li><a href="/shop/category/1">Jacket</a></li>
                <li><a href="/shop/category/1">Bloussons</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Femme</a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="/shop/category/1">Pantalons</a></li>
                <li><a href="/shop/category/1">Jacket</a></li>
                <li><a href="/shop/category/1">Blousse</a></li>
                <li><a href="/shop/category/1">Jupe</a></li>
                <li><a href="/shop/category/1">Lingerie</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Enfant</a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="/shop/category/1">Culotte</a></li>
                <li><a href="/shop/category/1">Jacket</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Accessoires</a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="/shop/category/1">Badge</a></li>
              </ul>
            </li>

            <li><a href="/shop">Boutiques</a></li>
          </ul>

          <ul class="nav-menu nav-menu-social align-to-right">
            <li>
              <a href="#" onclick="openSearch()">
                <i class="lni lni-search-alt"></i>
              </a>
            </li>
            <!-- <li>
              <a href="#" data-toggle="modal" data-target="#login">
                <i class="lni lni-user"></i>
              </a>
            </li> -->
            <!-- <li>
              <a href="#" onclick="openWishlist()">
                <i class="lni lni-heart"></i
                ><span class="dn-counter bg-success">2</span>
              </a>
            </li>
            <li>
              <a href="#" onclick="openCart()">
                <i class="lni lni-shopping-basket"></i
                ><span class="dn-counter bg-warning">3</span>
              </a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!-- End Navigation -->
  <div class="clearfix"></div>
  <!-- ============================================================== -->
  <!-- Top header  -->
  <!-- ============================================================== -->
</template>

<script>
export default {};
</script>

<style></style>
