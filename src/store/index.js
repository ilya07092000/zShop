import { createStore } from 'vuex'

import products from '../data/products'

export default createStore({
  state: {
    products: []
  },
  mutations: {
      'SET_PRODUCTS' (state, products) {
        state.products = products;
      }
  },
  actions: {
    initProducts: ({commit}) => {
      commit('SET_PRODUCTS', products);
    }
  },
  getters: {
    products: state => {
      return state.products
    },
    currentCategory: state => category => state.products[category]
  },
  modules: {
  }
})
