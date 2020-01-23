const state = {
  loading: false,
  error: null,
  success: null,
  debug: false
};

const getters = {
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  },
  success(state) {
    return state.success;
  },
  debug(state) {
    return state.debug;
  },
  versao(state) {
    return state.versao;
  }
};

const actions = {
  clearError({ commit }) {
    commit("clearError");
  },
  clearSuccess({ commit }) {
    commit("clearSuccess");
  },
  clearLogs({ commit }) {
    commit("clearLogs");
  }
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setPathUserData(state, payload) {
    state.pathUserData = payload;
  },
  setSuccess(state, payload) {
    state.success = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  },
  clearSuccess(state) {
    state.success = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
