<template>
    <main class="form-signin">
        <form @submit.prevent="login">
            
            <h1 class="h3 mb-3 fw-normal text-center">Por favor, autentique-se</h1>

            <div class="form mb-2">
                <label for="floatingInput">Usuário</label>
                <input v-model="username" type="text" class="form-control" id="floatingInput" placeholder="User">
            </div>
            <div class="form mb-3">
                <label for="floatingPassword">Palavra-passe</label>
                <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Entrar</button>
            <router-link :to="{name: 'signup'}" tag="button" class="w-100 btn btn-lg btn-warning">Registrar-se</router-link>

        </form>
    </main>
</template>

<script>
import { MODULE_BASE, AUTH_LOGIN } from "@/store/auth/auth.constants";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["getMessage"])
  },
  methods: {
    login() {
      this.$store
        .dispatch(`${MODULE_BASE}/${AUTH_LOGIN}`, this.$data)
        .then(() => {
          this.$alert(this.getMessage, "Login", "success");
          router.push({ name: "home" });
        })
        .catch(err => {
          this.$alert(`${err.message}`, "Erro", "error");
        });
    }
  }  
}
</script>

<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg  {
        font-size: 3.5rem;
    }
}
.form-signin {
  width: 100%;
  max-width: 40em;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>