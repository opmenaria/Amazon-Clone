import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "../css/Product.css"

export default function Product({ jsonVal }) {
    const id = jsonVal.id
    const src = jsonVal.image
    const title = jsonVal.title
    const price = jsonVal.price
    const rating = jsonVal.rating.rate

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddTo = () => {
        localStorage.setItem("locState", JSON.stringify(cart))
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id, src, title, price, rating
            }
        })

    }
    const handleDetil = () => {
        console.log(id);
        dispatch({
            type: "ADD_TO_DETAIL",
            detail: { id }
        })
    }
    return (
        <div className="product" id={id}>
            <div className="product-info">
                <h3>{title}</h3>
                <div className="product-rating">
                    <h3>⭐{rating}</h3>
                </div>
                <div className="product-price">
                    <h3>$ </h3>
                    <h2> {price}</h2>
                </div>
            </div>
            <Link className='itemdet'>
                <div onClick={handleDetil} className="product-img">
                    <img src={src} alt="No img" /><br />
                </div>
            </Link>
            <div className="btn">
                <button onClick={handleAddTo}>Add to Cart</button>
            </div>
        </div>
    )
}
