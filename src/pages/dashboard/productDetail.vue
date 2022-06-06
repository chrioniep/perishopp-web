<template>
  <Header />
  <!-- ======================= Top Breadcrubms ======================== -->
  <!-- ======================= Top Breadcrubms ======================== -->
  <!-- ======================= Top Breadcrubms ======================== -->
  <div class="gray py-3">
    <div class="container">
      <div class="row">
        <div class="colxl-12 col-lg-12 col-md-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Add New Address
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- ======================= Top Breadcrubms ======================== -->

  <!-- ======================= Dashboard Detail ======================== -->
  <section class="middle">
    <div class="container">
      <div class="row align-items-start justify-content-between">
        <div class="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
          <div class="d-block border rounded mfliud-bot">
            <Navigation :menu="1" />
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-8 col-xl-8">
          <loading
            color="#6618CE"
            v-model:active="loading"
            :can-cancel="true"
            :on-cancel="onCancel"
            :is-full-page="true"
          />
          <!-- row -->
          <form>
            <div class="row">
              <div class="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
                <h4 class="ft-medium fs-lg">Ajouter un nouveau produit</h4>
              </div>
            </div>

            <div class="row">
              <!-- <ProductPhoto
                v-for="item in product.images"
                :key="item"
                :url="item"
              /> -->
              <div
                v-for="item in product.images"
                :key="item"
                class="col-xl-3 col-lg-3 col-md-6 col-sm-12"
              >
                <div class="product_grid card b-0">
                  <button
                    @click.prevent="removeImage(item)"
                    class="btn btn_love position-absolute ab-right theme-cl"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                  <div class="card-body p-0">
                    <div class="shop_thumb position-relative">
                      <a class="card-img-top d-block overflow-hidden"
                        ><img class="card-img-top" :src="item" alt="..."
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 justify-content-center">
                <div
                  v-if="progress != null"
                  class="progress-bar bg-dark"
                  role="progressbar"
                  :style="`width: ${progress}%`"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
                <div class="form-group">
                  <label class="text-dark">Upload image</label>
                  <input
                    @change="addImage"
                    type="file"
                    class="form-control"
                    placeholder="Upload image"
                  />
                </div>
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Titre*</label>
                  <input
                    v-model="product.name"
                    type="text"
                    class="form-control"
                    placeholder="nom du produit"
                  />
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="row mb-2">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group">
                      <label class="text-dark">Faux prix*</label>
                      <input
                        v-model="product.fakePrice"
                        type="text"
                        class="form-control"
                        placeholder="faux"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group">
                      <label class="text-dark">Prix*</label>
                      <input
                        v-model="product.price"
                        type="text"
                        class="form-control"
                        placeholder="vraie"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Description*</label>
                  <textarea
                    v-model="product.description"
                    class="form-control"
                    placeholder="description du produit"
                  />
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Categorie</label>
                  <select v-model="product.category" class="custom-select">
                    <option
                      v-for="item in categories"
                      :key="item.id"
                      :value="item.id"
                      :selected="
                        item.id === product.category && product.category.id
                      "
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="form-group">
                  <label class="text-dark">Sous Categorie</label>
                  <select v-model="product.subCategory" class="custom-select">
                    <option
                      v-for="item in subCategories"
                      :key="item.id"
                      :value="item.id"
                      :selected="
                        item.id === product.subCategory &&
                        product.subCategory.id
                      "
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row mb-2">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="row">
                      <div class="col-xl-9 col-lg-9">
                        <div class="form-group">
                          <label class="text-dark">Taille*</label>
                          <input
                            v-model="size"
                            type="text"
                            class="form-control"
                            placeholder="taille..."
                          />
                        </div>
                      </div>
                      <div
                        class="col-xl-3 col-lg-3 align-items-center justify-content-end d-flex"
                      >
                        <span
                          @click.prevent="addNewSize"
                          class="btn btn-dark mt-3"
                        >
                          Add
                        </span>
                      </div>
                    </div>

                    <div class="form-group">
                      <div
                        v-for="item in product.size"
                        :key="item"
                        class="d-flex align-items-center justify-content-between mb-2"
                      >
                        <h5 style="margin-bottom: 0px">{{ item }}</h5>
                        <button
                          @click.prevent="removeSize(item)"
                          class="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"
                        >
                          <i class="fas fa-times position-absolute"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="form-group">
                      <label class="text-dark">Badge</label>
                      <select v-model="product.badge" class="custom-select">
                        <option
                          v-for="item in badges"
                          :key="item.value"
                          :value="item.value"
                          :selected="item.value === product.badge"
                        >
                          {{ item.text }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row mb-2">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="form-group">
                      <input
                        id="tendance"
                        class="checkbox-custom"
                        name="delivery"
                        v-model="product.isTrending"
                        :checked="product.isTrending ? 'checked' : null"
                        type="checkbox"
                      />
                      <label for="tendance" class="checkbox-custom-label"
                        >Définir comme produit tendance</label
                      >
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="form-group">
                      <input
                        id="category"
                        class="checkbox-custom"
                        v-model="product.inCategory"
                        name="delivery"
                        type="checkbox"
                        :checked="product.inCategory ? 'checked' : null"
                      />
                      <label for="category" class="checkbox-custom-label"
                        >Définir dans le cateogrie</label
                      >
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="form-group">
                      <input
                        id="stock"
                        class="checkbox-custom"
                        name="delivery"
                        type="checkbox"
                        v-model="product.stock"
                        :checked="product.stock ? 'checked' : null"
                      />
                      <label for="stock" class="checkbox-custom-label"
                        >En stock ?</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group text-center">
                  <a
                    href="#"
                    :disabled="updating"
                    @click.prevent="update"
                    class="btn btn-dark full-width"
                  >
                    {{ updating ? "En cours..." : null }}
                    {{ !updating ? "Modifier" : null }}
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group text-center">
                  <a
                    href="#"
                    :disabled="deleting"
                    @click.prevent="deleteProd"
                    class="btn btn-danger full-width"
                  >
                    {{ deleting ? "En cours..." : null }}
                    {{ !deleting ? "Supprimer" : null }}</a
                  >
                </div>
              </div>
            </div>
          </form>
          <!-- row -->
        </div>
      </div>
    </div>
  </section>
  <!-- ======================= Dashboard Detail End ======================== -->

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

            <div class="quick_view_capt">
              <div class="prd_details">
                <div class="prt_01 mb-1">
                  <span class="text-light bg-info rounded px-2 py-1"
                    >Dresses</span
                  >
                </div>
                <div class="prt_02 mb-2">
                  <h2 class="ft-bold mb-1">Women Striped Shirt Dress</h2>
                  <div class="text-left">
                    <div
                      class="star-rating align-items-center d-flex justify-content-left mb-1 p-0"
                    >
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="small">(412 Reviews)</span>
                    </div>
                    <div class="elis_rty">
                      <span class="ft-medium text-muted line-through fs-md mr-2"
                        >$199</span
                      ><span class="ft-bold theme-cl fs-lg mr-2">$110</span
                      ><span
                        class="ft-regular text-danger bg-light-danger py-1 px-2 fs-sm"
                        >Out of Stock</span
                      >
                    </div>
                  </div>
                </div>

                <div class="prt_03 mb-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores.
                  </p>
                </div>

                <div class="prt_04 mb-2">
                  <p class="d-flex align-items-center mb-0 text-dark ft-medium">
                    Color:
                  </p>
                  <div class="text-left">
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="white8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="white8"
                        ><span
                          class="form-option-color rounded-circle blc7"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="blue8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="blue8"
                        ><span
                          class="form-option-color rounded-circle blc2"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="yellow8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="yellow8"
                        ><span
                          class="form-option-color rounded-circle blc5"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="pink8"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="pink8"
                        ><span
                          class="form-option-color rounded-circle blc3"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="red"
                      />
                      <label class="form-option-label rounded-circle" for="red"
                        ><span
                          class="form-option-color rounded-circle blc4"
                        ></span
                      ></label>
                    </div>
                    <div class="form-check form-option form-check-inline mb-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="color8"
                        id="green"
                      />
                      <label
                        class="form-option-label rounded-circle"
                        for="green"
                        ><span
                          class="form-option-color rounded-circle blc6"
                        ></span
                      ></label>
                    </div>
                  </div>
                </div>

                <div class="prt_04 mb-4">
                  <p class="d-flex align-items-center mb-0 text-dark ft-medium">
                    Taille:
                  </p>
                  <div class="text-left pb-0 pt-2">
                    <div
                      class="form-check size-option form-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="28"
                        checked=""
                      />
                      <label class="form-option-label" for="28">28</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="30"
                      />
                      <label class="form-option-label" for="30">30</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="32"
                      />
                      <label class="form-option-label" for="32">32</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="34"
                      />
                      <label class="form-option-label" for="34">34</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="36"
                      />
                      <label class="form-option-label" for="36">36</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="38"
                      />
                      <label class="form-option-label" for="38">38</label>
                    </div>
                    <div
                      class="form-check form-option size-option form-check-inline mb-2"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="size"
                        id="40"
                      />
                      <label class="form-option-label" for="40">40</label>
                    </div>
                  </div>
                </div>

                <div class="prt_05 mb-4">
                  <div class="form-row mb-7">
                    <div class="col-12 col-lg-auto">
                      <!-- Quantity -->
                      <select class="mb-2 custom-select">
                        <option value="1" selected="">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="col-12 col-lg">
                      <!-- Submit -->
                      <button
                        type="submit"
                        class="btn btn-block custom-height bg-dark mb-2"
                      >
                        <i class="lni lni-shopping-basket mr-2"></i>Add to Cart
                      </button>
                    </div>
                    <div class="col-12 col-lg-auto">
                      <!-- Wishlist -->
                      <button
                        class="btn custom-height btn-default btn-block mb-2 text-dark"
                        data-toggle="button"
                      >
                        <i class="lni lni-heart mr-2"></i>Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                <div class="prt_06">
                  <p class="mb-0 d-flex align-items-center">
                    <span class="mr-4">Share:</span>
                    <a
                      class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2"
                      href="#!"
                    >
                      <i class="fab fa-twitter position-absolute"></i>
                    </a>
                    <a
                      class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2"
                      href="#!"
                    >
                      <i class="fab fa-facebook-f position-absolute"></i>
                    </a>
                    <a
                      class="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted"
                      href="#!"
                    >
                      <i class="fab fa-pinterest-p position-absolute"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->

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

  <a id="back2Top" class="top-scroll" title="Back to top" href="#"
    ><i class="ti-arrow-up"></i
  ></a>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Navigation from "../../components/dashboard/navigation.vue";
import ProductPhoto from "../../components/dashboard/productPhoto.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {
  getProductDetail,
  UpdateProduct,
  DeleteProduct,
} from "../../services/product.services";
import {
  getCategoryList,
  getSubCategory,
} from "../../services/category.services";
import firebase from "../../firebase/config";

export default {
  components: { Header, Footer, Navigation, ProductPhoto, Loading },
  data() {
    return {
      product: {},
      categories: null,
      subCategories: null,
      size: "",
      progress: null,
      loading: false,
      updating: false,
      deleting: false,
      error: null,
      uploadLoadingImage: false,
      badges: [
        { value: "new", text: "New" },
        { value: "sale", text: "En solde" },
      ],
    };
  },
  methods: {
    getProduct() {
      const id = this.$route.params.id;
      getProductDetail(id).then((res) => {
        console.log(res);
        if (res.state) {
          this.product = res.data;
          getSubCategory(
            this.product && this.product.category && this.product.category.id
          ).then((res) => {
            if (res.state) {
              this.subCategories = res.data;
            } else {
              this.error = res.message;
              this.$swal({
                title: "Erreur",
                text: this.error,
                icon: "error",
                button: "Ok",
              }).then(() => {
                window.location.assign("/dashboard/product");
              });
            }
          });
          this.loading = false;
        } else {
          this.error = res.message;
          this.loading = false;
          this.$swal({
            title: "Erreur",
            text: this.error,
            icon: "error",
            button: "Ok",
          }).then(() => {
            window.location.assign("/dashboard/product");
          });
        }
      });
    },
    update() {
      this.updating = true;
      UpdateProduct(this.product).then((res) => {
        if (res.state) {
          this.updating = false;
          this.$swal({
            title: "Success",
            text: "Product updated successfully",
            icon: "success",
            button: "Ok",
          }).then(() => {
            window.location.assign("/dashboard/product");
          });
        } else {
          this.updating = false;
          this.$swal({
            title: "Erreur",
            text: resp.message,
            icon: "error",
            button: "Ok",
          }).then(() => {
            window.locationw.assign("/dashboard/product");
          });
        }
      });
    },
    deleteProd() {
      DeleteProduct(this.product.id).then((res) => {
        if (res.state) {
          this.$swal({
            title: "Attention",
            text: "êtes-vous sur de vouloir supprimer ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Oui",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/dashboard/products");
              DeleteProduct(this.product.id)
                .then((res) => {
                  if (res.state) {
                    this.$swal({
                      title: "Supprimer",
                      icon: "success",
                    }).then(() => {
                      window.location.assign("/dashboard/product");
                    });
                  }
                })
                .catch((e) => {
                  this.$swal({
                    title: "Erreur",
                    text: `Une erreur est survenue lors de la suppression\n${e.message}`,
                    icon: "error",
                  });
                });
            }
          });
        }
      });
    },
    removeImage(item) {
      var array = this.product.images.filter((e) => e != item);
      this.product.images = array;
    },
    addImage(event) {
      let value = event.target.files[0];
      this.uploadImage(value);
    },
    uploadImage(image) {
      const storageRef = firebase.storage().ref();
      this.uploadLoadingImage = true;
      const productImage = storageRef.child(`products/${image.name}`);
      const task = productImage.put(image);
      task.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progress = progress;
        if (progress == 100) {
          this.progress = null;
          snapshot.ref.getDownloadURL().then((url) => {
            this.product.images.push(url);
            this.$swal({
              toast: true,
              icon: "success",
              title: "Image uploaded",
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          });
        }
      });
    },
    addNewSize() {
      this.product.size.push(this.size);
      this.size = "";
    },
    removeSize(item) {
      var array = this.product.size.filter((e) => e != item);
      this.product.size = array;
    },
  },
  mounted() {
    if (localStorage.getItem("user-perish-auth")) {
      getCategoryList().then((resp) => {
        this.loading = true;
        if (resp.state) {
          this.categories = resp.data;
          this.getProduct();
        } else {
          this.error = resp.message;
          this.$swal({
            title: "Erreur",
            text: this.error,
            icon: "error",
            button: "Ok",
          }).then(() => {
            window.location.assign("/dashboard/product");
          });
        }
      });
    } else {
      this.$router.push("/dashboard");
    }
  },
  watch: {
    // whenever question changes, this function will run
    "product.category"(newCat, oldCat) {
      if (newCat !== oldCat) {
        console.log("get sub cat list");
        console.log(this.product.category);
        getSubCategory(this.product.category).then((resp) => {
          if (resp.state) {
            this.subCategories = resp.data;
          } else {
            this.error = resp.message;
          }
        });
      }
    },
  },
};
</script>

<style></style>
