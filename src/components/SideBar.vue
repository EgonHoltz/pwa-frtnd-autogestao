<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark fullscreen" style="width: 20em;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Minhas viaturas</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <!--Add here the loop of cars -->
            <li class="nav-item">
                <a href="#" class="btn btn-outline-danger text-center mb-3" aria-current="page">
                <p class="fs-5">Seat - Ibiza K6 Cupra - 2001</p>
                <p class="fs-6">25-14-GE</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="btn btn-outline-warning text-center" aria-current="page">
                <p class="fs-5">Seat - Ibiza K6 Cupra - 2001</p>
                <p class="fs-6">25-14-GE</p>
                </a>
            </li>
            
        </ul>
        <hr>
        <a href="/" class="btn btn-primary mb-2">Importar viatura</a>
        <a href="/" class="btn btn-primary mt-3">Adicionar viatura</a>
    </div>
</template>

<style>
.fullscreen{
    min-height: 100vh;
}
</style>