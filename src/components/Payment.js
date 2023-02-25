import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import "../css/Payment.css"
import { getCartTotal } from './Reducer'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
export default function Payment() {
    const [{ cart, user },] = useStateValue()

    return (
        <div className="payment">
            <h1>Checkout {cart.length} items</h1>
            <div className="address">
                <h2>Delivery Address</h2>
                <div className="address-data">
                    <h2>{user ? user.email : "Sign in to order item"}</h2>
                    <h2>Address-190 W Main St.Fernley North Carolina Zip 89408 United States</h2>
                </div>
            </div>
            <div className='checkout-box'>
                <div className='review'>
                    <h2>
                        Review Items and Delivery
                    </h2>
                </div>
                <div className='checkout'>
                    {/* <h1>Your Shopping Cart</h1> <hr /> */}
                    {(cart.length === 0) ?
                        <h2>Your Shopping Cart Is Empty</h2>
                        : (
                            cart.map((item) =>
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
                    <div className="subtotal">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <h1>
                                        Payment Method
                                    </h1>
                                    <h2>
                                        Subtotal ( {cart.length} items ) : <strong>{value}</strong>
                                    </h2>
                                </>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={'text'}
                            thousandSeperator={true}
                            prefix={'$'}
                        />
                        <Link to="/payment">
                            <button onClick={() => alert("This service is temporary not available")} className='payment-button'>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
