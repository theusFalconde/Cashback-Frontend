import vendaService from "../../service/venda-service";
import Utils from "../../util/utils"

const state = {
  vendas: [],
};

const getters = {
  vendas(state) {
    return state.vendas;
  },
};

const actions = {
  criarAtualizarVenda({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let { data } = payload.venda;
      let vendaAtualizar = {...payload.venda}
      vendaAtualizar.data = new Date(data).toISOString()
      vendaAtualizar.cpf = Utils.removeMaskCpf(vendaAtualizar.usuario.cpf)
      vendaService.criarAtualizarVenda(vendaAtualizar)
        .then(res => {
          commit("core/setSuccess", { title: "Venda Salva com Sucesso!" }, { root: true });
          resolve(res.data);
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
          reject(err);
        });
    });
  },
  deletarVenda({ commit }, payload) {
    return new Promise((resolve, reject) => {
      vendaService.deletarVenda(payload.id)
        .then(res => {
          commit("core/setSuccess", { title: "Venda Removida com Sucesso!" }, { root: true });
          resolve(res.data)
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
          reject(err);
        })
    })
  },
  buscarVendas({ commit, rootGetters }) {
    return new Promise((resolve, reject) => {
      let cpf = null
      if (!rootGetters['usuario/isUsuarioAdmin']) {
        cpf = rootGetters['usuario/usuario'].cpf
      }
      vendaService.buscarVendas(cpf)
        .then(res => {
          commit('setVendas', res.data)
          resolve(res.data);
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
          reject(err);
        });
    });
  },
  buscarCashbackAcumulado({ commit }, payload) {
    return new Promise((resolve, reject) => {
      vendaService.buscarCashbackAcumulado(payload.cpf)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          commit("core/setError", err.message, { root: true });
          reject(err);
        });
    });
  },
};

const mutations = {
  setVendas(state, payload) {
    state.vendas = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
