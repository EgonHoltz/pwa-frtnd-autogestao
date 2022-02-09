<template>
    <div class="template-profile">
        <div class="text-center pt-5">
            <h1>{{user.name}}</h1>
            <form action="">
                <div class="row mb-3">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-6 col-form-label text-end">Email: {{user.email}}</label>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-6 col-form-label text-end">Morada: {{user.freeAddress}}</label>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-6 col-form-label text-end">Data de Nascimento: {{user.birthDate}}</label>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-6 col-form-label text-end">Contacto: {{user.contact}}</label>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <hr>
            </form>
                <div class="row g-2">
                    <div class="col-6">
                        <button href="" v-b-modal.modal-editUser class="btn btn-success">Actualizar dados</button>
                            <b-modal ref="modal-editUser" id="modal-editUser" title="Actualizar dados">
                                <form @submit.prevent="update">
                                    <div class="col-sm-15 mb-4 row">
                                        <label for="staticEmail" class="col-sm-3 col-form-label text-end">Email:</label>
                                        <div class="col-sm-6">
                                            <input v-model="user.email" type="text" class="form-control"  placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-sm-15 mb-4 row">
                                        <label for="staticEmail" class="col-sm-3 col-form-label text-end">Morada:</label>
                                        <div class="col-sm-6">
                                            <input v-model="user.freeAddress" type="text" class="form-control"  placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-sm-15 mb-4 row">
                                        <label for="staticEmail" class="col-sm-3 col-form-label text-end">Data de Nascimento:</label>
                                        <div class="col-sm-4">
                                            <input v-model="user.birthDate" type="text" class="form-control"  placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-sm-15 mb-4 row">
                                        <label for="staticEmail" class="col-sm-3 col-form-label text-end">Contacto:</label>
                                        <div class="col-sm-6">
                                            <input v-model="user.contact" type="text" class="form-control"  placeholder="">
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success">Salvar dados</button>
                                </form>
                            </b-modal>
                    </div>
                    <div class="col-6">
                        <button @click="deleteUser(user._id)" class="btn btn-danger">Deletar conta</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import { EDIT_USER, REMOVE_USER } from "@/store/users/user.constants";
import { mapGetters } from "vuex";
import router from "@/router";
import moment from 'moment';

export default {
    name: "UserProfile",
    data: function() {
        return {
            editMode: false
        };
    },
    computed: {
        ...mapGetters(["getUserLevelByPoints"]),
        ...mapGetters({ user: "auth/getProfile" })
    },
    methods: {
        enableEdit(user){
            this.user = user
            this.editMode = true;
        },
        saveUserProfile(){
            this.editMode = false;
        },
        setCurrentDateTime(paramDate) {
            const date = new Date(paramDate);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
        },
        update(){
            this.$refs['modal-editUser'].hide();
            this.$store.dispatch(`user/${EDIT_USER}`, this.user).then(
                () => {
                    this.$alert(this.getMessage, "Usuário atualizado!", "success");
                    router.push({ name: "profile" });
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        deleteUser(){
            this.$confirm(
                "Todos os seus dados e carros serão apagados",
                "Deseja mesmo remover seu utilizador?",
                "warning",
                { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
            ).then(
                () => {
                    this.$store.dispatch(`user/${REMOVE_USER}`, this.user._id).then(() => {
                        this.$alert(this.getMessage, "Utilizador removido!", "success");
                        router.push({ name: "home" });
                    });
                },
                () => {
                    this.$alert("Ação cancelada!", "Informação", "info");
                }
            );
        }
    },
    created(){
        this.editMode = false;
        let birthDateTemp = moment(this.user.birthDate).format("DD/MM/YYYY");
        this.user.birthDate = birthDateTemp;
    }   
}
</script>

<style>
.template-profile{
    width: 70%;
    margin: 0 auto;
}
</style>