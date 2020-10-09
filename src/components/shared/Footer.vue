<template>
  <nav class="navbar fixed-bottom navbar-light">
    <span class="navbar-text mr-auto">
      <strong>vue.js | product transactions application</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Purchase : </strong>
      <span class="badge badge-danger">
        {{ getTradeResult.purchase | currency }}
      </span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Sale : </strong>
      <span class="badge badge-success">
        {{ getTradeResult.sale | currency }}
      </span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Balance : </strong>
      <span class="badge badge-primary">
        {{ getTradeResult.balance | currency }}
      </span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getTradeResult: "getTradeResult",
    }),
  },
};
</script>

<style scoped>
.navbar {
  background-color: #d2e4f2;
}
</style>
