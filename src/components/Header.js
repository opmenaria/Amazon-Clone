import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoLocation, GoSearch } from "react-icons/go"
import { ShoppingCart } from '@mui/icons-material'
import '../css/Header.css';
// import { useStateValue } from './StateProvider';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Header() {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchItem, setSearchItem] = useState([])
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    const handleLogin = () => {
        if (user) {
            auth.signOut()
        }
    }
    const handleSearch = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        setSearchItem(response.data);
        console.log(response)
        setLoading(false)
        uniqueData(searchTerm)
    }
    const uniqueData = (list) => {
        let res
        if (loading) {
            console.log("loading");
        } else {
            res =
                searchItem.filter(item => {
                    if (searchTerm === "") {
                        return item;
                    } else if (
                        item.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return item
                    }
                })
                    .map(valu => console.log(valu.title))
        }
        setSearchItem(res)
    }
    return (
<<<<<<< HEAD
        <>
            <nav className="header">
                <Link to="/">
                    <img className="nav-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"></img>
=======
        <nav className="header">
            <Link to="/Amazon-Clone">
                <img className="nav-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"></img>
            </Link>
            <Link className="nav-location">
                <GoLocation /> <h5> Select Location</h5>
            </Link>
            <div className="search" >
                <input className='search-input' placeholder='Search Amazon.in' type="text" />
                <GoSearch className='search-icon' />
            </div>
            <div className="nav-tools">
                <Link to={!user && "/login"} className='nav-tool-link'>
                    <div onClick={handleLogin} className='nav-tool-link-div'>
                        <h6 className='nav-acc-top'>Hello, {user ? `${user.email}` : "Guest"}</h6>
                        <h5 className='nav-acc-bottom hide'>{user ? "Sign Out" : "Sign In"}</h5>
                    </div>
>>>>>>> a37f57d265a94d2d7ba6ead296a8dcbd985f9572
                </Link>
                <Link className="nav-location">
                    <GoLocation /> <h3> Select Location</h3>
                </Link>
                <div className="search" >
                    <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className='search-input' placeholder='Search Amazon.in' type="text" />
                    <GoSearch onClick={() => handleSearch(searchTerm)} className='search-icon' />
                </div>
                <div className="nav-tools">
                    <Link to={!user && "/login"} className='nav-tool-link'>
                        <div onClick={handleLogin} className='nav-tool-link-div'>
                            <h5 className='nav-acc-top'> {user ? `${user.email}` : "Guest"}</h5>
                            <h4 className='nav-acc-bottom hide'>{user ? "Sign Out" : "Sign In"}</h4>
                        </div>
                    </Link>
                    <Link to="/orders" className='nav-tool-link'>
                        <div className='nav-tool-link-div'>
                            <h5 className='nav-acc-top'>Returns</h5>
                            <h4 className='nav-acc-bottom hide'>& Orders</h4>
                        </div></Link>
                    <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc&mrntrk=pcrid_610141119732_slid__pgrid_84577172328_pgeo_9301731_x__adext__ptid_kwd-303629226711&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA5mwWu5Q1rA_QWQBh3P7U_pju1HcRNqy7Vo_XAbb15AUKneApJLPq8aAqNsEALw_wcB" target="_blank" rel="noreferrer" className='nav-tool-link'>
                        <div className='nav-tool-link-div'>
                            <h5 className='nav-acc-top hide'>Your</h5>
                            <h4 className='nav-acc-bottom prime'>Prime</h4>
                        </div></a>
                    <Link to="/checkout" className='nav-tool-link'>
                        <div className="tool-cart">
                            <h3 className='cart-items'>{cart.length}</h3>
                            <ShoppingCart className='cart-icon' />
                        </div>
                    </Link>
                </div>

            </nav>
            <div className="navbar">
                <div className="catItem">
                    <h3>Jewelery</h3>
                    <h3>Electronics</h3>
                    <h3>Women's Clothing</h3>
                    <h3>Men's Clothing</h3>
                </div>
            </div>
        </>
    )
}
