import React from 'react';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Form from './Form';
import Info from './Info/Info';
import MakeAppionment from './MakeAppionment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppionment></MakeAppionment>
            <Testimonials></Testimonials>
            <Form></Form>

        </div>
    );
};

export default Home;