<template>
    <div class="template-reduced pt-3 text-center">
        <h1>Tabela de controlo de usuários</h1>
        <div>
            <mdb-tbl>
            <mdb-tbl-head>
                <tr class="text-white">
                    <th>id</th>
                    <th>Usuário</th>
                    <th>Ultimo login</th>
                    <th>IP/Localização</th>
                    <th>Ações</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr class="text-white">
                <th scope="row">asd6549a4sd98a4984sa98</th>
                <td>BarryAllen</td>
                <td>10/01/2020 15:01</td>
                <td>95.159.151.156/Lisboa,PT</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm m-0">Bloquear</button>
                </td>
                </tr>
            </mdb-tbl-body>
            </mdb-tbl>
        </div>
    </div>
</template>

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'CarsControls',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>