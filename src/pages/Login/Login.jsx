import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchRef = useRef(null);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
   
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold py-4">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <label className="fieldset-label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchRef} name='captcha' className="input mt-2" placeholder="type the captcha" />

                                <div className='text-center mt-2'>
                                    <button onClick={handleValidateCaptcha} className="btn btn-xs">Validate</button>
                                </div>

                            </div>

                            <div className='flex justify-center'>
                                <input disabled={disabled} className="btn btn-outline mt-4" type="submit" value="Login" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;