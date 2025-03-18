import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignin , logOut} = useAuth();
    const navigate = useNavigate()
    const handleGoogleSignin = () => {
        googleSignin()
            .then(() => {
                logOut();
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignin} className="btn">
                Google <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;