import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from , {replace : true});
    }
    const handleUserSingIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className=" margin-top">
        <div className="form-container mt-5 ">
            <div className="">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSingIn}>
                    <div className="input-group">
                        {/* <lebel htmlFor="name"> Email</lebel> */}
                        <input onBlur={handleEmailBlur} type="email" name="email" id='' placeholder="Enter your email" required></input>
                    </div>
                    <div className="input-group">
                        {/* <lebel htmlFor="name"> Password</lebel> */}
                        <input onBlur={handlePasswordBlur} type="password" name="password" id=''  placeholder="Enter your password" required></input>
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="from-submit" type='submit' value="Login" required></input>
                </form>
                <p>New to click-n-buy ?<Link className="form-link" to="/singUp"> Create Account</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;