import { ADD_TO_CART, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY } from "../cart/actionTypes";
import { DECREASE_STOCK, INCREASE_STOCK } from "../product/actionTypes";

const checkStock = (store) => (next) => (action) => {

    if (action.type === ADD_TO_CART || action.type === INCREASE_CART_QUANTITY || action.type === DECREASE_STOCK) {
        const { product } = store.getState();
        const cartProduct = product.find((item) => item.id === action.payload);
        return cartProduct.quantity > 0 && next(action);
    } else if ( action.type === INCREASE_STOCK ||action.type === DECREASE_CART_QUANTITY) {
        const { cart } = store.getState();
        const cartProduct = cart.find((item) => item.product_id === action.payload);
        return cartProduct.quantity > 1 && next(action);

    } else {
        return next(action);
    }
};

export default checkStock;