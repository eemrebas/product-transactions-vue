<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link to="/" tag="a" class="navbar-brand">
      Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/urun-girisi"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Buy Product</a>
        </router-link>
        <router-link
          active-class="active"
          to="/urun-cikisi"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Sell Product</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  background-color: #29303b;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
