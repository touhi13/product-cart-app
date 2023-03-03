import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function CartList() {

    const cart = useSelector((state) => state.cart);

    return (
        <div className="space-y-6">
            {
                cart.length > 0
                    ? cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
                    : <p>No Product Found In The Cart!</p>
            }
        </div>
    )
}
