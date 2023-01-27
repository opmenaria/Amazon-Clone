import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { auth } from '../firebase'

export default function LogIn() {
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('./') //will redirect to the home page
            })
            .catch((e) => alert(e.message))
    }
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

            })
            .catch((e) => alert(e.message))
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="nav-logo-login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo"></img>
            </Link>
            <div className="login-setup">
                <h2><b>Sign in</b></h2><br />

                <form className="login-form">
                    <h4>Email or mobile phone number </h4>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='@email / mobile' />
                    <div id='password'>
                        <h4>Password </h4>
                        <Link className='forgot-link'> <h5>Forgot Password </h5></Link>
                    </div><br />
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' /><br /><br />
                    <button onClick={login}><h3>Sign in</h3> </button>
                    <label>
                        <input type="checkbox" />
                        <h5>Keep me signed in.</h5>
                    </label>
                </form>
                <h6>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h6><br />
                <select>
                    <option>Need help?</option>
                    <option>Forgot Password</option>
                    <option>Other issues with Sign-In</option>
                </select>
            </div>
            <h3>New to Amazon?</h3>
            <div className="to-signin">
                <button onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}