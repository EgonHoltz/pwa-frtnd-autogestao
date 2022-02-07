<template>
    <div class="car-mainpage row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <SideBar />
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 ms-1 ">
            <CarForm />
        </main>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import CarForm from "@/components/CarForm.vue"

export default {
    name: "CarManagement",
    components: {
        SideBar,
        CarForm
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