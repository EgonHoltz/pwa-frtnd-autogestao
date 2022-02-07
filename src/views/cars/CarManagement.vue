<template>
    <div class="car-mainpage">
        <SideBar />
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"

export default {
    name: "CarManagement",
    components: {
        SideBar
    }
}
</script>

<style>
.car-mainpage{
    width: 100%;
    min-height: 100vh;
}
</style>