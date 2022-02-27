<template>
    <div v-if="car != null" class="white-text text-center bg-dark container-fluid" style="height: 100%;">
        <p class="fs-4 pb-3">{{car.brand}} - {{car.model}} - {{formatDateYear(car.characteristics.productionDate)}}</p>
        <form action="">
            <div class="row g-2 container-fluid">
                <div class="col-5">
                    <div class="col-sm-20 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">KMs:</label>
                        <div class="col-sm-5">
                            <input v-model="car.refuel.actualRefuelKm" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Pneu PSI:</label>
                        <div class="col-sm-5">
                            <input v-model="car.characteristics.standardTirePSI" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Tipo de combustível:</label>
                        <div class="col-sm-5">
                            <input v-model="car.characteristics.FuelType" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Matrícula:</label>
                        <div class="col-sm-5">
                            <input v-model="car.registration" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        <hr>
            <div class="row g-2 container-fluid">
                <div class="col-5">
                    <div class="col-sm-20 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca de óleo:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastOilChange" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca dos travões:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastBrakesChange" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca de pneus:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastTireChange" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca de corrente/correia:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastChainChange" type="text" class="form-control" >
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca de filtro de óleo:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastOilFilterChange" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima cambagem:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastCamberReview" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima troca de água:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastWaterChange" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Ultima Inspeção:</label>
                        <div class="col-sm-5">
                            <input v-model="car.maintenance.lastInspectionAux" type="text" class="form-control" >
                        </div>
                    </div>
                </div>
                <div class="col-11">
                    <label for="addComments" class="col-form-label text-start">Comentários adicionais:</label>
                    <div class="col-sm-0">
                        <textarea v-model="car.maintenance.additionalComments" name="" id="" cols="100" rows="3"></textarea>
                    </div>
                </div>
            </div>

            <hr>

            <div class="row g-2 container-fluid">
                <div class="col-5">
                    <div class="col-sm-20 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">Média de KM/L:</label>
                        <div class="col-sm-5">
                            <input v-model="car.computed.kmByLiters" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">KMs do óleo:</label>
                        <div class="col-sm-5">
                            <input v-model="car.computed.kmsOfOil" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">KMs dos pneus:</label>
                        <div class="col-sm-5">
                            <input v-model="car.computed.kmsOfTires" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    <div class="col-sm-15 mb-4 row">
                        <label for="staticEmail" class="col-sm-5 col-form-label text-end">KM dos freios:</label>
                        <div class="col-sm-5">
                            <input v-model="car.computed.kmsOfBrakes" type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </form>
        
        
        <hr>
        <div class="row g-5">
            <div class="col-2">
                <button v-b-modal.modal-refuel class="btn btn-primary">Abastecimento</button>
                <b-modal ref="modal-refuel" id="modal-refuel" title="Actualizar dados">
                    <form @submit.prevent="updateFuel">
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Quantidade de litros:</label>
                            <div class="col-sm-6">
                                <input v-model="car.refuel.actualRefuelLiters" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Valor do combustível por litro:</label>
                            <div class="col-sm-6">
                                <input v-model="car.refuel.actualRefuelPrice" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM actual da viatura:</label>
                            <div class="col-sm-4">
                                <input v-model="car.refuel.actualRefuelKm" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Salvar dados</button>
                    </form>
                </b-modal>

            </div>
            <div class="col-3">
                <button v-b-modal.modal-maintenance class="btn btn-success">Atualizar troca de componentes</button>
                <b-modal ref="modal-maintenance" id="modal-maintenance" title="Actualizar dados">
                    <h2>Alterar apenas os itens necessários</h2>
                    <form @submit.prevent="updateMaintenance">
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca do óleo:</label>
                            <div class="col-sm-6">
                                <input v-model="car.maintenance.lastOilChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca dos travões:</label>
                            <div class="col-sm-6">
                                <input v-model="car.maintenance.lastBrakesChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca do pneu:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastTireChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca da corrente:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastChainChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca do filtro de óleo:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastOilFilterChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de revisão da cambagem:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastCamberReview" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">KM de troca da água:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastWaterChange" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Data da ultima inspeção:</label>
                            <div class="col-sm-4">
                                <input v-model="car.maintenance.lastInspection" onmouseenter="(this.type='date')" onmouseleave="(this.type='text')" type="number" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Salvar dados</button>
                    </form>
                </b-modal>

            </div>
            <div class="col-3">
                <button v-b-modal.modal-comment class="btn btn-warning">Adicionar comentários</button>
                <b-modal  ref="modal-comment" id="modal-comment" title="Adicionar comentários">
                    <form @submit.prevent="updateComment">
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Comentários adicionais:</label>
                            <div class="col-sm-6">
                                <textarea v-model="car.maintenance.additionalComments" name="" id="" cols="35" rows="15"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Salvar dados</button>
                    </form>
                </b-modal>

            </div>
            <div class="col-2">
                <button @click="exportCar()" class="btn btn-light">Exportar viatura</button>
            </div>
            <div class="col-2">
                <button @click="deleteCar(car._id)" class="btn btn-danger">Remover viatura</button>
            </div>
        </div>
    </div>
</template>

<script>
import { UPDATE_REFUEL_CAR, UPDATE_MAINTENANCE_CAR, REMOVE_CAR } from "@/store/cars/car.constants";
import { mapGetters } from "vuex";
import router from "@/router";
export default {

    computed: {
        ...mapGetters('car',{car:"getCar"})
    },
    methods: {
        formatDateYear: d => 
        {   
            if (d == undefined)
                return;
            const newDate = new Date(Date.parse(d))
            return newDate.getFullYear()
        },
        updateFuel(){
            this.$refs['modal-refuel'].hide();
            this.$store.dispatch(`car/${UPDATE_REFUEL_CAR}`, this.car).then(
                () => {
                    this.$alert(this.getMessage, "Viatura reabastecida!", "success");
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        updateMaintenance(){
            this.$refs['modal-maintenance'].hide();
            this.$store.dispatch(`car/${UPDATE_MAINTENANCE_CAR}`, this.car).then(
                () => {
                    this.$alert(this.getMessage, "Itens de manutenção actualizados!", "success");
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        updateComment() {
            this.$refs['modal-comment'].hide();
            this.$store.dispatch(`car/${UPDATE_MAINTENANCE_CAR}`, this.car).then(
                () => {
                    this.$alert(this.getMessage, "Comentário actualizado!", "success");
                },
                err => {
                    this.$alert(`${err.message}`, "Erro", "error");
                }
            );
        },
        deleteCar(id){
            this.$confirm(
                "Todos os dados serão apagados",
                "Deseja mesmo remover sua viatura?",
                "warning",
                { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
            ).then(
                () => {
                    this.$store.dispatch(`car/${REMOVE_CAR}`, id).then(() => {
                        this.$alert(this.getMessage, "Viatura removida!", "success");
                        router.push({ name: "home" });
                    });
                },
                () => {
                    this.$alert("Ação cancelada!", "Informação", "info");
                }
            );
        },
        exportCar(){
            let carExported = this.car;
            delete carExported._id
            delete carExported.__v
            if (carExported.user) delete carExported.user
            const data = JSON.stringify(carExported)
            const blob = new Blob([data], {type: 'text/plain'})
            const e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = carExported.brand + ".json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        },
    }
}
</script>