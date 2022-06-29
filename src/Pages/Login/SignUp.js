import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Share/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser);

    let signInError;
    if (token) {
        navigate('/appoinment')
    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }
    if (gError || error || updateError) {
        signInError = <p className='text-red-500'><small>{gError?.message || error?.message}</small></p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })


    };
    return (
        <div className='flex h-screen justify-center items-center '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h2 class="text-center font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }

                                })}
                                placeholder="Enter Name"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
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
                            <input type="password"
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
                        <input className='btn btn-outline center w-full max-w-xs' type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already have an account ? <Link className='text-primary' to="/login">Please login</Link></small></p>
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

export default SignUp;