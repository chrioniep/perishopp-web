<template>
  <!-- ============================================================== -->
  <!-- Main wrapper - style you can find in pages.scss -->
  <!-- ============================================================== -->
  <Header />

  <!-- ============================ Hero Banner  Start================================== -->
  <div class="home-slider hide-navigation margin-bottom-0">
    <!-- Slide -->
    <!-- Slide -->
    <div
      data-background-image="/assets/img/banner-c.jpg"
      class="item"
      data-overlay="3"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-slider-container">
              <!-- Slide Title -->
              <div class="home-slider-desc text-center">
                <div class="home-slider-title mb-4">
                  <h5 class="text-light fs-lg ft-medium mb-0">Prix Dimi</h5>
                  <h1 class="mb-1 ft-bold lg-heading">Collections 2022</h1>
                </div>

                <p class="mb-0">
                  <a
                    href="#"
                    class="btn stretched-link light-borders mx-2 my-3 ft-bold"
                    >Boutique Hommes</a
                  >
                  <a
                    href="#"
                    class="btn stretched-link light-borders mx-2 my-3 ft-bold"
                    >Boutique Femmes</a
                  >
                </p>
              </div>
              <!-- Slide Title / End -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide -->
    <div data-background-image="assets/img/banner-b.jpg" class="item">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-slider-container">
              <!-- Slide Title -->
              <div class="home-slider-desc">
                <div class="home-slider-title mb-4">
                  <h5 class="text-light fs-md ft-medium mb-0">
                    Prix Dimi Collection
                  </h5>
                  <h1 class="mb-1 ft-bold text-light lg-heading">
                    la mode des femmes<br />UpTo 30% Off
                  </h1>
                  <span class="trending text-light"
                    >There's nothing like trend</span
                  >
                </div>

                <a href="#" class="btn btn-white stretched-link"
                  >Shop Now<i class="lni lni-arrow-right ml-2"></i
                ></a>
              </div>
              <!-- Slide Title / End -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide -->
    <div
      data-background-image="assets/img/banner-c.jpg"
      class="item"
      data-overlay="3"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-slider-container">
              <!-- Slide Title -->
              <div class="home-slider-desc text-center">
                <div class="home-slider-title mb-4">
                  <h5 class="text-light fs-lg ft-medium mb-0">
                    Get Summer Styles
                  </h5>
                  <h1 class="mb-1 ft-bold lg-heading">UP TO 40% OFF</h1>
                  <span class="trending text-light"
                    >There's nothing like trend</span
                  >
                </div>

                <a href="#" class="btn btn-white stretched-link"
                  >Shop Now<i class="lni lni-arrow-right ml-2"></i
                ></a>
              </div>
              <!-- Slide Title / End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============================ Hero Banner End ================================== -->

  <!-- ======================= Category Style ======================== -->
  <section class="p-0">
    <div class="container">
      <div class="row overlio">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div class="cats_caption_wrap">
            <div class="cats_caption_thumb mb-2">
              <a href="#" class="d-block"
                ><img src="assets/img/a-7.png" class="img-fluid rounded" alt=""
              /></a>
            </div>
            <div class="cats_caption text-center">
              <h4 class="m-0">Femmes</h4>
              <span class="text-muted">5670 Collections</span>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div class="cats_caption_wrap">
            <div class="cats_caption_thumb mb-2">
              <a href="#" class="d-block"
                ><img src="assets/img/a-9.png" class="img-fluid rounded" alt=""
              /></a>
            </div>
            <div class="cats_caption text-center">
              <h4 class="m-0">Hommes</h4>
              <span class="text-muted">3220 Collections</span>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div class="cats_caption_wrap">
            <div class="cats_caption_thumb mb-2">
              <a href="#" class="d-block"
                ><img src="assets/img/a-8.png" class="img-fluid rounded" alt=""
              /></a>
            </div>
            <div class="cats_caption text-center">
              <h4 class="m-0">Enfants</h4>
              <span class="text-muted">7412 Collections</span>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div class="cats_caption_wrap">
            <div class="cats_caption_thumb mb-2">
              <a href="#" class="d-block"
                ><img
                  src="assets/img/a-10.png"
                  class="img-fluid rounded"
                  alt=""
              /></a>
            </div>
            <div class="cats_caption text-center">
              <h4 class="m-0">Accessoires</h4>
              <span class="text-muted">6580 Collections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Category Style 1 ======================== -->

  <!-- ======================= Product List ======================== -->
  <section class="middle">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Tendances</h2>
            <h3 class="ft-bold pt-3">Nos produits tendances</h3>
          </div>
        </div>
      </div>

      <!-- row -->
      <div class="row align-items-center rows-products">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-success text-white position-absolute ft-regular ab-left text-upper"
            >
              Sale
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/1.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Set</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$119.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-info text-white position-absolute ft-regular ab-left text-upper"
            >
              New
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/2.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Formal Men Lowers</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="text-muted ft-medium line-through mr-2"
                      >$129.00</span
                    ><span class="ft-bold theme-cl fs-md">$79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/3.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Suit</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$80.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- row -->

      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="position-relative text-center">
            <a href="shop-style-1.html" class="btn stretched-link borders"
              >Explore More<i class="lni lni-arrow-right ml-2"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Product List ======================== -->

  <!-- ======================= Deals of The Day ====================== -->
  <section
    class="bg-cover"
    style="background: url(assets/img/banner-c.jpg) no-repeat"
    data-overlay="5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
          <div class="deals_wrap text-center">
            <h4 class="ft-medium text-light">Get up to -40% Off</h4>
            <h2 class="ft-bold text-light">Only Summer Collections</h2>
            <p class="text-light">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <div class="mt-5">
              <a href="#" class="btn btn-white stretched-link"
                >Start Shopping <i class="lni lni-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Deals of The Day ====================== -->

  <!-- ======================= Blog Start ============================ -->
  <section class="space min">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Femmes</h2>
            <h3 class="ft-bold pt-3">Produit pour femme</h3>
          </div>
        </div>
      </div>

      <div class="row align-items-center rows-products">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-success text-white position-absolute ft-regular ab-left text-upper"
            >
              Sale
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/1.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Set</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$119.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-info text-white position-absolute ft-regular ab-left text-upper"
            >
              New
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/2.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Formal Men Lowers</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="text-muted ft-medium line-through mr-2"
                      >$129.00</span
                    ><span class="ft-bold theme-cl fs-md">$79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/3.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Suit</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$80.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!-- ======================= Blog Start ============================ -->

  <section
    class="bg-cover"
    style="background: url(assets/img/banner-c.jpg) no-repeat"
    data-overlay="5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-9 col-md-12 col-sm-12">
          <div class="deals_wrap text-center">
            <h4 class="ft-medium text-light">Get up to -40% Off</h4>
            <h2 class="ft-bold text-light">Only Summer Collections</h2>
            <p class="text-light">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <div class="mt-5">
              <a href="#" class="btn btn-white stretched-link"
                >Start Shopping <i class="lni lni-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="space min">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Hommes</h2>
            <h3 class="ft-bold pt-3">Produit pour Hommes</h3>
          </div>
        </div>
      </div>

      <div class="row align-items-center rows-products">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-success text-white position-absolute ft-regular ab-left text-upper"
            >
              Sale
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/1.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Set</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$119.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <div
              class="badge bg-info text-white position-absolute ft-regular ab-left text-upper"
            >
              New
            </div>
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/2.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Formal Men Lowers</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="text-muted ft-medium line-through mr-2"
                      >$129.00</span
                    ><span class="ft-bold theme-cl fs-md">$79.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Single -->
        <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-6">
          <div class="product_grid card b-0">
            <button
              class="snackbar-wishlist btn btn_love position-absolute ab-right"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="card-body p-0">
              <div class="shop_thumb position-relative">
                <a
                  class="card-img-top d-block overflow-hidden"
                  href="shop-single-v1.html"
                  ><img
                    class="card-img-top"
                    src="assets/img/product/3.jpg"
                    alt="..."
                /></a>
                <div
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
                </div>
              </div>
            </div>
            <div
              class="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center"
            >
              <div class="text-left">
                <div class="text-center">
                  <h5 class="fw-bolder fs-md mb-0 lh-1 mb-1">
                    <a href="shop-single-v1.html">Half Running Suit</a>
                  </h5>
                  <div class="elis_rty">
                    <span class="ft-bold fs-md text-dark">$80.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!-- ======================= Instagram Start ============================ -->
  <section class="p-0">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center">
            <h2 class="off_title">Instagram Gallery</h2>
            <span class="fs-lg ft-bold theme-cl pt-3">@prix_dimi</span>
            <h3 class="ft-bold lh-1">Instagram</h3>
          </div>
        </div>
      </div>

      <div class="row no-gutters">
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-1.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-2.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-3.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-7.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-8.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-4.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-5.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="_insta_wrap">
            <div class="_insta_thumb">
              <a href="javascript:void(0);" class="d-block"
                ><img src="assets/img/i-6.png" class="img-fluid" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Instagram Start ============================ -->

  <Footer />
  <SearchModal />

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>

  <!-- ============================================================== -->
  <!-- End Wrapper -->
  <!-- ============================================================== -->
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SingleProduct from "../components/product/singleProduct.vue";
import SingleQuickView from "../components/product/singleQuickView.vue";
import SearchModal from "../components/searchModal.vue";

export default {
  components: { Header, Footer, SingleProduct, SingleQuickView, SearchModal },
  name: "HomePage",
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style></style>
