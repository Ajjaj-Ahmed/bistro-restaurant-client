import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {
    const { googleSignin , logOut} = useAuth();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate()
    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const userInfo = {
                        email: result.user?.email,
                        name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data); 
                    navigate('/')
                })
                
                
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