import { createStore } from 'vuex'

import products from '../data/products'

export default createStore({
  	state: {
    	products: [],
    	basket: [],
  	},
	mutations: {
    	'SET_PRODUCTS' (state, products) {
    		state.products = products;
      	},
      	'ADD_PRODUCT' (state, product) {
        	let prodIndex = state.basket.findIndex(prod => prod.id == product.id);

			if(prodIndex != -1) {
				state.basket[prodIndex].qty++; 
			} else {
				state.basket.push(product);
			}
		},
		'DELETE_FROM_BASKET' (state, prodId) {
			let prodIndex = state.basket.findIndex(prod => prod.id == prodId.id);
			if(prodIndex != -1) {
				state.basket.splice(prodIndex, 1);
			}
		}
  	},
  	actions: {
    	initProducts: ({commit}) => {
      		commit('SET_PRODUCTS', products);
    	},
    	addProduct: ({commit}, product) => {
      		commit('ADD_PRODUCT', product)
		},
		deleteFromBasket: ({commit}, prodId) => {
			commit('DELETE_FROM_BASKET', prodId)
		},
	},
  	getters: {
    	products: state => {
        	return state.products
    	},
    	getProductsByCategory: state => cat => state.products[cat],
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
    },
    getBasket: state => {
      	return state.basket
    }
  },
  modules: {
  }
})
