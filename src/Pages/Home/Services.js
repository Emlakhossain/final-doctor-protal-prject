import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            "_id": 1,
            "name": "fluoride Tretment",
            "img": fluoride
        },
        {
            "_id": 2,
            "name": "Cavity care",
            "img": Cavity
        },
        {
            "_id": 3,
            "name": "Teeth Wheating",
            "img": Whitening
        }
    ]
    return (
        <div>
            <h4 className='text-center text-primary font-bold mt-12'>OUR SERVICES</h4>
            <h2 className='text-center'>Services We Provide</h2>
            <div className='grid grid-cols-1 gap-4grid lg:grid-cols-3 gap-5 mx-5 pb-12 mb-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;