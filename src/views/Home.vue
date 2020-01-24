<template>
  <v-container>
    <v-row v-if="vendaObj === null">
      <v-card class="w-100">
        <v-card-title>{{ !isUsuarioAdmin ? 'Minhas' : '' }} Vendas</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="vendas"
            :items-per-page="10"
            :loading="loading"
            loading-text="Carregando..."
            no-data-text="Nenhum Registro"
            class="elevation-1"
          >
            <template v-slot:item="{ item }">
              <tr @click="alterarVenda(item)">
                <td>{{ item.codigo }}</td>
                <td>{{ item.usuario.nome }}</td>
                <td>{{ formatNumber(item.valor) }}</td>
                <td>{{ item.percCashback }} %</td>
                <td>{{ formatNumber(item.valorCashback) }}</td>
                <td>{{ formatDate(item.data) }}</td>
                <td class="ta-c">{{ item.status }}</td>
                <td>
                  <v-icon
                    color="red"
                    :disabled="!isUsuarioAdmin"
                    @click.stop="deletarVenda(item)"
                    title="Somento o administrador do sistema pode excluir os registros!"
                  >delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-btn absolute dark fab bottom right color="green" class="pl-0" @click="add">
        <v-icon>add</v-icon>
      </v-btn>
    </v-row>
    <v-row class="w-100" v-else>
      <Venda :venda="vendaObj" @voltar="voltar" />
    </v-row>
  </v-container>
</template>

<script>
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";

import { mask } from "vue-the-mask";
import { mapGetters } from "vuex";
import Venda from "./../components/Venda";
import Alert from "./../util/alert";
import Utils from "./../util/utils"

export default {
  components: { Venda },
  directives: { mask },
  data: () => ({
    vendaObj: null,
    loading: false
  }),
  computed: {
    ...mapGetters({
      isUsuarioAdmin: "usuario/isUsuarioAdmin",
      vendas: "venda/vendas"
    }),
    headers() {
      return [
        {
          text: "Código",
          value: "codigo",
          sortable: true,
          align: "left"
        },
        {
          text: "Revendedor",
          value: "usuario.nome",
          sortable: true,
          align: "left"
        },
        { text: "Valor", value: "valor", sortable: true, align: "left" },
        { text: "% Cashback", value: "percCashback", sortable: true, align: "left" },
        { text: "R$ Cashback", value: "valorCashback", sortable: true, align: "left" },
        { text: "Data", value: "data", sortable: true, align: "left" },
        {
          text: "Status",
          value: "status",
          sortable: true,
          align: "center"
        },
        { text: "Ações", value: "action", sortable: false }
      ];
    }
  },
  methods: {
    alterarVenda(venda) {
      venda.data = new Date(venda.data);
      this.vendaObj = venda;
    },
    formatDate(date) {
      let dateFormatada = new Date(date).toLocaleString();
      return dateFormatada.split(" ")[0];
    },
    formatNumber(number) {
      return Utils.numberToReal(number)
    },
    add() {
      this.vendaObj = { usuario: {}, data: new Date(), status: "Em Validação" };
    },
    voltar() {
      this.vendaObj = null;
      this.find();
    },
    async find() {
      this.loading = true;
      await this.$store.dispatch("venda/buscarVendas");
      this.loading = false;
    },
    deletarVenda(venda) {
      Alert.confirm(
        `Deseja realmente remover esta Venda?`,
        "Essa ação não pode ser desfeita."
      ).then(result => {
        if (result.value) {
          this.$store
            .dispatch("venda/deletarVenda", { id: venda.id })
            .then(() => {
              this.find();
            });
        }
      });
    }
  },
  created: async function() {
    this.find();
  }
};
</script>

<style>
.v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom {
  bottom: 28px;
}
</style>
