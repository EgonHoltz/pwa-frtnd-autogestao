<template>
    <div class="pt-3">
        <h1 class="text-center pb-2">Criar conta</h1>

        <form @submit.prevent="add">
            <div class="row mb-3">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="col-sm-15 mb-4 row">
                        <label for="name" class="col-sm-3 col-form-label text-end">Nome completo:</label>
                        <div class="col-sm-6">
                            <input v-model="name" type="text" id="name" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="username" class="col-sm-3 col-form-label text-end">Usuário:</label>
                        <div class="col-sm-6">
                            <input v-model="auth.username" id="username" type="text" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="email" class="col-sm-3 col-form-label text-end">Email:</label>
                        <div class="col-sm-6">
                            <input v-model="email" id="email" type="email" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="freeAddress" class="col-sm-3 col-form-label text-end">Morada:</label>
                        <div class="col-sm-6">
                            <input v-model="freeAddress" id="freeAddress" type="text" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="birthDate" class="col-sm-3 col-form-label text-end">Data de Nascimento:</label>
                        <div class="col-sm-4">
                            <input v-model="birthDate" onmouseenter="(this.type='date')" onmouseleave="(this.type='text')" id="birthDate" type="text" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="contact" class="col-sm-3 col-form-label text-end">Contacto:</label>
                        <div class="col-sm-6">
                            <input v-model="contact" id="contact" type="text" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <hr>
                    <div class="col-sm-15 mb-4 row">
                        <label for="txtPassword" class="col-sm-3 col-form-label text-end">Senha:</label>
                        <div class="col-sm-5">
                            <input v-model="auth.password" id="txtPassword" type="password" class="form-control"  placeholder="" required>
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="txtConfirmPassword" class="col-sm-3 col-form-label text-end">Confirme a senha:</label>
                        <div class="col-sm-5">
                            <input type="password" id="txtConfirmPassword" class="form-control"  placeholder="" required>
                        </div>
                    </div>

                </div>
                <div class="col-md-2"></div>
            </div>


            <div class="row">
                <div class="col text-center">
                    <button type="submit" class="btn btn-success btn-lg">Criar conta</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import { ADD_USER } from "@/store/users/user.constants";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
    data: () => {
        return {
            name: "",
            birthDate: "",
            email: "",
            freeAddress: "",
            contact: "",
            auth: { username: "", password: ""}
        }
    },
    computed: {
        ...mapGetters("user", ["getMessage"]),
    },
    methods: {
        add() {
            if (document.querySelector("#txtPassword").value !==
            document.querySelector("#txtConfirmPassword").value) {
                console.log("pass not agree")
                this.$alert(
                "Campos password não coincidem",
                "Erro de validação do formulário",
                "error"
                );
            } else {
                console.log("call user add")
                this.$store.dispatch(`user/${ADD_USER}`, this.$data).then(
                    () => {
                        console.log("user added")
                        this.$alert(
                            this.getMessage,
                        "Utilizador adicionado!",
                        "success");
                        router.push({name: 'home'});
                    },
                    err => {
                        console.log("user not added")
                        this.$alert(`${err.message}`, "Erro", "error");
                    }
                );
            }
        }
    }
}
</script>