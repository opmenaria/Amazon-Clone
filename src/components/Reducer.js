export const initialState = {
    cart: [],
    user: [
        { email: 'menariaOm899@gmail.com' }
    ]
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD-TO-CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case 'REMOVE-FROM-CART':
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