import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
import Product from './Product'
import { useSelector } from 'react-redux'

export default function WomFas() {
    const womn = useSelector(store => store.resWoms)

    return (
        <div className="home">
            <div className="navbar">
                <div className="catgItem">
                    <Link className='nav-tool-link' to="/allitem">
                        <h3>See-All</h3>
                    </Link>
                    <Link className='nav-tool-link' to="/jewelery">
                        <h3>Jewelery</h3>
                    </Link>
                    <Link className='nav-tool-link' to="/electronic">
                        <h3>Electronics</h3>
                    </Link>
                    <Link className='nav-tool-link' to="/mensfas">
                        <h3>Men's Clothing</h3>
                    </Link>
                    <Link className='nav-tool-link' to="/womfas">
                        <h3>Women's Clothing</h3>
                    </Link>
                </div>
            </div>
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h1>Jewelery </h1>

                    </div>
                    <div className="category">
                        {
                            womn &&
                            womn.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
