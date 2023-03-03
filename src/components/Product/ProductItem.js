import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/actions';
import { decreaseStock } from '../../redux/product/actions';

export default function ProductItem({ product }) {

    const dispatch = useDispatch();

    const { id, title, image, category, quantity, price } = product;

    const handleAddToCart = ()=>{
        dispatch(addToCart(id))
        dispatch(decreaseStock(id))
    }


    return (
        <>
            {/* <!-- product item --> */}
            <div className="lws-productCard">
                <img className="lws-productImage" src={image} alt="product" />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{title}</h4>
                    <p className="lws-productCategory">{category}</p>
                    <div className="flex items-center justify-between pb-2">
                        <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                        <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                    </div>
                    <button className="lws-btnAddToCart" onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
            {/* <!-- product item ends --> */}
        </>
    )
}
