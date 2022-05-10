import React from 'react';
import InfoCard from '../InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 gap-4grid lg:grid-cols-3 gap-5 mx-5 pb-12 text-white'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" text="Our Opening Time 09:00 To Start" cardTitle="Opening hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-accent" text="Address: Gulshan-2, house#4/A, Dhaka-1212" cardTitle="Visit Our Location" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" text="+801740284295" cardTitle="Contact Us Now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;