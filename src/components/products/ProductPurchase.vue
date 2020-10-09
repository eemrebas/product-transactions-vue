<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h4 class="text-center">Buy Product</h4>
          <hr />
          <div class="form-group">
            <label>Product</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Enter the product name..."
            />
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="Enter the product count..."
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="Enter the product price..."
            />
          </div>
          <div class="form-group">
            <label>Descripton</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="Enter a description of the product..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            :disabled="saveButtonEnable"
            @click="saveProduct"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      saveButtonClicked: false,
    };
  },

  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      /* saveProduct is a method in product.js */
      this.$store.dispatch("saveProduct", this.product);
    },
  },

  computed: {
    /* Allow button clicks if all fields are occupied */
    saveButtonEnable() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },

  beforeRouteLeave(to, from, next) {
    if (
      (this.product.title.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0 ||
        this.product.description.length > 0) &&
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

<style></style>
