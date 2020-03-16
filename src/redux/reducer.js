

const initialState = {
    basket: [],
    cartVisibility: false
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let id  = action.id
            return Object.assign({}, state, {
                basket: [...state.basket, id],
                cartVisibility: state.cartVisibility
            }) 
        }
        case 'REMOVE_FROM_CART': {

            return {
                basket: state.basket.filter(id => id !== action.id),
                cartVisibility: state.cartVisibility
            }
        }
        case 'TOGGLE_VISIBILITY': {
            return Object.assign({}, state, {
                basket: state.basket,
                cartVisibility: !state.cartVisibility
            })
        }
        default:
            return state
    }
}



