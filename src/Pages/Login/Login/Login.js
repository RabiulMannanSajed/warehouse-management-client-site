import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    // part for redirect
    let from = location.state?.from?.pathname || "/";

    let errorText;
    // form react firebase hook for login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    // resetPassword part from firebase hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    // showing error massage in ui
    if (error) {
        errorText = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    // resetPassword 
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-center mt-2'>Please login</h2>
            <div className='login-form p-3'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='rounded-pill w-50 mx-auto d-block' variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            {errorText}
            <p>New to Spices Gudam <Link to="/register" className='text-primary text-decoration-none pe-auto' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password?<button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;