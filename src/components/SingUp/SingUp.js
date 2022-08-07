import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../PageTitle/PageTitle';


const SingUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    // if email verifacition
    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    

     
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    // if (user) {
    //     console.log('user',user);
      
    // }

    const handleCreateUser = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate("/shop");

    }

    return (
        <div className='margin-top'>
             <PageTitle title='Sing Up'></PageTitle>
            <div className="form-container mt-5">
                <div>
                    <h2 className="form-title">Sing Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            
                            <input onBlur={handleNameBlur} type="name" name="name" id='name' placeholder="Enter your name" required></input>
                        </div>
                        <div className="input-group">
                            <input onBlur={handleEmailBlur} type="email" name="email" id='email' placeholder="Enter your email" required></input>
                        </div>
                        <div className="input-group">
                            <input onBlur={handlePasswordBlur} type="password" name="password" id='password' placeholder="Password" required ></input>
                        </div>
                        <div className="input-group">
                            {/* <lebel htmlFor="name"> Confirm Password</lebel> */}
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id='confirm-password' placeholder="Confirm Password" required ></input>
                        </div>
                       
                        <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id='checkbox' required ></input>
                        <label className={agree ? 'ps-2 ' : 'ps-2 text-danger'}> Accept terms and conditions</label>

                        <p style={{ color: 'red' }}>{error}</p>

                        <input 
                        disabled={!agree}
                         className="from-submit" 
                         type='submit' 
                         value="Sing Up" required></input>
                        <br />
                    </form>
                    <p>Already have an account ?<Link className="form-link" to="/login"> Login</Link></p>
                   
                   
                    <SocialLogin ></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SingUp;