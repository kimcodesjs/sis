const initial = {
    collection: '',
    item: {}
}

export const viewReducer = (state = initial, action) => {
    switch (action.type) {
        case 'UPDATE_COLLECTION': {
            let collection = action.collection
            return Object.assign({}, state, {
                collection,
                item: state.item
            }) 
        }
        case 'UPDATE_ACTIVE_ITEM': {
            let item = action.item
            return Object.assign({}, state, {
                collection: state.collection,
                item
            })
        }
        default:
            return state
    }
}