import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoLocation, GoSearch } from "react-icons/go"
import { ShoppingCart } from '@mui/icons-material'
import '../css/Header.css';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Dropdown, Space } from 'antd';
import { DownOutlined, MenuOutlined, SmileOutlined } from '@ant-design/icons';
import Nav from './Nav';
export default function Header() {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchItem, setSearchItem] = useState([])
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const allApi = useSelector(store => store.apiAllData)

    const handleLogin = () => {
        if (user) {
            const sureLogout = window.confirm('Do you really want to signout?');
            if (sureLogout) {
                auth.signOut();
            }
        }
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const response = allApi.filter(data => {
            return data.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchItem(response);
        setLoading(false)
    }
    const onSearchSelect = (ev) => {
        console.log("evvvv", ev.target);
        // window.location.href = `/product/${ev}`;
    }
    const items = [
        {
            key: '1',
            label: (<Link className='nav-tool-link' to="/allitem">See-All</Link>),
        },
        {
            key: '2',
            label: (<Link className='nav-tool-link' to="/jewelery">Jewelery</Link>),
            // icon: <SmileOutlined />,
            // disabled: true,
        },
        {
            key: '3',
            label: (<Link className='nav-tool-link' to="/electronic">Electronics</Link>),
        },
        {
            key: '4',
            label: (<Link className='nav-tool-link' to="/mensfas">Men's Clothing</Link>),
        },
        {
            key: '5',
            label: (<Link className='nav-tool-link' to="/womfas">Women's Clothing</Link>),
        },
        {
            key: '6',
            label: (<hr />)
        },
        {
            key: '7',
            label: (
                <Link to={!user?.email && "/login"} className='nav-tool-link'>
                    <div onClick={handleLogin} >
                        {user ? <><h4> {user.email}</h4><p>Sign Out</p></> : "Sign In"}
                    </div></Link>)
        },
        {
            key: '8',
            label: (<Link to="/orders" className='nav-tool-link'>Returns & Orders</Link>)
        },
        {
            key: '9',
            label: (<a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc&mrntrk=pcrid_610141119732_slid__pgrid_84577172328_pgeo_9301731_x__adext__ptid_kwd-303629226711&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA5mwWu5Q1rA_QWQBh3P7U_pju1HcRNqy7Vo_XAbb15AUKneApJLPq8aAqNsEALw_wcB" target="_blank" rel="noreferrer" className='nav-tool-link'>
                <h4 >Prime</h4>
            </a>)
        },
    ];
    return (
        <>
            <nav style={{ height: '5em' }} className="header navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid" style={{ height: '6em', width: '100%', background: 'rgb(26, 26, 26)' }}>
                    <Link to="/">
                        <img className="nav-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"></img>
                    </Link>
                    <Dropdown className='navbar-toggler' placement='bottomRight' trigger={'click'} menu={{ items }}>
                        <a href='/' onClick={(e) => e.preventDefault()}>
                            <Space>
                                <MenuOutlined style={{ fontSize: '23px', color: 'white' }} />
                            </Space>
                        </a>
                    </Dropdown>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} class="collapse navbar-collapse" id="navbarSupportedContent">
                        <h3 style={{ color: 'gray' }} className='locat'><GoLocation size={16} /> Location</h3>
                        <div className="search dropdown-toggle" >
                            <div className='search-top'>
                                <input onChange={handleSearch} value={searchTerm} className='search-input' placeholder='Search Items' type="search" />
                                <GoSearch onClick={() => handleSearch(searchTerm)} className='search-icon' />
                            </div>
                            {searchTerm.length > 0 &&
                                <div className='search-dropdown'>
                                    {searchItem.map((item, index) => {
                                        return <h3 onClick={onSearchSelect} className='srchItm' >{item.title}</h3>
                                    })}
                                </div>
                            }
                        </div>
                        <div className="navtools">
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
                    </div>
                </div>
            </nav>
            <Nav />
        </>
    )
}
