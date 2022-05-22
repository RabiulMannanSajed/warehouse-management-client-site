import React from 'react';
import './SocialLogin.css'
import googleLogo from '../../../Image/google-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation();
    // part for redirect
    let from = location.state?.from?.pathname || "/";


    let errorText;
    if (errorGoogle) {
        errorText = <div>
            <p className='text-danger'>Error: {errorGoogle.message}</p>
        </div>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='socialLogin-div'>
                <div className='hr-line' ></div>
                <p className='mt-2 px-2'>OR</p>
                <div className='hr-line' ></div>
            </div>
            {errorText}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '25px' }} src={googleLogo} alt="" />
                <span className='px-2' > Google Sign In</span>  </button>
        </div>
    );
};

export default SocialLogin;