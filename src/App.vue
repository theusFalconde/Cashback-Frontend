<template>
  <v-app>
    <template>
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        permanent
        app
        expand-on-hover
        v-if="usuario !== null && usuario.id !== 0"
      >
        <v-list class="pt-0 h-90">
          <v-list-item two-line style="padding-left: 8px;">
            <v-list-item-avatar>
              <v-img src="./assets/user.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ usuario.nome }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <template v-for="(item, i) in itens">
            <v-list-item
              router
              :to="item.to"
              :key="i"
              exact
              v-if="item.sub === undefined"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
            <template v-else>
              <v-list-group :key="i + 10" :prepend-icon="item.icon" no-action>
                <template v-slot:activator>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </template>
                <v-list-item
                  router
                  :to="sub.to"
                  :key="j"
                  v-for="(sub, j) in item.sub"
                >
                  <v-list-item-icon>
                    <v-icon>{{ sub.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ sub.text }}</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </template>
          </template>
        </v-list>

        <v-divider></v-divider>

        <div class="ta-c pt-3 px-3 body-2 text-truncate">
          <span>© Cashback 2020</span>
          <br />
          <span class="grey--text">Versão: {{ versao }}</span>
        </div>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        dark
        fixed
        color="primary"
      >
        <v-toolbar-title class="headline text-uppercase">
          <v-img
            alt="Vuetify Logo"
            class="shrink ml-5 mr-2"
            contain
            src="./assets/cashback.png"
            transition="scale-transition"
            width="150"
          ></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom v-if="usuario !== null">
          <template v-slot:activator="{ on }">
            <v-btn @click="logout" icon class="btn-list-action" v-on="on">
              <v-icon>power_settings_new</v-icon>
            </v-btn>
          </template>
          <span>Realizar Logout</span>
        </v-tooltip>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
    </template>
  </v-app>
</template>

<script>
import Alert from "./util/alert";
import { mapGetters } from "vuex";
import { version } from "./../package.json";
import Utils from "./util/utils"

export default {
  name: "App",
  data: () => ({
    drawer: null,
    versao: version,
    itens: [
      { icon: "home", text: "Home", to: "/" },
      { icon: "search", text: "Consulta Externa", to: "/consulta" },
      { icon: "info", text: "Sobre", to: "/sobre" }
      /*{
        icon: "group_add",
        text: "Cadastro",
        sub: [{ icon: "info", text: "Sobre", to: "/sobre" }]
      }*/
    ]
  }),
  computed: {
    ...mapGetters({
      error: "core/error",
      success: "core/success",
      usuario: "usuario/usuario"
    })
  },
  methods: {
    logout() {
      Alert.confirm(
        "Deseja Fazer o Logout?",
        "Deseja Realmente realizar o Logout?"
      ).then(res => {
        if (res.value) {
          this.$store.dispatch("usuario/logout");
        }
      });
    }
  },
  watch: {
    error(value) {
      if (value) {
        let { error, statusCode, message } = value;
        Alert.error(statusCode + ': ' + error, Utils.formatErrorMessage(message));
        this.$store.dispatch("core/clearError");
      }
    },
    success(value) {
      if (value) {
        Alert.success(value.title, value.message);
        this.$store.dispatch("core/clearSuccess");
      }
    }
  }
};
</script>
<style>
@import "./assets/style.css";
</style>
