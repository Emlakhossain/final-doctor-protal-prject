import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Share/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;
    if (gUser || user) {
        console.log(user)
        navigate('/')
    }
    if (gLoading || loading) {
        return <Loading></Loading>
    }
    if (gError || error) {
        signInError = <p className='text-red-500'><small>{gError?.message || error?.message}</small></p>
    }
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        navigate('/')
    };
    return (
        <div className='flex h-screen justify-center items-center '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h2 class="text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'error message'
                                    }
                                })}
                                placeholder="Enter Your Email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At least six character'
                                    }
                                })}
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}
                        <input className='btn btn-outline center w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline center '
                    >Continue With Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;