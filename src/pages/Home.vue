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

  <!-- Product View Modal -->
  <div
    class="modal fade lg-modal"
    id="quickview"
    tabindex="-1"
    role="dialog"
    aria-labelledby="quickviewmodal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl login-pop-form" role="document">
      <div class="modal-content" id="quickviewmodal">
        <div class="modal-headers">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="ti-close"></span>
          </button>
        </div>

        <div class="modal-body">
          <div class="quick_view_wrap">
            <div class="quick_view_thmb">
              <div class="quick_view_slide">
                <div class="single_view_slide">
                  <img
                    src="assets/img/product/1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="single_view_slide">
                  <img
                    src="assets/img/product/2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="single_view_slide">
                  <img
                    src="assets/img/product/3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="single_view_slide">
                  <img
                    src="assets/img/product/4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <SingleQuickView />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->

  <!-- Log In Modal -->
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginmodal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl login-pop-form" role="document">
      <div class="modal-content" id="loginmodal">
        <div class="modal-headers">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="ti-close"></span>
          </button>
        </div>

        <div class="modal-body p-5">
          <div class="text-center mb-4">
            <h2 class="m-0 ft-regular">Login</h2>
          </div>

          <form>
            <div class="form-group">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="Username*" />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password*"
              />
            </div>

            <div class="form-group">
              <div class="d-flex align-items-center justify-content-between">
                <div class="flex-1">
                  <input
                    id="dd"
                    class="checkbox-custom"
                    name="dd"
                    type="checkbox"
                  />
                  <label for="dd" class="checkbox-custom-label"
                    >Remember Me</label
                  >
                </div>
                <div class="eltio_k2">
                  <a href="#">Lost Your Password?</a>
                </div>
              </div>
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="btn btn-md full-width bg-dark text-light fs-md ft-medium"
              >
                Login
              </button>
            </div>

            <div class="form-group text-center mb-0">
              <p class="extra">
                Not a member?<a href="#et-register-wrap" class="text-dark">
                  Register</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->

  <!-- Search -->
  <div
    class="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
    style="display: none; right: 0"
    id="Search"
  >
    <div class="rightMenu-scroll">
      <div
        class="d-flex align-items-center justify-content-between slide-head py-3 px-3"
      >
        <h4 class="cart_heading fs-md ft-medium mb-0">Search Products</h4>
        <button onclick="closeSearch()" class="close_slide">
          <i class="ti-close"></i>
        </button>
      </div>

      <div class="cart_action px-3 py-4">
        <form class="form m-0 p-0">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Product Keyword.."
            />
          </div>

          <div class="form-group">
            <select class="custom-select">
              <option value="1" selected="">Choose Category</option>
              <option value="2">Men's Store</option>
              <option value="3">Women's Store</option>
              <option value="4">Kid's Fashion</option>
              <option value="5">Inner Wear</option>
            </select>
          </div>

          <div class="form-group mb-0">
            <button type="button" class="btn d-block full-width btn-dark">
              Search Product
            </button>
          </div>
        </form>
      </div>

      <div
        class="d-flex align-items-center justify-content-center br-top br-bottom py-2 px-3"
      >
        <h4 class="cart_heading fs-md mb-0">Hot Categories</h4>
      </div>

      <div class="cart_action px-3 py-3">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/tshirt.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">T-Shirts</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/pant.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Pants</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/fashion.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Women's</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/sneakers.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Shoes</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/television.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Television</a>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
            <div class="cats_side_wrap text-center">
              <div class="sl_cat_01">
                <div
                  class="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"
                >
                  <a href="javascript:void(0);" class="d-block"
                    ><img
                      src="assets/img/accessories.png"
                      class="img-fluid"
                      width="40"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="sl_cat_02">
                <h6 class="m-0 ft-medium fs-sm">
                  <a href="javascript:void(0);">Accessories</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Wishlist -->
  <div
    class="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
    style="display: none; right: 0"
    id="Wishlist"
  >
    <div class="rightMenu-scroll">
      <div
        class="d-flex align-items-center justify-content-between slide-head py-3 px-3"
      >
        <h4 class="cart_heading fs-md ft-medium mb-0">Saved Products</h4>
        <button onclick="closeWishlist()" class="close_slide">
          <i class="ti-close"></i>
        </button>
      </div>
      <div class="right-ch-sideBar">
        <div class="cart_select_items py-2">
          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between br-bottom px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/4.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Women Striped Shirt Dress
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">36</span>,
                  <span class="text-dark small">Red</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$129</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>

          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between br-bottom px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/7.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Girls Floral Print Jumpsuit
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">36</span>,
                  <span class="text-dark small">Red</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$129</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>

          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/8.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Girls Solid A-Line Dress
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">30</span>,
                  <span class="text-dark small">Blue</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$100</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          class="d-flex align-items-center justify-content-between br-top br-bottom px-3 py-3"
        >
          <h6 class="mb-0">Subtotal</h6>
          <h3 class="mb-0 ft-medium">$417</h3>
        </div>

        <div class="cart_action px-3 py-3">
          <div class="form-group">
            <button type="button" class="btn d-block full-width btn-dark">
              Move To Cart
            </button>
          </div>
          <div class="form-group">
            <button type="button" class="btn d-block full-width btn-dark-light">
              Edit or View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Cart -->
  <div
    class="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
    style="display: none; right: 0"
    id="Cart"
  >
    <div class="rightMenu-scroll">
      <div
        class="d-flex align-items-center justify-content-between slide-head py-3 px-3"
      >
        <h4 class="cart_heading fs-md ft-medium mb-0">Products List</h4>
        <button onclick="closeCart()" class="close_slide">
          <i class="ti-close"></i>
        </button>
      </div>
      <div class="right-ch-sideBar">
        <div class="cart_select_items py-2">
          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between br-bottom px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/4.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Women Striped Shirt Dress
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">36</span>,
                  <span class="text-dark small">Red</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$129</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>

          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between br-bottom px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/7.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Girls Floral Print Jumpsuit
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">36</span>,
                  <span class="text-dark small">Red</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$129</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>

          <!-- Single Item -->
          <div
            class="d-flex align-items-center justify-content-between px-3 py-3"
          >
            <div class="cart_single d-flex align-items-center">
              <div class="cart_selected_single_thumb">
                <a href="#"
                  ><img
                    src="assets/img/product/8.jpg"
                    width="60"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <div class="cart_single_caption pl-2">
                <h4 class="product_title fs-sm ft-medium mb-0 lh-1">
                  Girls Solid A-Line Dress
                </h4>
                <p class="mb-2">
                  <span class="text-dark ft-medium small">30</span>,
                  <span class="text-dark small">Blue</span>
                </p>
                <h4 class="fs-md ft-medium mb-0 lh-1">$100</h4>
              </div>
            </div>
            <div class="fls_last">
              <button class="close_slide gray">
                <i class="ti-close"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          class="d-flex align-items-center justify-content-between br-top br-bottom px-3 py-3"
        >
          <h6 class="mb-0">Subtotal</h6>
          <h3 class="mb-0 ft-medium">$1023</h3>
        </div>

        <div class="cart_action px-3 py-3">
          <div class="form-group">
            <button type="button" class="btn d-block full-width btn-dark">
              Checkout Now
            </button>
          </div>
          <div class="form-group">
            <button type="button" class="btn d-block full-width btn-dark-light">
              Edit or View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

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

export default {
  components: { Header, Footer, SingleProduct, SingleQuickView },
  name: "HomePage",
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style></style>
