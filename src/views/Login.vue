<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-form v-model="formValid" @submit.prevent="saveLogin">
              <v-card-text class="pb-0 pl-9 pr-10">
                <v-text-field
                  v-model.trim="login.email"
                  :rules="emailRules"
                  label="E-mail"
                  prepend-icon="person"
                  title="E-mail"
                ></v-text-field>
                <v-text-field
                  v-model.trim="login.senha"
                  :rules="senhaRules"
                  label="Senha"
                  prepend-icon="lock"
                  title="Senha"
                  :type="passwordVisibility ? 'text' : 'password'"
                  :append-icon="passwordVisibility ? 'visibility_off' : 'visibility'"
                  @click:append="() => (passwordVisibility = !passwordVisibility)"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-container class="pt-0">
                  <v-row align="center" justify="center" class="pb-3">
                    <v-btn
                      type="submit"
                      color="success"
                      :disabled="!formValid"
                      :loading="loading"
                      rounded
                      class="w-85"
                    >
                      <v-icon class="pr-1">done</v-icon>Login
                    </v-btn>
                  </v-row>
                  <v-row align="center" justify="center">
                    <v-btn type="button" color="primary" class="ml-2" to="/usuario" text>
                      <v-icon class="pr-1">person_add</v-icon>Cadastrar
                    </v-btn>
                  </v-row>
                </v-container>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    formValid: false,
    passwordVisibility: false,
    loading: false,
    login: {},
    emailRules: [text => !!text || "Preenchimento Obrigatório!"],
    senhaRules: [text => !!text || "Preenchimento Obrigatório!"]
  }),
  computed: {
    ...mapGetters({
      usuario: "usuario/usuario"
    })
  },
  methods: {
    saveLogin() {
      this.loading = true;
      this.$store
        .dispatch("usuario/login", { login: this.login })
        .then(() => (this.loading = false))
        .catch(() => (this.loading = false));
    }
  },
  watch: {
    usuario(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
</style>
