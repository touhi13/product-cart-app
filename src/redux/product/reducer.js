import { nextId } from "../../utils/utils";
import { ADD_PRODUCT, DECREASE_STOCK, INCREASE_STOCK, RETURN_FROM_CART } from "./actionTypes";
import initialState from "./intialState";

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextId(state),
                    ...action.payload
                }
            ];

        case INCREASE_STOCK:
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : { ...product }
            );

        case DECREASE_STOCK:
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1 }
                    : { ...product }
            );

        case RETURN_FROM_CART:
            return state.map((product) =>
                product.id === action.payload.id
                    ? { ...product, quantity: product.quantity + action.payload.quantity }
                    : { ...product }
            );

        default:
            return state;
    }
};

export default productReducer;
