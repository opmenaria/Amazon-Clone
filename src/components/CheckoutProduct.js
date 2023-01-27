import { faker } from '@faker-js/faker'
import React from 'react'
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({ id, title, src, price, rating }) {
    const [{ cart }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE-FROM-CART',
            id: id
        })
    }
    return (
        <>
            <div className='check-product' id={id}>
                <div className="cart-item">
                    <input type='checkbox' ></input>
                    <img src={src} alt="cartimg" />
                    <div className="item-info">
                        <h4>{title}</h4>
                        <div className="product-rating">
                            {Array(rating)
                                .fill()
                                .map((_) => (
                                    <img key={faker.datatype.uuid()} src="https://iconarchive.com/download/i42772/oxygen-icons.org/oxygen/Actions-rating.ico" alt="star" />
                                ))}
                        </div>
                        <label>Add Qty: </label>
                        <select tabIndex={0} name='quantity'>
                            <option>0 (Delete)</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10+</option>
                        </select>
                        <br />

                        <button onClick={removeFromBasket}>Remove Item</button>
                    </div>
                    <div className="cart-product-price">
                        <h3>
                            $ {price}
                        </h3>
                    </div>
                </div>
            </div><hr />
        </>
    )
}

