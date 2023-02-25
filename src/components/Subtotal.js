import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from "./Reducer"

export default function Subtotal() {
    const [{ cart },] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h2>
                            Subtotal ( {cart.length} items ) : <strong>{value}</strong>
                        </h2>
                        <h4 className='subtotal-gift'>
                            <input type='checkbox' /> This order contains a gift
                        </h4>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <Link to="/payment">
                <button className='subtotal-button'>Proceed to Checkout</button>
            </Link>
        </div>
    )
}
