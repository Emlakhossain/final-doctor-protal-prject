import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import InjectedCheckoutForm from './InjectedCheckoutForm';
const stripePromise = loadStripe('pk_test_51LNh3pAHvWzeWZEX4cHkT0SRKCjiJo8XTPaaXctDvxSblidlpbx41XrdRK0kBCOBz8G6mfnZOLOpqhlGZbUTscAC002Y13SXhT');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-success text-center my-20'>Welcome to Payment Section</h2>
            <div class="card w-50 max-w-md   bg-base-100 shadow-xl mx-auto my-20">
                <div class="card-body">
                    <h2 class="card-title text-success font-bold">Welcome, {appoinment.patientName}</h2>
                    <p>Your Treatment:{appoinment.treatment} </p>
                    <p>Your Booking date:{appoinment.date} Slot: {appoinment.slot} </p>
                    <p>Please Pay USD; {appoinment.price}</p>
                    <button className='btn btn-success btn-sm'>By Now</button>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto ">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <InjectedCheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;