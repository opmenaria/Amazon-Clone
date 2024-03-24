import "../css/Home.css"
import Product from './Product'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export default function Home() {
    const apiData = useSelector(store => store.apiData)
    const jewelery = useSelector(store => store.resJewl)
    const electronic = useSelector(store => store.resElec)
    const mensFas = useSelector(store => store.resMens)
    const womFas = useSelector(store => store.resWoms)

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
                        <Link to="/allitem">
                            <h2>See More </h2>
                        </Link>
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
                        <Link to="/jewelery">
                            <h2>See More </h2>
                        </Link>

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
                        <Link to="/electronic">
                            <h2>See More </h2>
                        </Link>
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
                        <Link to="/mensfas">
                            <h2>See More </h2>
                        </Link>
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
                        <Link to="/womfas">
                            <h2>See More </h2>
                        </Link>
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
