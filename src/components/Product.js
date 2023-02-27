import { faker } from '@faker-js/faker';
import React from 'react'
import "../css/Product.css"
import { useStateValue } from './StateProvider'

export default function Product({ id, src, title, price, rating }) {
    const [, dispatch] = useStateValue();

    const handleAddTo = () => {
        localStorage.setItem(id, JSON.stringify({ id, src, title, price, rating }))
        // console.log(id);
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id, src, title, price, rating
            }
        })

    }
    return (
        <div className="product" id={id}>
            <div className="product-info">
                <h3>{title}</h3>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <img key={faker.datatype.uuid()} src="https://iconarchive.com/download/i42772/oxygen-icons.org/oxygen/Actions-rating.ico" alt="star" />
                        ))}
                </div>
                <div className="product-price">
                    <h3>$ </h3>
                    <h2> {price}</h2>
                </div>
            </div>
            <div className="product-img">
                <img src={src} alt="No img" /><br />
            </div>
            <div className="btn">
                <button onClick={handleAddTo}>Add to Cart</button>
            </div>
        </div>
    )
}
