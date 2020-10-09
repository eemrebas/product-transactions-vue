<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    /* get purchase, sale and balance from firebase */
    this.$store.dispatch("getTradeResult");

    /* get products from firebase */
    this.$store.dispatch("initApp");
  },
};
</script>

<style>
body {
  background-color: #e4ecfa;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
