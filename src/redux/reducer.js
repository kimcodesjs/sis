const initialState = {
    basket: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { id } = action.payload
            return {
                ...state,
                basket: [...state.basket, id]
            }
        }
        case 'REMOVE_FROM_CART': {
            const { id } = action.payload
            console.log(id)
            return {
                ...state,
                basket: [...state.basket, ]
            }
        }
    }
}

