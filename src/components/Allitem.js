import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
import Product from './Product'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'

export default function AllItem() {
    const dispatch = useDispatch()
    const allApi = useSelector(store => store.apiAllData)
    const fetchApi = async () => {
        const apiAllData = await axios.get('https://fakestoreapi.com/products')
        if (apiAllData) {
            dispatch({
                type: "FETCH_API_ALL",
                apiAllData: apiAllData.data
            })
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="home">

            <div className="navbar">
                <div className="catgItem">
                    <Link className='catbtn' to="/allitem">
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
