import usuarioService from "../../../../is-extrator-web/src/service/usuario-service";
import router from "../../../../is-extrator-web/src/router";

const state = {
  usuario: null,
  token: null,
};

const getters = {
  usuario(state) {
    return state.usuario;
  },
  usuarioLogado(state) {
    return state.usuario != null;
  },
};

const actions = {
  login({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      usuarioService
        .login(payload.login)
        .then(res => {
          commit("setUsuario", res.data);
          resolve();
        })
        .catch(err => {
          dispatch("logout");
          commit(
            "core/setError",
            { message: "Erro no Login", error: err, empresa: null },
            { root: true }
          );
          reject(err);
        });
    });
  },
  salvar({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let usuario = payload.usuario;
      usuarioService
        .insertUpdate(usuario)
        .then(() => {
          commit("core/setSuccess", { title: "Registro Salvo com Sucesso!" }, { root: true });
          resolve();
        })
        .catch(err => {
          commit("core/setError", err, { root: true });
          reject();
        });
    });
  },
  logout({ commit }) {
    commit("setUsuario", null);
    commit("setToken", null);
    router.push("/login");
  }
};

const mutations = {
  setUsuario(state, payload) {
    state.usuario = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  setUsuarios(state, payload) {
    state.usuarios = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
