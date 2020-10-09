<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h4 class="text-center">Sell Product</h4>
          <hr />
          <div class="form-group">
            <label>Product name</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="newProductSelected"
            >
              <option selected disabled>
                Please select the product you want to sell.
              </option>
              <option
                :disabled="product.count == 0"
                v-for="product in getProducts"
                :value="product.id"
                :key="product.id"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="product !== null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info"
                      >Stock : {{ product.count }}</span
                    >
                    <span class="badge badge-primary"
                      >Price : {{ productSalePrice | currency }}</span
                    >
                  </div>
                  <p class="border border-success p-2 text-secondary">
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group" v-if="product !== null">
            <label>Count</label>
            <input
              v-model="productCount"
              type="text"
              class="form-control"
              placeholder="Enter the product count..."
            />
          </div>
          <hr />
          <button
            @click="save"
            class="btn btn-primary"
            :disabled="saveButtonEnable"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      saveButtonClicked: false,
      productSalePrice: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),

    saveButtonEnable() {
      if (this.selectedProduct !== null && this.productCount > 0) {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    newProductSelected() {
      /* we'll send a parameter(product.id) to getProduct getter. We need to use parentheses */
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];

      let productPurchasePrice = parseInt(this.product.price, 10);
      let productRaisePrice = productPurchasePrice * (1 / 10);
      this.productSalePrice = productPurchasePrice + productRaisePrice;
    },

    save() {
      this.saveButtonClicked = true;
      let product = {
        id: this.selectedProduct,
        count: this.productCount,
      };
      this.$store.dispatch("sellProduct", product);
    },
  },

  beforeRouteLeave(to, from, next) {
    if (
      (this.selectedProduct !== null || this.productCount > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm(
          "There is unsaved data. Are you sure you want to close this tab?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style scoped>
.border-danger {
  border-style: solid !important;
}
</style>
