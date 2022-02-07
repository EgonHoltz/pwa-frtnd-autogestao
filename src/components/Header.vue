<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../assets/checked-flags.png" class="app-icon rounded-circle img-thumbnail" alt="Application icon">
          <span class="fs-4">Auto Gestão</span>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
          <li><router-link to="/cars" class="nav-link px-2 text-white">Meus carros</router-link></li>
          <li><a href="#" class="nav-link px-2 text-white">Perfil</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    msg: String
  }
}
</script>

<style>
.app-icon{
  max-width: 5em;
  max-height: 5em;
  margin-right: 1em;
}
</style>
