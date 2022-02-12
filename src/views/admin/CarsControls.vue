<template>
    <div class="template-reduced pt-3 text-center text-white">
        <h1>Tabela de controlo de carros</h1>
        <div>
            <mdb-tbl>
            <mdb-tbl-head>
                <tr class="text-white">
                    <th>Carro</th>
                    <th>Matrícula</th>
                    <th>Usuário</th>
                    <th>Ultima alteração</th>
                    <th>Ações</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr v-for="car of cars" :key="car._id" class="text-white">
                <td>{{car.brand}}</td>
                <td>{{car.registration}}</td>
                <td>{{findUsername(car.user)}}</td>
                <td>{{formatDate(car.registrationDate)}}</td>
                <td>
                    <button type="button" @click="viewCar(car._id)" class="btn btn-primary btn-sm m-0 me-2">Ver</button>
                    <button type="button" @click="deleteCar(car._id)" class="btn btn-danger btn-sm m-0 ms-2">Remover</button>
                </td>
                </tr>
            </mdb-tbl-body>
            </mdb-tbl>
        </div>
    </div>
</template>

<script>
import { FETCH_USERS } from "@/store/users/user.constants";
import { FETCH_ADMCARS, REMOVE_CAR } from "@/store/cars/car.constants";
import { mapGetters } from "vuex";
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
export default {
    name: 'CarsControls',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    },
    data: function() {
        return {
            users: [],
            cars: [],
            sortType: 1
        };
    },
    computed: {
        ...mapGetters("user", ["getUsers", "getMessage"]),
        ...mapGetters("car", ["getCars", "getMessage"])
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
        fetchCars() {
            this.$store.dispatch(`car/${FETCH_ADMCARS}`).then( 
            () => {
                this.cars = this.getCars;
            }, err => {
                this.$alert(`${err.message}`, 'Erro', 'error');
            });
        },
        findUsername(userId) {
            let userfound = {};
            userfound = this.users.filter(user => {
                return user._id == userId
            });
            return userfound[0].auth.username;
        },
        deleteCar(carId){
            this.$store.dispatch(`car/${REMOVE_CAR}`, carId).then(
                () => {
                    this.$alert(this.getMessage, "Viatura removida!", "success");
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        viewCar(id) {
            const car = this.cars.find(car => car._id === id);
            this.$fire({
                title: car.brand,
                html: this.generateTemplate(car),
            });
        },
        generateTemplate(car) {
            return `
                <h5>${car.model}</h5>

                <p>
                <b>Matrícula:</b> ${car.registration} <br>
                <b>Ano de cadastro da matrícula:</b> ${this.formatDateYear(car.characteristics.productionDate)} <br>
                <b>Contacto:</b> ${car.contact} <br>
                <b>Tipo de combustível:</b> ${car.characteristics.FuelType} <br>
                <b>Calibragem de pneu (PSI):</b> ${car.characteristics.standardTirePSI} <br>
                <hr>
                <b>KM ultima troca de óleo:</b> ${car.maintenance.lastOilChange}<br>
                <b>KM ultima troca de travões:</b> ${car.maintenance.lastBrakesChange}<br>
                <b>KM ultima troca de pneus:</b> ${car.maintenance.lastTireChange}<br>
                <b>KM ultima troca de correntes:</b> ${car.maintenance.lastChainChange}<br>
                <b>KM ultima troca de filtro de óleo:</b> ${car.maintenance.lastOilFilterChange}<br>
                <b>KM ultima revisão de cambagem:</b> ${car.maintenance.lastCamberReview}<br>
                <b>KM ultima troca de água:</b> ${car.maintenance.lastWaterChange}<br>
                <b>Data da ultima inspeção:</b> ${this.formatDate(car.maintenance.lastWaterChange)}<br>
                <b>Comentários adicionais:</b> ${car.maintenance.additionalComments}<br>
                <h5>Manutenções</h5>
                <hr>
                <h5>Reabastecimento</h5>
                <b>Data do abastecimento anterior:</b> ${this.formatDate(car.refuel.lastRefuelDate)}<br>
                <b>Quantidade de litros no abastecimento anterior:</b> ${car.refuel.lastRefuelLiters}<br>
                <b>Valor por litro do abastecimento anterior:</b> ${car.refuel.lastRefuelPrice}<br>
                <b>KM do reabastecimento anterior:</b> ${car.refuel.lastRefuelKm}<br>
                <b>Data do abastecimento actual:</b> ${this.formatDate(car.refuel.actualRefuelDate)}<br>
                <b>Quantidade de litros no abastecimento actual:</b> ${car.refuel.actualRefuelLiters}<br>
                <b>Valor por litro do abastecimento actual:</b> ${car.refuel.actualRefuelPrice}<br>
                <b>KM do reabastecimento actul:</b> ${car.refuel.actualRefuelKm}<br>
                <hr>
                <b>Data do registro: </b> ${this.formatDate(car.registrationDate)}<br>
                </p>
                `
        },
        formatDate: d => {
            const newDate = new Date(Date.parse(d))
            return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
        },
        formatDateYear: d => {
            const newDate = new Date(Date.parse(d))
            return newDate.getFullYear()
        },
    },
    created() {
        this.fetchCars();
        this.fetchUsers();
    }

}
</script>