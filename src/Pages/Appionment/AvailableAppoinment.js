import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import AppoinmentModal from './AppoinmentModal';
import DoctorService from './DoctorService';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    // const formattedDate = format(date, 'pp');
    // const { data: services, isLoading } = useQuery(['available'], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl font-bold text-center text-primary'>Available Appointment on - {format(date, 'PP')} </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24'>
                {
                    services?.map(service => <DoctorService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></DoctorService>)
                }
            </div>
            {treatment && <AppoinmentModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></AppoinmentModal>}
        </div>
    );
};

export default AvailableAppoinment;