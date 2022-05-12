import React from 'react';

const DoctorService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl my-6">
            <div class="card-body">
                <h4 class="card-title text-primary text-center">{name}</h4>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary w-3/4 text-white">Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorService;