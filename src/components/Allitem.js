import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
import Product from './Product'
import { useSelector } from 'react-redux'

export default function AllItem() {
    const allApi = useSelector(store => store.apiAllData)

    return (
        <div className="home">
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h1>All Available Items</h1>

                    </div>
                    <div className="category">
                        {
                            allApi &&
                            allApi.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
