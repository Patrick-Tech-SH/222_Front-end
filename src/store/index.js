import {
  createStore
} from "vuex";
import axios from "axios";
// import { get } from "core-js/core/dict";

export default createStore({
  state: {
    items: [],
    token: "",
    userId: "",
    itemById: {
      keyId: "",
      gameName: "",
      gameDetail: "",
      price: 0,
      releaseDate: "",
      images: null,
      gamedeveloper_devId: null,
      Platform_pId: null,
      user_userId: null,
      gamedeveloper: {
        devId: null,
        devName: "a"
      },
      platform: {
        pId: null,
        pName: ""
      },
      keycategory: [],
      cart: []
    },
    itemToEdit:{}

  },

  mutations: {
    GET_PRODUCTS(state, payload) {
      state.items = payload
    },
    GET_PRODUCT_BY_ID(state, payload) {
      state.itemById = payload
    },
    GET_PRODUCT_BY_ID_TO_EDIT(state, payload){
      state.itemToEdit = payload
    },
    SET_USERID(state, payload){
      state.userId = payload
    },
    SET_TOKEN(state, payload){
      state.token = payload
    }

  },

  actions: {
    async loadProducts({
      commit
    }) {
      try {
        const {
          data
        } = await axios.get('http://localhost:3000/keygames/')
        if (data) {
          console.log(data);
          commit("GET_PRODUCTS", data)
        }
      } catch (error) {
        console.error(error)
      }
    },

    async getItemById ({ commit }, id) {
        const response = await axios.get('http://localhost:3000/keygames/getbyid/' + id)
        console.log(response.data.data[0]);
        commit("GET_PRODUCT_BY_ID", response.data.data[0])
    },

    async getItemToEdit ({ commit }, id) {
        const response = await axios.get('http://localhost:3000/keygames/getbyid/' + id)
        console.log(response.data.data[0]);
        commit("GET_PRODUCT_BY_ID_TO_EDIT", response.data.data[0])
    },

    getLocalStorage ({commit}) {
        commit("SET_USERID" , localStorage.getItem("userId"))
        commit("SET_TOKEN" , localStorage.getItem("token"))
    }

  },

  modules: {},

  getters: {
    items: (state) => state.items,
    token: (state) => !!state.token,
    itemById: (state) => state.itemById,
    itemToEdit: (state) => state.itemToEdit
  }
});