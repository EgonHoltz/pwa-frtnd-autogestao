<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../assets/checked-flags.png" class="app-icon rounded-circle img-thumbnail" alt="Application icon">
          <span class="fs-4">Auto Gestão</span>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
            <li v-if="isUserLoggedIn" class="nav-item"><router-link to="/cars" class="nav-link px-2 text-white">Meus carros</router-link></li>
            <li v-if="isUserLoggedIn" class="nav-item"><router-link to="/profile" class="nav-link px-2 text-white">Perfil</router-link></li>
            <li v-if="isUserLoggedIn && getUserType == 'admin'" class="nav-item ms-2">
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
          <div v-if="!isUserLoggedIn">
            <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
            <router-link to="/signup" class="btn btn-warning">Sign-up</router-link>
          </div>
          <div v-else>
            <button @click="logout()" class="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { AUTH_LOGOUT_SUCCESS } from "@/store/auth/auth.constants";
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
import router from "@/router";
import { mapGetters } from "vuex";
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
  },
  computed: {
    ...mapGetters("auth", [
    "isUserLoggedIn",
    "getProfileName",
    "getUserType",
    "getProfile"
    ])
  },
  methods: {
    logout() {
      this.$confirm(
        "Se sim, clique em OK",
        "Queres mesmo sair do Auto Gestão?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.commit(`auth/${AUTH_LOGOUT_SUCCESS}`);
          router.push({ name: "home" });
        },
        () => {
          this.$alert("Estás de volta!", "Informação", "info");
        }
      );
    }
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
