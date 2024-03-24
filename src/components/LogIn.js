import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { auth } from '../firebase'

export default function LogIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault();
        // Firebase Sign In Functionality
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch((e) => alert(e.message))
    }
    return (
        <div className='login '>
            <Link to="/">
                <img className="nav-logo-login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo"></img>
            </Link>
            <div className="login-setup">
                <h2><b>Log in</b></h2><br />

                <form className="login-form">
                    <h4>Email or mobile phone number </h4>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='@email' />
                    <div id='password'>
                        <h4>Password </h4>
                        <Link className='forgot-link'> <h5>Forgot Password </h5></Link>
                    </div><br />
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' /><br /><br />
                    <button onClick={login}><h3>Log in</h3> </button>
                    <label>
                        <input type="checkbox" />
                        <h5>Keep me signed in.</h5>
                    </label>
                </form>
                <h5 className='terms'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h5><br />
                <h4>
                    <select>
                        <option> Need help?</option>
                        <option> Forgot Password</option>
                        <option> Other issues with Sign-In</option>
                    </select>
                </h4>
            </div>
            <h3>New to Amazon?</h3>
            <div className="to-signin"><Link to="/signup">
                <button><h3>Create new Amazon account</h3> </button>
            </Link>
            </div>
        </div>
    )
}