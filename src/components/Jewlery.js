import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
import Product from './Product'
import { useSelector } from 'react-redux'

export default function Jewelery() {
    const jewelery = useSelector(store => store.resJewl)

    return (
        <div className="home">
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h1>Jewelery </h1>

                    </div>
                    <div className="category">
                        {
                            jewelery &&
                            jewelery.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
