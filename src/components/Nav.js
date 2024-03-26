import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-bar">
            <div className="nav-itms">
                <Link className='nav-tool-link' to="/allitem">
                    <h3>All</h3>
                </Link>
                <Link className='nav-tool-link' to="/jewelery">
                    <h3>Jewelery</h3>
                </Link>
                <Link className='nav-tool-link' to="/electronic">
                    <h3>Electronics</h3>
                </Link>
                <Link className='nav-tool-link' to="/mensfas">
                    <h3>Men's</h3>
                </Link>
                <Link className='nav-tool-link' to="/womfas">
                    <h3>Women's</h3>
                </Link>
            </div>
        </div>
    )
}
