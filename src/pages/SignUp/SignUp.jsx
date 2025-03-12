import React from 'react';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold py-4">Create User</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                            <form className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" name='name' placeholder="Your Name" />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                   
                                    <div className='flex justify-center'>
                                        <input  className="btn btn-outline mt-4" type="submit" value="SignUp" />
                                    </div>
                                </fieldset>
                            </form>
                            
                        </div>
                    </div>
                </div>
    );
};

export default SignUp;