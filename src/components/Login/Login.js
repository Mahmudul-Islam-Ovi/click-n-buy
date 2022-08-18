import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
import logo from '../../images/Click-N-Buy.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    const resetPassword = async event => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSingIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className=" margin-top ">
               
              <PageTitle title='Login'></PageTitle>
            <div className="form-container mt-5 ">
                <div>
               <div className="text-center">
               <img className="w-50 text-center" src={logo} alt="" />
               </div>
                    <h2 className="form-title">Login</h2>
                    <form onSubmit={handleUserSingIn}>
                        <div className="input-group">
                            <input onBlur={handleEmailBlur} type="email" name="email" id='email' placeholder="Enter your email" required></input>
                        </div>
                        <div className="input-group">
                            <input onBlur={handlePasswordBlur} type="password" name="password" id='password' placeholder="Enter your password" required></input>
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className="from-submit" type='submit' value="Login" required></input>
                    </form>
                    <p>New to click-n-buy ?<Link className="form-link" to="/singUp"> Create Account</Link></p>
                    <p>Forget Password ?<button onClick={() => resetPassword()} className="btn btn-link text-primary pe-auto text-decoration-none"> Reset Password</button></p>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;