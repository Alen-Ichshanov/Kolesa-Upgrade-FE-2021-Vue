import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
  },
  mutations: {
    updateUserData(state, data) {
      state.userData = data;
    },
    setNewScore(state, newScore) {
      state.userData.score -= newScore;
    },
  },
  actions: {
    updateUserData({ commit }) {
      axios.get('7ZW3y5GAuIge/data').then((response) => {
        commit('updateUserData', response.data);
      });
    },
    getClothesData() {
      return axios.get('-_RLsEGjof6i/data');
    },
    getAccessoriesData() {
      return axios.get('q3OPxRyEcPvP/data');
    },
  },
  modules: {},
});
