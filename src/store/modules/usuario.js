import usuarioService from "../../service/usuario-service";
import router from "../../router";

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
  isUsuarioAdmin(state) {
    let role = state.usuario.roles.find(r => r === 'admin')
    return role ? true : false;
  },
};

const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      usuarioService.login(payload.login)
        .then(res => {
          commit("setToken", res.data.accessToken);
          commit("setUsuario", res.data.usuario);
          resolve();
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
          reject(err);
        });
    });
  },
  salvar({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let usuario = payload.usuario;
      usuarioService
        .criar(usuario)
        .then(() => {
          commit("core/setSuccess", { title: "Usuário criado com sucesso!" }, { root: true });
          resolve();
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
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
