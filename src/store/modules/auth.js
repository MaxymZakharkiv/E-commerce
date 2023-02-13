import { signIn, signUp, getProfile } from '@/api/auth'

const modulesAuth = {
  namespaced: true,
  state: {
    token: null,
    errors: [],
    loading: false,
    profile: null,
  },
  mutations: {
    GET_PROFILE_USER(state, data) {
      state.profile = data
    },
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
        localStorage.setItem('token', response.data.access_token)
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
    async getUserProfile({ commit }) {
      commit('CHANGE_LOADING', true)
      try {
        const response = await getProfile()
        commit('GET_PROFILE_USER', response.data)
      } catch (e) {
        commit('ERROR_AUTH', e)
      } finally {
        commit('CHANGE_LOADING', false)
      }
    },
  },
  getters: {
    getLoading(state) {
      return state.loading
    },
    getToken(state) {
      return state.token
    },
    getProfile(state) {
      return state.profile
    },
  },
}

export default modulesAuth
