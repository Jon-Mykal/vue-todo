import AuthService from '@/services/AuthService.js'
import axios from 'axios';
import { mapGetters } from 'vuex';

export const namespaced = true;
export const state = {
    user: null
}

export const mutations = {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.accessToken
      }`
    },
    CLEAR_USER_DATA() {
      location.reload();
    }
}

export const actions = {
    async register({ commit }, userCreds) {
      let res = await AuthService.register(userCreds);
      commit('SET_USER_DATA', res.data);     
    },
    async login({ commit }, userCreds) {
      // Intentionally not wrapped in try/catch.
      // Handled in component
      let res = await AuthService.login(userCreds);
      // Commit mutation to MUTATE the STATE.
      commit('SET_USER_DATA', res.data);
    },
    isLoggedIn({ getters }) {
        return getters.loggedIn;
    },
    logout({commit}){
        localStorage.removeItem("user");
        commit("CLEAR_USER_DATA");
    }
}

export const getters = {
    loggedIn (state) {
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'));
      }
      return !!state.user;
    },
    loggedInUser(state) {
      return state.user;
    }
}