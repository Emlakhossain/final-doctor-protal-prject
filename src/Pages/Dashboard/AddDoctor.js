import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Pages/Share/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [services, setServices, isLoading] = useState([]);
    const imageStorageKey = 'aa25aed6fac450e4f45b5a831685aae6';
    useEffect(() => {
        fetch('https://fathomless-dusk-01494.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    fetch('https://fathomless-dusk-01494.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Successfully added a Doctor')
                                reset()
                            }
                            else {
                                toast.error('You do not add doctor')
                            }
                            console.log('doctor', inserted)
                        })
                }
                console.log('Success:', result);
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-center mt-5'>Add New Doctor</h2>

            <form className='items-center ml-20' onSubmit={handleSubmit(onSubmit)}>
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
                    <select {...register("specialty")} class="select w-full max-w-xs input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>


                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", {

                            required: {
                                value: true,
                                message: 'Image is required'
                            }

                        })}
                        placeholder="Enter Name"
                        class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <input className='btn btn-outline center w-full max-w-xs' type="submit" value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;