import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingUp = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    const [error,setError]= useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop')
    }
    
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !==confirmPassword){
            setError('Password not match');
            return;
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
        <div>
        <h2 className="form-title">Sing Up</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <lebel htmlFor="name"> Email</lebel>
             <input onBlur={handleEmailBlur} type="email" name="email" id='' required></input>
         </div>
         <div className="input-group">
             <lebel htmlFor="name"> Password</lebel>
             <input onBlur={handlePasswordBlur} type="password" name="password" id='' required ></input>
         </div>
         <div className="input-group">
             <lebel htmlFor="name"> Confirm Password</lebel>
             <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id='' required ></input>
         </div>
         <p style={{color: 'red'}}>{error}</p>
       <input className="from-submit" type='submit' value="Sing Up" required></input>
         </form>
         <p>Already have an account ?<Link className="form-link" to="/login"> Login</Link></p>
        </div>
     </div>
    );
};

export default SingUp;