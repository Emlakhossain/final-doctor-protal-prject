import React, { useEffect, useState } from 'react';
import aboutBanner from '../../assets/images/appointment.png';
import './About.css';
import ourTeam from '../../assets/images/our-team.jpg';
import Doctor from './Doctor';
import Footer from '../Share/Footer';

const About = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div>
            <section style={{
                background: `url(${aboutBanner})`
            }} className='img-banner flex justify-between align-middle  p-10 text-white font-bold'>
                <div>
                    <h2>About US</h2>
                </div>
                <div>
                    <h4>Home | About Us</h4>
                </div>
            </section>
            <section className='my-10'>
                <h2 className='text-success font-bold text-2xl mt-20'>About Us</h2>
                <div class="hero h-96 bg-base-100 ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={ourTeam} class="max-w-sm rounded-lg shadow-2xl" />
                        <div className='p-20 '>
                            <h1 class="text-5xl font-bold">Our Team Members!</h1>
                            <p class="py-6">Hello, friends how are you? This is very important moments for us, Because we are achieved to your loves and also we are very happy that you are passing your good life after our services. I hope you will better enjoyable life with your Society Thanks.....</p>
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our doctors information area */}

            <section>
                <h2 className='text-2xl font-bold text-success my-20'>Meet Your Health Care Teams:</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;