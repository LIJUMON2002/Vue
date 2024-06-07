import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    AUTH_SUCCESS(state, token) {
      state.token = token;
    },
    AUTH_LOGOUT(state) {
      state.token = '';
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', user);
        const token = response.data.token;
        console.log(response.data)
        console.log(token);
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('AUTH_SUCCESS', token); 
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
    async register(_, user) { 
      try {
        await axios.post('http://localhost:8000/api/register/', user);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
    logout({ commit }) {
      commit('AUTH_LOGOUT');
      localStorage.removeItem('token');
      console.log(axios.defaults.headers.common['Authorization']);
      delete axios.defaults.headers.common['Authorization'];
    },
    async getUser({ commit }) {
      try {
        const response = await axios.get('http://localhost:8000/api/user/');
        commit('SET_USER', response.data);
      } catch (error) {
        console.error('Get user error:', error);
      }
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    user: state => state.user
  }
});

export default store;
