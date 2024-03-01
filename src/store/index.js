import { createStore } from 'vuex'

export default createStore({
    state: {
        cart: []
    },
    mutations: {
        addProduct(state, newProduct) {
                const repeatedElement = state.cart.find(( element ) => newProduct.id === element.id)
                if(repeatedElement) {
                    if(repeatedElement.quantity >= 1){
                        repeatedElement.quantity ++
                    }
                    for (const i in state.cart) {
                        const product = state.cart[i];
                        if (product.id === repeatedElement.id) {
                            return;
                        }
                    }
                } else {
                    newProduct.quantity = 1
                    state.cart.push(newProduct);
                }
        },
        incrementQuantity(state, selectedData){
            for (const i in state.cart) {
                const product = state.cart[i];
                if (product.id === selectedData.id) {
                    if (product.quantity < 99) {
                        product.quantity ++
                    }
                    return;
                }
            }
        },
        decrementQuantity(state, selectedData){
            for (const i in state.cart) {
                const product = state.cart[i];
                if (product.id === selectedData.id) {
                    if (product.quantity > 1) {
                        product.quantity --
                    }
                    return;
                }
            }
        },
        deleteElement(state, elementToDelete){
            state.cart = state.cart.filter(element  => element !== elementToDelete)
        }
    }

})