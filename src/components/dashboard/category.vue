<template>
  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <loading
      color="#6618CE"
      v-model:active="loading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
    />

    <div class="card-wrap border rounded mb-4">
      <div
        class="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between"
      >
        <div class="card-header-flex">
          <h4 class="fs-md ft-bold mb-1">{{ data.name }}</h4>
          <!-- <p class="m-0 p-0">
            <span
              class="text-success bg-light-success small ft-medium px-2 py-1"
              >Primary Account</span
            >
          </p> -->
        </div>
        <div class="card-head-last-flex">
          <!-- Button -->
          <a
            class="border p-3 circle text-dark d-inline-flex align-items-center justify-content-center"
            :href="`/dashboard/category/${data.id}/detail`"
            ><i class="fas fa-pen-nib position-absolute"></i
          ></a>
          <!-- Button -->
          <button
            @click="DeleteCat(data.id)"
            style="cursor: pointer"
            class="border bg-white text-danger ml-1 p-3 circle text-dark d-inline-flex align-items-center justify-content-center"
          >
            <i class="fas fa-times position-absolute"></i>
          </button>
        </div>
      </div>
      <div class="card-wrap-body px-3 py-3">
        <img :src="data.image" class="img-fluid rounded" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { DeleteCategory } from "@/services/category.services";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: ["data"],
  components: { Loading },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    DeleteCat(id) {
      this.$swal({
        title: "Attention",
        text: "êtes-vous sur de vouloir supprimer ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui",
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          DeleteCategory(id)
            .then((res) => {
              if (res.state) {
                this.loading = false;
                this.$swal({
                  title: "Supprimer",
                  icon: "success",
                  button: "Ok",
                }).then(() => {
                  // window.location.assign("/dashboard/product");
                  window.location.reload();
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
    },
  },
};
</script>

<style></style>
