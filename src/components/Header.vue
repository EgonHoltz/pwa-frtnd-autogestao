<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../assets/checked-flags.png" class="app-icon rounded-circle img-thumbnail" alt="Application icon">
          <span class="fs-4">Auto Gestão</span>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
          <li class="nav-item"><router-link to="/cars" class="nav-link px-2 text-white">Meus carros</router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link px-2 text-white">Perfil</router-link></li>
          <li class="nav-item ms-2">
            <mdb-dropdown>
              <mdb-dropdown-toggle color="dark" slot="toggle">Administração</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="elegant">
                <mdb-dropdown-item><router-link to="/admin/cars" class="nav-link px-2 text-brack">Carros</router-link></mdb-dropdown-item>
                <mdb-dropdown-item><router-link to="/admin/users" class="nav-link px-2 text-black">Usuários</router-link></mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>       
          </li>
        </ul>

        <div class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
          <router-link to="/signup" class="btn btn-warning">Sign-up</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: {
      mdbDropdown,
      mdbDropdownItem,
      mdbDropdownMenu,
      mdbDropdownToggle
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
