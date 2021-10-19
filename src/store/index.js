import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    items:[]
  },

  mutations: {
    GET_PRODUCTS (state, payload) {
      state.items = payload
    }
  },

  actions: {
    async loadProducts ({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:3000/keygames/')
        if (data) {
          console.log(data);
          commit("GET_PRODUCTS", data)
        }
      } catch (error) {
        console.error(error)
      }
    },
  },

  modules: {},

  getters:{
    items: (state) => state.items
  }
});
