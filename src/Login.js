import React, { useRef, useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://cdn.discordapp.com/attachments/869604147291357278/882379338484441118/163044595391699064.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form >
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                        className='login__signInButton'>Sign In</button>
                </form>

            </div>
            <p>
                By Signing-in you agree to SaintNickyD's Conditions of Use & Sale. Please see our privacy notice (its totally there), our cookies notice (only 396 pages long) and our Interest-Based Ads.
            </p>
            <Link to='/signup'>
                <button type='submit'
                    className='login__signUpButton'>Dont have an Account? Sign up!</button>
            </Link>
        </div>
    )
}

export default Login
