import { nextId } from "../../utils/utils";
import { ADD_TO_CART, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";
import initialState from "./intialState";

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const itemCheck = state.find((cart) => cart.product_id === action.payload)
            if (itemCheck) {
                return state.map((cart) =>
                    cart.product_id === action.payload
                        ? { ...cart, quantity: cart.quantity + 1 }
                        : { ...cart }
                )
            } else {
                return [
                    ...state,
                    {
                        id: nextId(state),
                        product_id: action.payload,
                        quantity: 1
                    }
                ];
            }
        case INCREASE_CART_QUANTITY:
            return state.map((cart) =>
                cart.product_id === action.payload
                    ? { ...cart, quantity: cart.quantity + 1 }
                    : { ...cart }
            );

        case DECREASE_CART_QUANTITY:
            return state.map((cart) =>
                cart.product_id === action.payload
                    ? { ...cart, quantity: cart.quantity - 1 }
                    : { ...cart }
            );

        case REMOVE_FROM_CART:
            return state.filter((cart) => cart.product_id !== action.payload);

        default:
            return state;
    }
};

export default cartReducer;