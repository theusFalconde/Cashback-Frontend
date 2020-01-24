<template>
  <v-card>
    <v-card-title>{{ venda._id === undefined ? "Cadastrar" : "Atualizar" }} Venda</v-card-title>
    <v-card-text>
      <v-form v-model="formValid">
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model.trim="venda.codigo" label="Código da Venda*" :rules="rules"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model.number="venda.valor" label="Valor da Venda"></v-text-field>
            </v-col>
            <v-col cols="4" class="pt-6">
              <Calendar v-model="venda.data" dateFormat="dd/mm/yy" class="w-100" />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model.trim="venda.usuario.cpf"
                v-mask="cpfMask"
                label="CPF do Revendedor*"
                :rules="rules"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-radio-group v-model="venda.status" row :rules="rules">
                <v-radio label="Em Validação" value="Em Validação" color="primary"></v-radio>
                <v-radio label="Aprovado" value="Aprovado" color="primary"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-space-around align-center row>
        <v-btn @click="voltar" text color="error" class="ml-2">
          <v-icon class="pr-1">reply</v-icon>Voltar
        </v-btn>
        <v-btn
          @click="criarAtualizarVenda"
          outlined
          rounded
          color="success"
          class="ml-2 w-20"
          :loading="loading"
          :disabled="!formValid"
        >
          <v-icon class="pr-1">done</v-icon>Salvar
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from "vue-the-mask";
import { mapGetters } from "vuex";
import Calendar from "primevue/calendar";

export default {
  components: { Calendar },
  directives: { mask },
  props: ["venda"],
  data: () => ({
    formValid: false,
    loading: false,
    rules: [text => !!text || "Preenchimento Obrigatório"],
    cpfMask: "###.###.###-##"
  }),
  computed: {
    ...mapGetters({
      isUsuarioAdmin: "usuario/isUsuarioAdmin",
      usuario: "usuario/usuario"
    })
  },
  methods: {
    voltar() {
      this.$emit("voltar");
    },
    criarAtualizarVenda() {
      this.loading = true;
      this.$store
        .dispatch("venda/criarAtualizarVenda", { venda: this.venda })
        .then(() => {
          this.loading = false;
          this.voltar();
        })
        .catch(() => (this.loading = false));
    }
  }
};
</script>

<style>
body .p-inputtext {
  border: 0px solid #8b8a8a;
  border-bottom: 1px solid #8b8a8a;
  border-radius: 0px;
  width: 100%;
  font-size: 16px;
}
</style>
