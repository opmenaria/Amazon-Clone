import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './Reducer'

export default function Subtotal() {
    const [{ cart }] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} item): <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
