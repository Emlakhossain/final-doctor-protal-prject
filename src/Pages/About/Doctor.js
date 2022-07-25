import React from 'react';


const Doctor = ({ doctor }) => {
    const { img, name, job } = doctor;

    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img w-full src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-start ">
                    <h2 class="card-title">{name}</h2>
                    <p className='p-4'>{job}</p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officia pariatur nesciunt veritatis nostrum itaque facere, reiciendis sed corporis natus?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-sm">Red More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;