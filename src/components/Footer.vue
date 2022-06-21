<template>
  <footer class="dark-footer skin-dark-footer">
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div class="footer_widget">
              <img
                src="assets/img/logo-footer.png"
                class="img-footer small mb-2"
                alt=""
              />

              <div class="address mt-3">
                Avenue Nguma n°11 Q/Jolie parc C/ngaliema <br />Kinshasa
              </div>
              <div class="address mt-3">
                +243995303733<br />support@perishopp.com
              </div>
              <div class="address mt-3">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://web.facebook.com/perishoppdrc/"
                      ><i class="lni lni-facebook-filled"></i
                    ></a>
                  </li>
                  <!-- <li class="list-inline-item">
                    <a href="#"><i class="lni lni-twitter-filled"></i></a>
                  </li> -->
                  <!-- <li class="list-inline-item">
                    <a href="#"><i class="lni lni-youtube"></i></a>
                  </li> -->
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/prix_dimi_perishopp/"
                      ><i class="lni lni-instagram-filled"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/perishopp/?viewAsMember=true"
                      ><i class="lni lni-linkedin-original"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
            <div class="footer_widget">
              <h4 class="widget_title">Boutique</h4>
              <ul class="footer-menu">
                <li v-for="item in categories" :key="item.id">
                  <a :href="`/category/${item.id}`">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12 text-center">
            <p class="mb-0">
              © 2021 Perishopp Designd By
              <a target="_blank" href="http://www.crioni.herokuapp.com"
                >chrioniep</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { getCategoryList } from "../services/category.services";
export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    getCategoryList().then((res) => {
      if (res.state) {
        this.categories = res.data;
        console.log(this.categories);
      } else {
        this.categories = [];
      }
    });
  },
};
</script>

<style></style>
