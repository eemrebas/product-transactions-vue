<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h4 class="text-center">Product List</h4>
          <hr />
          <table
            class="table table-hover table-striped table-bordered"
            v-if="getProducts.length > 0"
          >
            <thead>
              <th class="text-center">id</th>
              <th class="text-center">Product Name</th>
              <th class="text-center">Count</th>
              <th class="text-center">Purchase Price</th>
              <th class="text-center">Description</th>
            </thead>
            <tbody>
              <tr v-for="product in getProducts" :key="product.id">
                <td class="align-middle text-center">
                  <span class="badge badge-danger"> {{ product.id }} </span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td
                  class="align-middle text-center"
                  :class="getBackgroundColor(product.count)"
                >
                  {{ product.count }}
                </td>
                <td class="align-middle text-center">
                  {{ product.price | currency }}
                </td>
                <td class="align-middle text-center">
                  {{ product.description }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-secondary" v-else>
            <strong>No Registered Product Found !</strong>
            <br />
            <small>You can use the "Buy Product" menu to add a product. </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },

  methods: {
    getBackgroundColor(count) {
      return {
        "btn-danger text-white": count == 0,
        "btn-success text-white": count > 0,
      };
    },
  },
};
</script>

<style>
.card-body table tbody tr td:last-child {
  max-width: 250px;
}
</style>
