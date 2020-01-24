<template>
  <v-container>
    <v-row>
      <v-card class="w-100">
        <v-card-title>Consulta Cashback Externa</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field v-model.trim="cpf" label="Digite o CPF*"></v-text-field>
              <v-btn @click="buscarCashbackAcumulado" outlined rounded color="primary" class="mt-3 ml-2" :loading="loading">
                <v-icon class="pr-1">search</v-icon> Pesquisar
              </v-btn>
            </v-row>
            <hr>
            <h3 class="my-2">Retorno Api Externa</h3>
            <hr>
            <v-row v-if="venda !== null">
              <v-col cols="4">
                Código: <label class="negrito">{{ venda.codigo }}</label>
              </v-col>
              <v-col cols="6">
                CPF: <label class="negrito">{{ formataCPF(venda.cpf) }}</label>
              </v-col>
              <v-col cols="4">
                R$ Compra: <label class="negrito">{{ formatNumber(venda.valor) }}</label>
              </v-col>
              <v-col cols="4">
                % Cashback: <label class="negrito">{{ venda.percCashback }}</label>
              </v-col>
              <v-col cols="4">
                R$ Cashback: <label class="negrito">{{ formatNumber(venda.valorCashback) }}</label>
              </v-col>
              <v-col cols="4">
                Data da Venda: <label class="negrito">{{ formatDate(venda.data) }}</label>
              </v-col>
              <v-col cols="6">
                Status da Venda: <label class="negrito">{{ venda.status }}</label>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Utils from "./../util/utils"

export default {
  data: () => ({
    loading: false,
    cpf: "",
    venda: {}
  }),
  methods: {
    formatDate(date) {
      if(date) {
        let dateFormatada = new Date(date).toLocaleString();
        return dateFormatada.split(" ")[0];
      }
    },
    formatNumber(number) {
      if(number) {
        return Utils.numberToReal(number)
      }
    },
    formataCPF(cpf) {
      if(cpf) {
        return Utils.formataCPF(cpf)
      }
    },
    async buscarCashbackAcumulado() {
      this.loading = true
      this.venda = await this.$store.dispatch("venda/buscarCashbackAcumulado", {cpf: this.cpf});
      this.loading = false
    }
  }
};
</script>

<style>
.negrito {
  font-weight: bold;
}
</style>
