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
    }
}

export const actions = {
    async register({ commit }, userCreds) {
      // commit("");
      try{
        let res = await AuthService.register(userCreds);
        commit('SET_USER_DATA', res.data);
      }
      catch(e) {
        console.log(`Something went wrong ${e}`);
      }      
    },
    async login({ commit }, userCreds) {
      try {
        let res = await AuthService.login(userCreds);
        // Commit mutation to MUTATE the STATE.
        commit('SET_USER_DATA', res.data);
      } catch (e) {
        console.log(`Something went wrong ${e}`);
      }
    },
    isLoggedIn({ getters }) {
        return getters.loggedIn;
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