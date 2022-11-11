import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {
    loadProducts(state, products){
            state.products = products;
    },
    addProd(state, product){
           state.productsInBag.push(product);
           console.log(product)
           console.log(state.productsInBag)
    },
    removeFromBag(state, productId){
      let updatedBag = state.productsInBag.filter(item => item.id != productId);
       state.productsInBag = updatedBag 
    }


   
    
  },
  actions: {
    loadProducts( {commit} ){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response=>{
        commit('loadProducts', response.data)
      })

    },
    
    addProd({commit}, product){
      commit('addProd', product)
    },
    
    removeFromBag({commit}, productId){
    if(confirm('tu veux supprimer?')){
      commit('removeFromBag', productId)
       }
    },

    //action async d'appel à l'api dans app pour un acces global, 
    //commit = appel d'une mutation ([1]=nom de la mutation, [2]parametre si ya )


    // appler une action 'dispatch'
    // appler une mutation 'commit' 


    

  },
  modules: {
  }
})
