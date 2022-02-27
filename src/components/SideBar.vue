<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark fullscreen" style="width: 20em;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Minhas viaturas</span>
        </a>
        <hr>
        <ul v-for="car of cars" :key="car._id" class="nav nav-pills flex-column mb-auto">
            <!--Add here the loop of cars -->
            <li class="nav-item">
                <a @click="selectCarToPanel(car)" class="btn btn-outline-danger text-center mb-3 pe-5 ps-4" aria-current="page">
                <p class="fs-5">{{car.brand}} - {{car.model}} - {{formatDateYear(car.characteristics.productionDate)}}</p>
                <p class="fs-6">{{car.registration}}</p>
                </a>
            </li>
            
        </ul>
        <hr>
        <button v-b-modal.modal-importCar class="btn btn-primary mb-2">Importar viatura</button>
        <b-modal ref="modal-importCar" id="modal-importCar" title="Adicione uma viatura nova">
            <form @submit.prevent="importCar" enctype="multipart/form-data">
                <div class="col-sm-15 mb-4 row">
                    <label for="carImportInput" class="form-label">Ficheiro a importar:</label>
                    <div class="col-sm-6">
                        <input type="file" ref="file" @change="handleFileUpload()" id="carImportInput" class="form-control"  placeholder="">
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Importar viatura</button>
            </form>
        </b-modal>

        <button v-b-modal.modal-addCar class="btn btn-primary mt-3">Adicionar viatura</button>
        <b-modal ref="modal-addCar" id="modal-addCar" title="Adicione uma viatura nova">
            <form @submit.prevent="createNewCar">
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Marca:</label>
                    <div class="col-sm-6">
                        <input v-model="newCar.brand" type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Modelo:</label>
                    <div class="col-sm-6">
                        <input v-model="newCar.model" type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Matrícula:</label>
                    <div class="col-sm-6">
                        <input v-model="newCar.registration" type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Data de registro da viatura:</label>
                    <div class="col-sm-4">
                        <input v-model="newCar.characteristics.productionDate" onmouseenter="(this.type='date')" onmouseleave="(this.type='text')" type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Tipo de combustível:</label>
                    <div class="col-sm-4">
                        <input v-model="newCar.characteristics.FuelType" type="text" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">Valor padrão dos pneus (PSI):</label>
                    <div class="col-sm-4">
                        <input v-model="newCar.characteristics.standardTirePSI" type="number" min="1" max="3" step="0.1" class="form-control"  placeholder="">
                    </div>
                </div>
                <div class="col-sm-15 mb-4 row">
                    <label for="staticEmail" class="col-sm-3 col-form-label text-end">KMs actual da viatura:</label>
                    <div class="col-sm-4">
                        <input v-model="newCar.refuel.actualRefuelKm" type="number" min="1" class="form-control"  placeholder="">
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Salvar dados</button>
            </form>
        </b-modal>
    </div>
</template>

<script>
import { SET_CAR, ADD_CAR, FETCH_CARS, IMPORT_CAR } from "@/store/cars/car.constants";
import { mapGetters } from "vuex";
import router from "@/router";
export default {
    data: function() {
        return {
            newCar: {
                brand: "",
                model: "",
                registration: "",
                characteristics: {
                    productionDate: "",
                    FuelType: "",
                    standardTirePSI: null
                },
                refuel: {
                    actualRefuelKm: 0
                }
            },
            file: null
        }
    },
    computed: {
        ...mapGetters("auth", ["getProfile"]),
    },
    props: {
        cars: []
    },
    methods: {
        formatDateYear: d => 
        {
            const newDate = new Date(Date.parse(d))
            return newDate.getFullYear()
        },
        selectCarToPanel(car) {
            this.$store.commit(`car/${SET_CAR}`, car);
        },
        createNewCar(){
            this.$refs['modal-addCar'].hide();
            this.$store.dispatch(`car/${ADD_CAR}`, this.newCar).then(
                () => {
                    this.$alert(this.getMessage, "Viatura adicionada!", "success");
                    this.fetchCars();
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        fetchCars(){
            this.$store.dispatch(`car/${FETCH_CARS}`).then( 
            () => {
                this.cars = this.getCars;
            }, err => {
                this.$alert(`${err.message}`, 'Erro', 'error');
            });
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        importCar(){
            if (this.file == null || this.file == undefined) {
                this.$refs['modal-importCar'].hide();
                this.$alert("Não há ficheiro para upload", "Erro!", "error");
                return;
            }
            let formData = new FormData();
            formData.append('file', this.file);
            this.$store.dispatch(`car/${IMPORT_CAR}`, formData).then(
                () => {
                    this.$alert(this.getMessage, "Viatura adicionada!", "success");
                    this.fetchCars();
                    this.$refs['modal-importCar'].hide();
                    router.push({ name: "home" });
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                    this.$refs['modal-importCar'].hide();
                }
            );
        }
    }
}
</script>

<style>
.fullscreen{
    min-height: 100vh;
}
</style>