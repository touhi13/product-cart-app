import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from '../../redux/cart/actions';
import { decreaseStock, increaseStock, returnFromCart } from '../../redux/product/actions';

export default function CartItem({ cartItem }) {
    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const cartProduct = products.find((product) => product.id === cartItem.product_id);

    const increaseCartQuantityHandler = () => {
        dispatch(increaseCartQuantity(cartItem.product_id));
        dispatch(decreaseStock(cartItem.product_id));
    }
    const decreaseCartQuantityHandler=()=>{
        dispatch(increaseStock(cartItem.product_id));
        dispatch(decreaseCartQuantity(cartItem.product_id));
 
    }
    const removeFromCartHandler =()=>{
        dispatch(removeFromCart(cartItem.product_id));
        dispatch(returnFromCart(cartItem.product_id,cartItem.quantity))
    }
    return (
        <>
            {/* <!-- Cart Item --> */}
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img className="lws-cartImage" src={cartProduct.image} alt="product" />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                        <h4 className="lws-cartName">{cartProduct.title}</h4>
                        <p className="lws-cartCategory">{cartProduct.category}</p>
                        <p>BDT <span className="lws-cartPrice">{cartProduct.price}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity" onClick={increaseCartQuantityHandler} >
                            <i className="text-lg fa-solid fa-plus"></i>
                        </button>
                        <span className="lws-cartQuantity">{cartItem.quantity}</span>
                        <button className="lws-decrementQuantity" onClick={decreaseCartQuantityHandler} >
                            <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{cartItem.quantity * cartProduct.price}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart" onClick={removeFromCartHandler}>
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            {/* <!-- Cart Items Ends --> */}
        </>
    )
}
