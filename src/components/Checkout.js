import React from 'react'
import "../css/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
// import { faker } from '@faker-js/faker'

export default function Checkout() {
    const [{ cart }] = useStateValue()
    return (
        <div className='checkout-box'>
            <div className='checkout'>
                <h1>Shopping Cart</h1> <hr />
                {(cart.length === 0) ?
                    <h2>Your Shopping Cart Is Empty</h2>
                    : (
                        cart.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                src={item.src}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                    )}
            </div>
            <div className="subtotal-main">
                <Subtotal />
            </div>
        </div>
    )
}
