
export const initialState = {
    cart: [],
    user: null,
    apiData: null
}

export const getCartTotal = (cart) => {
    const a = cart?.reduce((amount, item) => item.price + amount, 0);
    return a
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_API":
            return {
                ...state,
                apiData: action.apiData
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case "REMOVE_FROM_CART":
            let newCart = [...state.cart]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(`cant remove item: ${action.id}`);
            }
            return { ...state, cart: newCart };
        default:
            return state
    }
}
export default reducer;