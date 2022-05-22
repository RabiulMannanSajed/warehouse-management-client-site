import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false);
    // form react firebase hook for registation
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // updating profile
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    // part for redirect
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/";


    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    // if (user) {

    // }
    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>place register</h2>
            <div className='register-form-container'>
                <form onSubmit={handleRegister}>
                    <label>Your Name</label>
                    <input type="text" name="name" id="" placeholder='Your Name' />
                    <br />
                    <label>Email Address</label>
                    <input type="email" name='email' placeholder='Email address' required />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                    <br />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label htmlFor="terms">Accept Spice Gudam Terms and Conditions</label> */}
                    <label className={`ps-2 m-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms"> Accept Genius Car Terms and Condition</label>
                    <input
                        disabled={!agree}
                        className='rounded-pill w-50 mx-auto btn btn-success mt-2'
                        type="submit"
                        value="Register" />

                </form>
            </div>

            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;