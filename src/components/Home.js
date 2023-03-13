import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import Product from './Product'
import axios from "axios"

export default function Home() {
    const [apiData, setApiData] = useState()
    const [jewelery, setJewelery] = useState()
    const [electronic, setElectronic] = useState()
    const [mensFas, setMensFas] = useState()
    const [womFas, setWomFas] = useState()
    const fetchApi = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/?limit=8')
        setApiData(res.data)
    }

    const jeweleryData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/category/jewelery/?limit=8')
        setJewelery(res.data)
    }
    const electronicData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/category/electronics/?limit=4')
        setElectronic(res.data)
    }
    const mensFasData = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/category/men's clothing/?limit=4`)
        setMensFas(res.data)
    }
    const womFasData = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/category/women's clothing/?limit=4`)
        setWomFas(res.data)
    }

    useEffect(() => {
        fetchApi()
        jeweleryData()
        electronicData()
        mensFasData()
        womFasData()
    }, [])

    return (
        <div className="home">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/71AHUyOICAL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61njBDr9DgL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/71F75NHXTGL._SX3000_.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h1>Today's Deals </h1>
                        <h2>See More </h2>
                    </div>
                    <div className="category">
                        {
                            apiData &&
                            apiData.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>

                <div className="product-div">
                    <div className="category-name">
                        <h1>Jewelery </h1>
                        <h2>See More </h2>

                    </div>
                    <div className="category">
                        {
                            jewelery &&
                            jewelery.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h1>Electronics </h1>
                        <h2>See More </h2>

                    </div>
                    <div className="category">
                        {
                            electronic &&
                            electronic.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h1>Men's Fashion </h1>
                        <h2>See More </h2>

                    </div>
                    <div className="category">
                        {
                            mensFas &&
                            mensFas.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h1>Women's Fashion </h1>
                        <h2>See More </h2>

                    </div>
                    <div className="category">
                        {
                            womFas &&
                            womFas.map(product => <Product key={product.id} jsonVal={product} />)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
