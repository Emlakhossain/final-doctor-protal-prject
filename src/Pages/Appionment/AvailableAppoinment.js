import { format, setDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentModal from './AppoinmentModal';
import DoctorService from './DoctorService';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [tretment, setTretment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/service')
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
                        setTretment={setTretment}
                    ></DoctorService>)
                }
            </div>
            {tretment && <AppoinmentModal
                tretment={tretment}
                date={date}
                setTretment={setTretment}
            ></AppoinmentModal>}
        </div>
    );
};

export default AvailableAppoinment;