import React from 'react';
import doctor from '../../assets/images/doctor.png';
import backgroundColor from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppionment = () => {
    return (
        <section style={{
            background: `url(${backgroundColor})`

        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt[100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-4'>
                <h4 className='text-primary font-bold py-3'>Appointment</h4>
                <h3>Make an appointment Today</h3>
                <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Link to="/appoinment">   <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button></Link>
            </div>
        </section>
    );
};

export default MakeAppionment;