import { ADD_PRODUCT, DECREASE_STOCK, INCREASE_STOCK, RETURN_FROM_CART } from "./actionTypes";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};
export const increaseStock = (id) => {
    return {
        type: INCREASE_STOCK,
        payload: id
    };
};
export const decreaseStock = (id) => {
    return {
        type: DECREASE_STOCK,
        payload: id
    };
};
export const returnFromCart = (id, quantity) => {
    // console.log(id, quantity)
    return {
        type: RETURN_FROM_CART,
        payload: { id, quantity }
    };
}