import { faker } from '@faker-js/faker'
import React from 'react'
import { useSelector } from 'react-redux'
import "../css/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

export default function Checkout() {
    const cart = useSelector((state) => state.cart);
    return (
        <>
            <div className='checkout-box'>
                <div className='checkout'>
                    <h1>Your Shopping Cart</h1> <hr />
                    {(cart.length === 0) ?
                        <h2>Your Shopping Cart Is Empty</h2>
                        : (
                            cart.map((item) =>
                                <CheckoutProduct
                                    id={item.id}
                                    key={faker.datatype.uuid()}
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
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
        </>
    )
}
