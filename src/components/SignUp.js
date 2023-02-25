import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { auth } from '../firebase'

export default function SignUp() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = (event) => {
        event.preventDefault()
        // Firebase Sign In Functionality
        auth.createUserWithEmailAndPassword(email, password)
            // console.log(email);
            // console.log(password);
            .then((auth) => {
                if (auth) {
                    navigate('/')
                    // window.location.reload(false) //window.location.reload method
                }
            })
            .catch((err) => alert(err.message))
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="nav-logo-login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo"></img>
            </Link>
            <div className="login-setup">
                <h2><b>Sign Up</b></h2><br />
                <form className="login-form">
                    <h4>Email or mobile phone number </h4>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='@email' />
                    <div id='password'>
                        <h4>Password </h4>
                    </div><br />
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' /><br /><br />
                    <button onClick={register} type="submit"><h3>Create Account</h3> </button>
                </form>
                <h6>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h6><br />
                <select>
                    <option>Need help?</option>
                    <option>Other issues with Sign-In</option>
                </select>
            </div>
            <h3>Already on Amazon?</h3>
            <div className="to-signin"><Link to="/login">
                <button><h3>Log in to Amazon account</h3> </button>
            </Link>
            </div>
        </div>
    )
}
