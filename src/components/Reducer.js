export const getCartTotal = (cart) => {
    const a = cart?.reduce((amount, item) => item.price + amount, 0);
    return a
}

export const initialState = {
    cart: [],
    detail: {},
    user: null,
    apiData: [],
    resJewl: [],
    resElec: [],
    resMens: [],
    resWoms: [],
    apiAllData: [],

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_API":
            return {
                ...state,
                apiData: action.apiData
            }
        case "FETCH_API_ALL":
            return {
                ...state,
                apiAllData: action.apiAllData
            }
        case "FETCH_JEWL":
            return {
                ...state,
                resJewl: action.resJewl
            }
        case "FETCH_ELEC":
            return {
                ...state,
                resElec: action.resElec
            }
        case "FETCH_MENS":
            return {
                ...state,
                resMens: action.resMens
            }
        case "FETCH_WOMS":
            return {
                ...state,
                resWoms: action.resWoms
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
        case "ADD_TO_DETAIL":
            return {
                detail: [action.id]
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