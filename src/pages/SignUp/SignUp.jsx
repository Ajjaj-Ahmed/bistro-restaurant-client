
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

// export default function App() {


const SignUp = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        reset();
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold py-4">Create User</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                {/* name filed */}
                                <label className="fieldset-label">Name</label>
                                <input type="text" {...register("name", { required: true })} className="input" name='name' placeholder="Your Name" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}

                                {/* email field */}
                                <label className="fieldset-label">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input" name='email' placeholder="Email" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}

                                {/* password filed */}
                                <label className="fieldset-label">Password</label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                    minLength: 6,
                                    maxLength: 12
                                })} name='password' className="input" placeholder="Password" />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 digits</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password must be less 12 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one upper, lower and a special character </span>}

                                <div className='flex justify-center'>
                                    <input className="btn btn-outline mt-4" type="submit" value="Sign Up" />
                                </div>
                            </fieldset>
                        </form>
                        <p className='text-center pb-2'><small>Already have an Account ! <Link to={'/login'}>Login</Link></small></p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;