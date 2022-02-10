<template>
    <div class="template-reduced pt-3 text-center text-white">
        <h1>Tabela de controlo de carros</h1>
        <div>
            <mdb-tbl>
            <mdb-tbl-head>
                <tr class="text-white">
                    <th>id</th>
                    <th>Carro</th>
                    <th>Matrícula</th>
                    <th>Usuário</th>
                    <th>Ultima alteração</th>
                    <th>Ações</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr class="text-white">
                <th scope="row">asd6549a4sd98a4984sa98</th>
                <td>Seat Ibiza 2K6</td>
                <td>25-14-GE</td>
                <td>BarryAllen</td>
                <td>Ultima alteração</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm m-0">Remover</button>
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