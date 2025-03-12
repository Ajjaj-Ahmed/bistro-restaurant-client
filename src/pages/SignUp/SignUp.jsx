import React from 'react';
import { useForm } from 'react-hook-form';

// export default function App() {
    

const SignUp = () => {
    const { register, handleSubmit,formState: { errors }} = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }

   

    return (
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
                                    <input type="text" {...register("name",{ required: true })} className="input" name='name' placeholder="Your Name" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}

                                {/* email field */}
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" {...register("email", { required: true })} className="input" name='email' placeholder="Email" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}

                                {/* password filed */}
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" {...register("password", { required: true, minLength:6, maxLength:12 })} name='password' className="input" placeholder="Password" />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                   
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