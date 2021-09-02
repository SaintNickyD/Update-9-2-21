import React, { useRef, useState } from 'react';
import './SignUp.css'

import { Link, useHistory } from "react-router-dom"

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
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
                    <input type="email" />

                    <h5>Password</h5>
                    <input type='password' />

                    <h5>Confirm Password</h5>
                    <input type='password' />

                    <h5>Delivery Address</h5>
                    <input type='text' />

                    <button type='submit'
                        className='SignUp__createAccountButton'>Create Account</button>
                </form>

            </div>
            <Link to="/login">
                <button type='submit' onClick={register}
                    className='SignUp__signInButton'>Already have an Account?Sign In</button>
            </Link>
        </div>
    )
}

export default SignUp