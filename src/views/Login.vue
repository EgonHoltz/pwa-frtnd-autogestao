<template>
    <main class="form-signin">
        <form action="">
            
            <h1 class="h3 mb-3 fw-normal text-center">Por favor, autentique-se</h1>

            <div class="form mb-2">
                <label for="floatingInput">Usuário</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="User">
            </div>
            <div class="form mb-3">
                <label for="floatingPassword">Palavra-passe</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>

        </form>
    </main>
</template>

<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg  {
        font-size: 3.5rem;
    }
}
.form-signin {
  width: 100%;
  max-width: 40em;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>