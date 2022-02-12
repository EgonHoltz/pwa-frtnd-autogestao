<template>
    <div class="template-reduced pt-3 text-center">
        <h1>Tabela de controlo de usuários</h1>
        <div>
            <mdb-tbl>
            <mdb-tbl-head>
                <tr class="text-white">
                    <th>Nome</th>
                    <th>Usuário</th>
                    <th>Ultimo login</th>
                    <th>IP</th>
                    <th>Ultimo login com sucesso</th>
                    <th>Client utilizado</th>
                    <th>Ações</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr v-for="user of users" :key="user._id" class="text-white">
                    <th scope="row">{{user.name}}</th>
                    <td>{{user.auth.username}}</td>
                    <td>{{user.access.lastLoginDate}}</td>
                    <td>{{user.access.ipAddress}}</td>
                    <td>{{user.access.loginSuccess}}</td>
                    <td>{{user.access.client}}</td>
                    <td>
                        <button type="button" @click="viewUser(user._id)" class="btn btn-primary btn-sm m-0 me-2">Ver</button>
                        <button type="button" class="btn btn-danger btn-sm m-0">Bloquear</button>
                    </td>
                </tr>
            </mdb-tbl-body>
            </mdb-tbl>
        </div>
    </div>
</template>

<script>
import { FETCH_USERS } from "@/store/users/user.constants";
import { mapGetters } from "vuex";
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
export default {
    name: 'UserControls',
    components: {
        mdbTbl,
        mdbTblHead,
        mdbTblBody
    },
    data: function() {
        return {
            users: [],
            sortType: 1
        };
    },
    computed: {
        ...mapGetters("user", ["getUsers", "getMessage"])
    },
    methods: {
        fetchUsers() {
            this.$store.dispatch(`user/${FETCH_USERS}`).then( 
            () => {
                this.users = this.getUsers;
            }, err => {
                this.$alert(`${err.message}`, 'Erro', 'error');
            });
        },
        viewUser(id) {
            const user = this.users.find(user => user._id === id);
            this.$fire({
                title: user.name,
                html: this.generateTemplate(user),
            });
        },
        generateTemplate(user) {
            return `
                <h5>${user.auth.username}</h5>

                <p>
                <b>Endereço:</b> ${user.freeAddress} <br>
                <b>Contacto:</b> ${user.contact} <br>
                <b>Data de nascimento:</b> ${this.formatDate(user.birthDate)}<br>
                <b>Tipo de utilizador:</b> ${user.type==="admin"?"Administrador":"Utilizador normal"} <br>
                <b>Data de registo:</b> ${this.formatDate(user.registrationDate)} <br>
                <b>Ultimo acesso:</b> ${this.formatDate(user.access.lastLoginDate)} <br>
                <b>IP:</b> ${user.access.ipAddress} <br>
                <b>SO - Browser:</b> ${user.access.client} <br>
                <b>Login com sucesso?</b> ${user.access.loginSuccess===true?"Sim":"Não"} <br>
                </p>
                `
        },
        formatDate: d => 
        {
            const newDate = new Date(Date.parse(d))
            return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
        },
    },
    created() {
        this.fetchUsers();
    }
};
</script>