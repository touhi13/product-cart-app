import { ADD_TO_CART, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (id) => {
    console.log(id)
    return {
        type: ADD_TO_CART,
        payload: id
    };
};
export const increaseCartQuantity = (id) => {
    return {
        type: INCREASE_CART_QUANTITY,
        payload: id,
    };
}
export const decreaseCartQuantity = (id) => {
    return {
        type: DECREASE_CART_QUANTITY,
        payload: id,
    };
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
}