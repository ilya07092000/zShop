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
    getProductsByCat: state => cat => {
		let found = '';
        findCat(state, cat);

    	function findCat(items, cat) {
          	for(let key in items) {
              	if(key == cat) {
                    found = items[key];
                    break;
              	}

              	if(!Array.isArray(items[key])) {
                  	return findCat(items[key], cat);
              	}
            }
        } 
        return found;
    }
  },
  modules: {
  }
})
