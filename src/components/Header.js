import React from 'react'
import { Link } from 'react-router-dom'
import { GoLocation, GoSearch } from "react-icons/go"
import { ShoppingCart } from '@mui/icons-material'
import '../css/Header.css';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

export default function Header() {
    const [{ cart, user }] = useStateValue()

    const handleLogin = () => {
        if (user) {
            auth.signOut()
            // window.location.reload(false) //window.location.reload method
        }
    }
    return (
        <nav className="header">
            <Link to="/">
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
                </Link>
                <Link to="/orders" className='nav-tool-link'>
                    <div className='nav-tool-link-div'>
                        <h6 className='nav-acc-top'>Returns</h6>
                        <h5 className='nav-acc-bottom hide'>& Orders</h5>
                    </div></Link>
                <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc&mrntrk=pcrid_610141119732_slid__pgrid_84577172328_pgeo_9301731_x__adext__ptid_kwd-303629226711&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA5mwWu5Q1rA_QWQBh3P7U_pju1HcRNqy7Vo_XAbb15AUKneApJLPq8aAqNsEALw_wcB" target="_blank" rel="noreferrer" className='nav-tool-link'>
                    <div className='nav-tool-link-div'>
                        <h6 className='nav-acc-top hide'>Your</h6>
                        <h5 className='nav-acc-bottom prime'>Prime</h5>
                    </div></a>
                <Link to="/checkout" className='nav-tool-link'>
                    <div className="tool-cart">
                        <h5 className='cart-items'>{cart.length}</h5>
                        <ShoppingCart className='cart-icon' />
                    </div>
                </Link>
            </div>
        </nav>
    )
}
