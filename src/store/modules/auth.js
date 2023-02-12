import { signIn, signUp } from '@/api/auth'

const modulesAuth = {
  namespaced: true,
  state: {
    token: null,
    errors: [],
    loading: false,
  },
  mutations: {
    CHANGE_LOADING(state, bool) {
      state.loading = bool
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    ERROR_AUTH(state, errors) {
      state.errors = errors
    },
  },
  actions: {
    async signInUser({ commit }, data) {
      commit('CHANGE_LOADING', true)
      try {
        const response = await signIn(data)
        commit('SET_TOKEN', response.data.access_token)
      } catch (e) {
        commit('ERROR_AUTH', e)
      } finally {
        commit('CHANGE_LOADING', false)
      }
    },
    async signUpUser({ commit }, data) {
      commit('CHANGE_LOADING', true)
      try {
        await signUp(data)
      } catch (e) {
        commit('ERROR_AUTH', e)
      } finally {
        commit('CHANGE_LOADING', false)
      }
    },
  },
  getters: {},
}

export default modulesAuth
