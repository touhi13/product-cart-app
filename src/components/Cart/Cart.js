import React from 'react'
import Header from '../Header/Header'
import CartList from './CartList'
import Checkout from './Checkout'

export default function Cart() {
    return (
        <>
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <CartList/>
                    <Checkout/>
                </div>
            </div>
        </>
    )
}
