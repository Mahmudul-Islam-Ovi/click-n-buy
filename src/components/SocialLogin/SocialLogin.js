import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from , {replace : true});
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className="mt-2 px-2">or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'> </div>
            </div>
            <div  className="">
            <Button onClick={() => signInWithGoogle()}  variant="success" className="w-50 d-block mx-auto">Sing in with Google</Button>
            <Button variant="success" className="w-50 d-block mx-auto my-3" >Sing in with Facebook</Button>
            </div>
                 
        </div>
    );
};

export default SocialLogin;