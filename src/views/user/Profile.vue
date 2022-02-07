<template>
    <div class="template-profile">
        <div class="text-center pt-5">
            <h1>Egon Holtz</h1>
            <form action="">
                <div class="row mb-3">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Email:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Morada:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Data de Nascimento:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-15 mb-4 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-end">Contacto:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>

                <hr>
                <div class="row g-2">
                    <div class="col-6">
                        <a href="" class="btn btn-success">Actualizar dados</a>
                    </div>
                    <div class="col-6">
                        <a href="" class="btn btn-danger">Deletar conta</a>
                    </div>
                </div>

            </form>
        </div>

    </div>
</template>

<style>
.template-profile{
    width: 70%;
    margin: 0 auto;
}
</style>