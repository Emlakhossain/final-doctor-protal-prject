import { format, setDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DoctorService from './DoctorService';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl font-bold text-center text-primary'>Available Appointment on - {format(date, 'PP')} </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24'>
                {
                    services.map(service => <DoctorService
                        key={service._id}
                        service={service}
                    ></DoctorService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;