<template>
    <div class="car-mainpage row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <SideBar v-bind:cars="cars"/>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 ms-1 ">
            <CarForm />
        </main>
    </div>
</template>

<script>
import { FETCH_CARS } from "@/store/cars/car.constants";
import { mapGetters } from "vuex";
import SideBar from "@/components/SideBar.vue"
import CarForm from "@/components/CarForm.vue"

export default {
    name: "CarManagement",
    components: {
        SideBar,
        CarForm
    },
    data: function() {
        return {
            cars: [],
            car: {},
        };
    },
    computed: {
        ...mapGetters("car", ["getCars", "getMessage"]),
        ...mapGetters("auth", ["getProfile"]),
    },
    methods: {
        fetchCars(){
            this.$store.dispatch(`car/${FETCH_CARS}`).then( 
            () => {
                this.cars = this.getCars;
            }, err => {
                this.$alert(`${err.message}`, 'Erro', 'error');
            });
        }
    },
    created() {
        this.fetchCars();
    }
}
</script>

<style>
.car-mainpage{
    min-height: 100vh;
}
.sidebar{
    max-width: 20em;
}
.car-frame{
    float: right;
}
</style>