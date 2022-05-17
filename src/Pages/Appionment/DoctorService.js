import React from 'react';

const DoctorService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl my-6">
            <div class="card-body text-center">
                <h4 class="text-xl font-bold text-primary text-center">{name}</h4>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">

                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary w-3/4 text-white ">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default DoctorService;