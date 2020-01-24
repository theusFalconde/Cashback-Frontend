<template>
  <v-card class="ma-12">
    <v-card-title>Cadastrar Usuário</v-card-title>
    <v-card-text class="pb-0">
      <v-form v-model="formValid">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model.trim="usuario.nome" label="Nome*" :rules="rules"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model.trim="usuario.cpf" v-mask="cpfMask" label="CPF*" :rules="rules"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model.trim="usuario.email" label="E-mail"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model.trim="usuario.senha" label="Senha" :type="passwordVisibility ? 'text' : 'password'" :append-icon="passwordVisibility ? 'visibility_off' : 'visibility'" @click:append="() => (passwordVisibility = !passwordVisibility)"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-6">
      <v-layout justify-space-around align-center row>
        <v-btn @click="voltar" text color="error" class="ml-2">
          <v-icon class="pr-1">reply</v-icon>Voltar
        </v-btn>
        <v-btn @click="save" outlined rounded color="success" class="ml-2 w-20" :loading="loading" :disabled="!formValid">
          <v-icon class="pr-1">done</v-icon>Salvar
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data: () => ({
    usuario: {},
    formValid: false,
    loading: false,
    passwordVisibility: false,
    rules: [text => !!text || "Preenchimento Obrigatório"],
    cpfMask: "###.###.###-##"
  }),
  methods: {
    voltar() {
      this.$router.push("/login");
    },
    async save() {
      this.loading = true;
      this.$store.dispatch("usuario/salvar", { usuario: this.usuario })
        .then(() => {
          this.loading = false;
          this.voltar();
        })
        .catch(() => this.loading = false);
    }
  }
};
</script>

<style>
</style>
