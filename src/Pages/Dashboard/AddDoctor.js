import React from 'react';
import { useForm } from "react-hook-form";

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)


    };
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-center mt-5'>Add New Doctor</h2>

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
                        <span class="label-text">Specialty</span>
                    </label>
                    <input type="text"
                        {...register("Specialty", {

                            required: {
                                value: true,
                                message: 'Specialization is required'
                            }
                        })}
                        placeholder="Specialty"
                        class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                    </label>
                </div>
                <input className='btn btn-outline center w-full max-w-xs' type="submit" value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;